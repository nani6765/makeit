var router = require("express").Router();
const { User } = require("../model/User");
const { Counter } = require("../model/Counter.js");

router.post("/google/check", (req, res) => {
  User.findOne({ email: req.body.email }, (err, userInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    if (!userInfo) {
        return res.status(200).json({
          success: true,
          googleCheck: false,
        });
    }
    return res.status(200).json({
      success: true,
      googleCheck: true,
    });
  });
});

router.post("/google/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, userInfo) => {
    if (!userInfo) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }

    userInfo.generateToken((err, user) => {
      if (err) return res.status(400).send(err);
      res
      .cookie("friends", user.token)
      .status(200)
      .json({ loginSuccess: true, userId: user._id });
    });
  });
});

module.exports = router;