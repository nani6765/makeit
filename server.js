const express = require("express");
const path = require("path");
const cookeParser = require("cookie-parser");
const app = express();
const http = require("http").createServer(app);
const config = require("./config/dev");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookeParser());

app.use("/api/user", require("./routes/user.js"));
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connecting...");
    http.listen(8080, function () {
      console.log("listening on 8080");
    });
  })
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/client/build/index.html"));
});
/*
app.post("/api/register", (req, res) => {
  const user = new User(req.body);
  console.log("req.body", req.body);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/api/login", (req, res) => {
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

// role 1 어드민    role 2 특정 부서 어드민
// role 0 -> 일반유저   role 0이 아니면  관리자
app.get("/api/auth", auth, (req, res) => {
  //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get("/api/logout", auth, (req, res) => {
  // console.log('req.user', req.user)
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});
*/
