var router = require("express").Router();
const { User } = require("../model/User.js");
const { Counter } = require("../model/Counter.js");
const { Community } = require("../model/CoPost.js");
const setUpload = require("../module/multer/upload.js");
const sendEmail = require("../module/email.js");

router.post("/register", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.unserNum = counter.userNum;
      const NewUser = new User(temp);
      NewUser.save((userInfo) => {
        counter
          .updateOne({ $inc: { userNum: 1 } })
          .exec()
          .then((result) => {
            return res.status(200).send({
              success: true
            });
          });
      });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
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
  };
  User.findOneAndUpdate({ uid: req.body.uid }, { $set: temp })
    .exec()
    .then(() => {
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
});

router.post("/checkEmail", (req, res) => {
  let email = req.body.email;
  User.findOne({ email: email })
    .exec()
    .then((doc) => {
      return res.status(200).send({ success: true, doc: doc });
    })
    .catch((err) => {
      if (err) return res.json({ success: false, err });
    });
});

router.post("/checkNickname", (req, res) => {
  User.findOne({ displayName: req.body.displayName })
    .exec()
    .then((doc) => {
      let checkFlag = true;
      if (doc) {
        checkFlag = false;
      }
      return res.status(200).send({ success: true, checkFlag });
    })
    .catch((err) => {
      if (err) return res.json({ success: false, err });
    });
});

router.post("/sendEmail", (req, res) => {
  if (sendEmail(req.body.email, req.body.key, req.body.name)) {
    return res.status(200).send({ success: true });
  } else {
    return res.status(400).json({ success: false, err });
  }
});

//////////////////////////////////
//           mypagelog          //
//////////////////////////////////

router.post("/getMyLog", (req, res) => {
  User.findOne({ uid: req.body.uid })
    .populate("logs")
    .exec()
    .then((userInfo) => {
      console.log(userInfo);
      return res.status(200).send({ success: true, logs: userInfo.logs });
    })
    .catch((err) => {
      console.log(err);
      if (err) return res.json({ success: false, err });
    });
});

module.exports = router;
