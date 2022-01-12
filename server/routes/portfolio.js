var router = require("express").Router();
const setUpload = require("../module/multer/upload.js");

const { Project } = require("../model/Portfolio.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");

router.post(
  "/prod/profile",
  setUpload(`makeit/portfoilo`),
  (req, res, next) => {
    return res.json({
      success: true,
      filePath: res.req.file.location,
    });
  }
);

router.post(
  "/project/profile",
  setUpload(`makeit/portfoilo/project`),
  (req, res, next) => {
    return res.json({
      success: true,
      filePath: res.req.file.location,
    });
  }
);

router.post("/project/submit", (req, res) => {
  let temp = {
    title: req.body.title,
    thumbnail: req.body.thumbnail,
    introduce: req.body.introduce,
    detailContent: req.body.detailContent,
    location: req.body.location,
    timeline: req.body.timeline,
    tag: req.body.tag,
  };

  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.url = counter.projectNum;
      User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
          console.log("uid : ", req.body.uid, " userInfo : ", userInfo);

          temp.auther = userInfo._id;
          const NewProject = new Project(temp);
          NewProject.save().then(() => {
            Counter.findOneAndUpdate(
              { name: "counter" },
              { $inc: { projectNum: 1 } }
            )
              .exec()
              .then(() => {
                return res.status(200).json({
                  success: true,
                });
              });
          });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        success: false,
      });
    });
});

module.exports = router;
