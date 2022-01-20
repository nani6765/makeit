var router = require("express").Router();
const setUpload = require("../module/multer/upload.js");

const {
  Project,
  ProdPortfolio,
  ProPortfolio,
} = require("../model/Portfolio.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");

//
router.post(
  "/prod/profile",
  setUpload(`makeit/portfolio`),
  (req, res, next) => {
    return res.json({
      success: true,
      filePath: res.req.file.location,
    });
  }
);

router.post("/upload/getProject", (req, res) => {
  Project.find({ uid: req.body.uid })
    .exec()
    .then((doc) => {
      return res.json({
        success: true,
        projectList: doc,
      });
    });
});

router.post("/prod/submit", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.url = counter.prodNum;
      User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
          temp.auther = userInfo._id;
          const NewProdPortfolio = new ProdPortfolio(temp);
          NewProdPortfolio.save().then(() => {
            Counter.findOneAndUpdate(
              { name: "counter" },
              { $inc: { prodNum: 1 } }
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

router.post("/pf/getList", (req, res) => {});

//
router.post(
  "/project/profile",
  setUpload(`makeit/portfolio/project`),
  (req, res, next) => {
    return res.json({
      success: true,
      filePath: res.req.file.location,
    });
  }
);

router.post("/project/getDetail", (req, res) => {
  Project.findOne({ url: req.body.url })
    .populate([
      "auther",
      { path: "participater.portfolio", model: "ProdPortfolio" },
    ])
    .then((project) => {
      return project.populate({
        path: "participater.portfolio",
      });
    })
    //.exec()
    .then((projectInfo) => {
      return res.status(200).json({
        success: true,
        projectInfo: projectInfo,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        success: false,
      });
    });
});

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

router.post("/project/getPortfolioList", (req, res) => {
  ProdPortfolio.find({ uid: req.body.uid })
    .populate("auther")
    .exec()
    .then((total) => {
      return res.status(200).json({
        success: true,
        portList: [...total],
      });
    });
});

router.post("/project/Participate", (req, res) => {
  let temp = {
    portfolio: req.body.portfilioId,
    type: req.body.type,
    accept: false,
    uid: req.body.uid,
  };
  Project.findOneAndUpdate(
    { _id: req.body.projectId },
    { $push: { participater: temp } }
  )
    .exec()
    .then((doc) => {
      return res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
      });
    });
});

router.post("/pro/submit", (req, res) => {
  let temp = {
    uid: req.body.uid,
    url: 1,
    title: "1",
    proName: "1",
    FieldArr: ["1", "2"],
    ProLocation: "1",
    ProIntroduce: "1",
    TagArr: ["1", "2"],
    public: true,
  };
  User.findOne({ uid: req.body.uid })
    .exec()
    .then((userInfo) => {
      temp.auther = userInfo._id;
      const Pro = new ProPortfolio(temp);
      Pro.save().then(() => {
        return res.status(200).json({
          success: true,
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
