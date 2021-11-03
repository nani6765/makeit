var router = require("express").Router();
const { Community } = require("../model/CoPost.js");
const { ShareVideo } = require("../model/Making.js");

//MainPage
router.post("/community", (req, res) => {
  let sort = {};
  if (req.body.sort === "new") {
    sort.createdAt = -1;
  } else if (req.body.sort === "hot") {
    sort.likeNum = -1;
  } else {
    sort.repleNum = -1;
  }
  Community.find()
    .populate("auther")
    .sort(sort)
    .limit(2)
    .exec((err, postInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, postInfo });
    });
});

router.post("/friendVideo", (req, res) => {
  ShareVideo.find()
    .populate("auther")
    .sort(req.body.sort)
    .limit(5)
    .exec((err, Videos) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, Videos });
    });
});

module.exports = router;
