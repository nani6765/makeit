var router = require("express").Router();
const { User } = require("../model/User.js");
const { Counter } = require("../model/Counter.js");
const setUpload = require("../module/multer/upload.js");

router.post("/register", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" }, (err, counter) => {
    if (err) return res.status(400).json({ success: false, err });
    temp.unserNum = counter.userNum;
    const NewUser = new User(temp);
    NewUser.save((err, userInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      counter.updateOne({ $inc: { userNum: 1 } }, (err) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
          success: true,
          userInfo: userInfo._id,
        });
      });
    });
  });
});

router.post("/editProfile", setUpload(`makeit/user/`), (req, res, next) => {
  return res.json({
    success: true,
    key: res.req.file.key,
    filePath: res.req.file.location,
    fileName: res.req.file.originalname,
  });
});

router.post("/uploadProfile", (req, res) => {
  let temp = {
    photoURL: req.body.photoURL,
    displayName: req.body.displayName,
  }
  User.findOneAndUpdate({uid: req.body.uid}, {$set: temp}).exec()
  .then((err) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
  });
})

module.exports = router;
