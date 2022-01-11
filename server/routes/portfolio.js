var router = require("express").Router();
const setUpload = require("../module/multer/upload.js");

router.post("/prod/profile", setUpload(`makeit/portfoilo`), (req, res, next) => {

  return res.json({
  success: true,
  filePath: res.req.file.location,
  });
});


module.exports = router;