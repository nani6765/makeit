var router = require("express").Router();
const {
  Community,
  CommunityReple,
  CommunityRereple,
} = require("../model/CoPost.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");
const { Alarm } = require("../model/Alarm.js");

const setUpload = require("../module/multer/upload.js");
const setDelete = require("../module/multer/delete.js");
const setRealTime = require("../module/multer/realTime.js");
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

router.post("/image", setUpload("makeit/community"), (req, res, next) => {
  return res.json({
    success: true,
    key: res.req.file.key,
    filePath: res.req.file.location,
    fileName: res.req.file.originalname,
  });
});

module.exports = router;
