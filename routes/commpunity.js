var router = require("express").Router();
const { Community } = require("../model/CoPost.js");
const { Counter } = require("../model/Counter.js");
const setUpload = require("../model/multer/upload.js");
const setDelete = require("../model/multer/delete.js");

router.post("/", (req, res) => {
  let filter = {};
  filter.category = req.body.category;
  Community.find(filter)
    .populate("auther")
    .exec((err, postInfo) => {
      if (req.body.sortPost === "최신순") {
        postInfo.sort((a, b) => {
          return new Date(b.createAt) - new Date(a.createAt);
        });
      } else {
        postInfo.sort((a, b) => {
          if (a.views > b.views) {
            return 1;
          }
          if (a.views < b.views) {
            return -1;
          }
          return 0;
        });
      }

      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, postInfo });
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

router.post("/image/delete", (req, res) => {
  setDelete("makeit/community", req.body.key);

  return res.json({
    success: true,
  });
});

router.post("/postSubmit", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" }, (err, counter) => {
    if (err) return res.status(400).json({ success: false, err });
    temp.postNum = counter.coPosts;
    const communityPost = new Community(temp);

    communityPost.save((err, doc) => {
      if (err) return res.status(400).json({ success: false, err });
      counter.updateOne({ $inc: { coPosts: 1 } }, (err) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
          success: true,
        });
      });
    });
  });
});

module.exports = router;
