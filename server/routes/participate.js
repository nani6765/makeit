var router = require("express").Router();
const { PartFA, PartFP, PartIP, PartLo } = require("../model/Participate.js");
//const { Reple, Rereple } = require("../model/Reple.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");

const setUpload = require("../module/multer/upload.js");
const setDelete = require("../module/multer/delete.js");

var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const SelectModel = (types) => {
  switch (types) {
    case "FA":
      return PartFA;
    case "FP":
      return PartFP;
    case "IP":
      return PartIP;
    case "Lo":
      return PartLo;
  }
};

/*

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


*/

router.post("/", (req, res) => {
  let temp = req.body;

  let PostModel = SelectModel(req.body.type);
  //카테고리 정렬
  let category = {
    type: temp.type,
    $or: [],
  };

  if (temp.subCategory && temp.subCategory !== "전체") {
    delete category.$or;
    category.subCategory = req.body.subCategory;
  }
  if (temp.gender) {
    for (let i = 0; i < temp.gender.length; i++) {
      category["$or"].push({ gender: temp.gender[i] });
    }
  }
  if (temp.filmType) {
    for (let i = 0; i < temp.filmType.length; i++) {
      category["$or"].push({ filmType: temp.filmType[i] });
    }
  }

  if (temp.classification) {
    for (let i = 0; i < temp.classification.length; i++) {
      category["$or"].push({ classification: temp.classification[i] });
    }
  }
  if (category.$or && !category.$or.length) delete category.$or;

  //최신순&&인기순 정렬
  let sort = {};
  if (temp.sortPost === "최신순") {
    sort.createdAt = -1;
  } else {
    sort.likeNum = -1;
  }

  PostModel.find(category)
    .populate("auther")
    .sort(sort)
    .skip(req.body.skip)
    .limit(req.body.limit)
    .exec((err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, post });
    });
});

router.post("/getPageLen", (req, res) => {
  let PostModel = SelectModel(req.body.type);
  let temp = req.body;

  let category = {
    type: temp.type,
    $or: [],
  };

  if (temp.category && temp.category !== "전체") {
    delete category.$or;
    category.category = req.body.category;
  }
  if (temp.gender) {
    for (let i = 0; i < temp.gender.length; i++) {
      category["$or"].push({ gender: temp.gender[i] });
    }
  }
  if (temp.filmType) {
    for (let i = 0; i < temp.filmType.length; i++) {
      category["$or"].push({ filmType: temp.filmType[i] });
    }
  }
  if (temp.classification) {
    for (let i = 0; i < temp.classification.length; i++) {
      category["$or"].push({ classification: temp.classification[i] });
    }
  }
  if (!category.$or.length) delete category.$or;

  PostModel.countDocuments(category)
    .exec()
    .then((cnt) => {
      return res.status(200).send({
        success: true,
        len: cnt,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

router.post("/getPostDetail", (req, res) => {
  PartFP.findOne({ postNum: req.body.postNum })
    .populate("auther")
    .exec()
    .then((post) => {
      return res.status(200).send({
        success: true,
        post: post,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

router.post("/postSubmit", (req, res) => {
  let temp = req.body;
  let PostModel = SelectModel(req.body.type);
  Counter.findOneAndUpdate({ name: "counter" }, { $inc: { participateNum: 1 } })
    .exec()
    .then((counter) => {
      temp.postNum = counter.participateNum;
      User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
          temp.auther = userInfo._id;
          temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
          const Post = new PostModel(temp);
          Post.save().then(() => {
            return res.status(200).send({
              success: true,
            });
          });
        });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

/*
router.post("/postUpdate", (req, res) => {
  let temp = {};
  temp.title = req.body.title;
  temp.content = req.body.content;
  temp.images = req.body.images;
  temp.subCategory = req.body.subCategory;
  temp.filters = req.body.filters;
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
  Rereple.deleteMany({ postNum: temp.postNum })
    .exec()
    .then(() => {
      Reple.deleteMany({ postNum: temp.postNum }).exec();
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


*/
module.exports = router;
