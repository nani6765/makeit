var router = require("express").Router();
const { Community } = require("../model/CoPost.js");
const { Counter } = require("../model/Counter.js");
const { User, Log } = require("../model/User.js");

//const setUpload = require("../module/multer/upload.js");
const setDelete = require("../module/multer/delete.js");

var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

////////////////////////////
//          POST          //
////////////////////////////

router.post("/", (req, res) => {
  //카테고리 정렬
  let category = req.body.GNB;
  if (category.category === "전체게시판") {
    delete category.category;
  }

  //최신순&&인기순 정렬
  let sort = {};
  if (req.body.sortPost === "new") {
    sort.createdAt = -1;
  } else {
    sort.likeNum = -1;
  }

  Community.find(category)
    .populate("auther")
    .sort(sort)
    //.skip(req.body.skip)
    .limit(req.body.limit)
    .exec((err, postInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, postInfo });
    });
});

router.post("/postDetail", (req, res) => {
  let filter = {};
  filter.postNum = req.body.postNum;
  Community.findOneAndUpdate(filter, { $inc: { views: 1 } })
    .populate("auther")
    .exec((err, postInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, postInfo });
    });
});

router.post("/postDetail/reple", (req, res) => {
  let filter = {};
  filter.postNum = req.body.postNum;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let limit = req.body.limit ? parseInt(req.body.limit) : 5;
  let sort = {};
  sort.createdAt = 1;
  CommunityReple.find(filter)
    .exec()
    .then((totalReple) => {
      CommunityReple.find(filter)
        .populate("auther")
        .populate("rerepleArray")
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .exec()
        .then((repleInfo) => {
          return res.status(200).json({
            success: true,
            repleInfo,
            repleSize: repleInfo.length,
            totalSize: totalReple.length,
          });
        });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
});

router.post("/postSubmit", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.coPostNum;
      User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
          temp.auther = userInfo._id;
          temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
          const communityPost = new Community(temp);
          communityPost.save();
        });
      counter
        .updateOne({ $inc: { coPostNum: 1 } })
        .exec()
        .then(() => {
          return res.status(200).send({
            success: true,
          });
        });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/postUpdate", (req, res) => {
  let temp = {};
  temp.title = req.body.title;
  temp.content = req.body.content;
  temp.images = req.body.images;
  temp.subCategory = req.body.subCategory;
  let key = req.body.id;
  Community.findByIdAndUpdate({ _id: key }, { $set: temp }).exec(
    (err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

router.post("/postDelete", (req, res) => {
  let temp = req.body;
  for (let i = 0; i < temp.imageLength; i++) {
    setDelete("makeit/community", temp.images[i].key);
  }
  CommunityRereple.deleteMany({ postNum: temp.postNum })
    .exec()
    .then(() => {
      CommunityReple.deleteMany({ postNum: temp.postNum }).exec();
    })
    .then(() => {
      Community.deleteOne({ _id: temp.postInfoId }).exec();
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

module.exports = router;
