var router = require("express").Router();
const { Community } = require("../model/CoPost.js");
const setUpload = require("../model/multer/upload.js");
const setDelete = require("../model/multer/delete.js");

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
  const communityPost = new Community(req.body);
  communityPost.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

module.exports = router;
