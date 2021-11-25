var router = require("express").Router();
const { Community } = require("../model/CoPost.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");
const { Reple, Rereple } = require("../model/Reple.js");
//const setUpload = require("../module/multer/upload.js");
const setDelete = require("../module/multer/delete.js");
const setLog = require("../module/setLog.js");

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

  if (req.body.searchTerm) {
    category.$or = [
      { title: { $regex: req.body.searchTerm } },
      { content: { $regex: req.body.searchTerm } },
    ];
  }

  //최신순&&인기순 정렬
  let sort = {};
  if (req.body.sortPost === "new") {
    sort.createdAt = -1;
  } else {
    sort.likeNum = -1;
  }

  Community.countDocuments(category)
    .exec()
    .then((pageLen) => {
      Community.find(category)
        .populate("auther")
        .sort(sort)
        .skip(req.body.skip)
        .limit(req.body.limit)
        .exec((err, postInfo) => {
          return res
            .status(200)
            .json({ success: true, postInfo, pageLen: pageLen });
        });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
});

router.post("/search", (req, res) => {
  let category = { category: req.body.category };
  let sort = {};
  sort.createdAt = -1;
  User.find({ displayName: { $regex: req.body.term } })
    .exec()
    .then((userInfo) => {
      let uidArr = [];
      if (userInfo != []) {
        for (let i = 0; i < userInfo.length; i++) {
          uidArr.push(userInfo[i].uid);
        }
      }
      if (req.body.category === "전체게시판") {
        Community.find({
          $or: [
            { title: { $regex: req.body.term } },
            { content: { $regex: req.body.term } },
            { uid: { $in: uidArr } },
          ],
        })
          .populate("auther")
          .sort(sort)
          .exec()
          .then((post) => {
            return res.status(200).send({
              success: true,
              postLength: post.length,
              post: post.splice(req.body.skip, req.body.limit),
            });
          });
      } else {
        Community.find({
          $or: [
            { title: { $regex: req.body.term } },
            { content: { $regex: req.body.term } },
            { uid: { $in: uidArr } },
          ],
          category: { $regex: category.category },
        })
          .populate("auther")
          .sort(sort)
          .exec()
          .then((post) => {
            return res.status(200).send({
              success: true,
              postLength: post.length,
              post: post.splice(req.body.skip, req.body.limit),
            });
          });
      }
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/postDetail", (req, res) => {
  let filter = {};
  filter.url = req.body.url;
  Community.findOneAndUpdate(filter, { $inc: { views: 1 } })
    .populate("auther")
    .exec((err, postInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, postInfo });
    });
});

router.post("/postSubmit", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.url = counter.coPostNum;
      User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
          temp.auther = userInfo._id;
          temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
          const communityPost = new Community(temp);
          communityPost.save().then((doc) => {
            setLog(req.body.uid, "post", `/community/post/${temp.url}`);
          });
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
  Rereple.deleteMany({ postId: temp.postInfoId })
    .exec()
    .then(() => {
      Reple.deleteMany({ postId: temp.postInfoId }).exec();
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
