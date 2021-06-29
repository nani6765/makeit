var router = require("express").Router();
const { User } = require("../model/User");
const { auth } = require("../middleware/auth");
const { Counter } = require("../model/Counter.js");

router.post("/register", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" }, (err, counter) => {
    if (err) return res.status(400).json({ success: false, err });
    temp.userNum = counter.users;
    const user = new User(temp);

    user.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      counter.updateOne({ $inc: { users: 1 } }, (err) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
          success: true,
        });
      });
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, userInfo) => {
    if (!userInfo) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }
    userInfo.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });

      userInfo.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie("friends", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    //유저 정보 선택 전달
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});

router.get("/logout", auth, (req, res) => {
  // console.log('req.user', req.user)
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

module.exports = router;
