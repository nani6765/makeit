var router = require("express").Router();
const { User } = require("../model/User");
const { Community } = require("../model/CoPost.js");

router.post("/community", (req, res) => {
  let sort = {};
  if (req.body.sort === "new") {
    sort.createdAt = -1;
  } else if (req.body.sort === "hot") {
    sort.likeNum = -1;
  } else {
    sort.repleNum = -1;
  }
  console.log("sort", sort);
  Community.find()
    .populate("auther")
    .sort(sort)
    .limit(2)
    .exec((err, postInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, postInfo });
    });
});

module.exports = router;
