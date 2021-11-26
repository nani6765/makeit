var router = require("express").Router();
const { PartFA, PartFP, PartIP, PartLo } = require("../model/Participate.js");
//const { Reple, Rereple } = require("../model/Reple.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");

const setUpload = require("../module/multer/upload.js");
const setDelete = require("../module/multer/delete.js");
const setLog = require("../module/setLog.js");

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

router.post("/search", (req, res) => {
  let sort = {};
  sort.createdAt = -1;

  let filter = {
    $or: [
      { title: { $regex: req.body.term } },
      { content: { $regex: req.body.term } },
    ],
  };

  if (req.body.type !== "all") {
    filter.type = req.body.type;
  }

  User.find({ displayName: { $regex: req.body.term } })
    .exec()
    .then((userInfo) => {
      let uidArr = [];
      if (userInfo != []) {
        for (let i = 0; i < userInfo.length; i++) {
          uidArr.push(userInfo[i].uid);
        }
      }
      filter.$or.push({ uid: { $in: uidArr } });
      PartFA.find(filter)
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
    });
});

router.post("/", (req, res) => {
  let temp = req.body;

  let PostModel = SelectModel(req.body.type);
  //카테고리 정렬

  let category = {
    type: temp.type,
    $or: [],
  };

  if (temp.category && temp.category !== "전체") {
    delete category.$or;
    category.subCategory = req.body.category;
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
  if (temp.sort === "최신순") {
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
  if (temp.category && temp.category !== "전체") {
    delete category.$or;
    category.category = req.body.category;
  }

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
  PartFP.findOne({ url: req.body.url })
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
      temp.url = counter.participateNum;
      User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
          temp.auther = userInfo._id;
          temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
          const Post = new PostModel(temp);
          Post.save().then(() => {
            let flag = setLog(temp.uid, "post", `participate/post/${temp.url}`);
            if (flag) {
              return res.status(200).send({ success: true });
            }
          });
        });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/post/edit", (req, res) => {
  let temp = req.body;

  if (
    temp.deleteThumbnail &&
    temp.deleteThumbnail[0].key !== temp.thumbnail[0].key
  ) {
    setDelete("makeit/participate", temp.deleteThumbnail[0].key);
    delete temp.deleteThumbnail;
  }

  let PostModel = SelectModel(temp.type);

  PostModel.findOneAndUpdate({ url: temp.url }, temp)
    .exec()
    .then((result) => {
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/post/delete", (req, res) => {
  let temp = req.body.postInfo;

  if (temp.thumbnail) {
    setDelete("makeit/participate", temp.thumbnail[0].key);
  }
  if (temp.images) {
    for (let i = 0; i < temp.images.length; i++) {
      setDelete("makeit/participate", temp.images[i].key);
    }
  }

  let PostModel = SelectModel(temp.type);
  PostModel.findOneAndDelete({ url: temp.url })
    .exec()
    .then(() => {
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});
module.exports = router;
