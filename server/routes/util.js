var router = require("express").Router();
const { User, Log } = require("../model/User.js");
const { Alarm } = require("../model/Alarm.js");
const { Community } = require("../model/CoPost.js");

const {
  ProPost,
  TempProPost,
  ProReview,
  RequestPost,
  Quotation,
  ShareVideo,
} = require("../model/Making.js");
const { PartFA, PartFP, PartIP, PartLo } = require("../model/Participate.js");

const { Reple, Rereple } = require("../model/Reple.js");
/*
const { Counter } = require("../model/Counter.js");
const { Chat } = require("../model/Chat.js");
const {
  TempProPost,
  ProReview,
  RequestPost,
} = require("../model/Making.js");
*/

var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const setRealTime = require("../module/multer/realTime.js");
const setUpload = require("../module/multer/upload.js");
const setDelete = require("../module/multer/delete.js");
const setLog = require("../module/setLog.js");

/////////////////////////////
//         Model           //
/////////////////////////////

const SelectLikeModel = (types) => {
  switch (types) {
    case "CoPost":
      return Community;
    case "Reple":
      return Reple;
    case "Rereple":
      return Rereple;
    case "ProPost":
      return ProPost;
    case "Quotation":
      return Quotation;
    case "ShareVideo":
      return ShareVideo;
    case "FA":
      return PartFA;
    case "FP":
      return PartFP;
    case "IP":
      return PartIP;
    case "Lo":
      return PartLo;
  }
};

const SelectPostModel = (types) => {
  switch (types) {
    case "CoPost":
      return Community;
    case "Community":
      return Community;
    case "ProPost":
      return ProPost;
    case "ShareVideo":
      return ShareVideo;
    case "Request":
      return RequestPost;
    case "FA":
      return PartFA;
    case "FP":
      return PartFP;
    case "IP":
      return PartIP;
    case "Lo":
      return PartLo;
  }
};

const SelectURL = (types) => {
  switch (types) {
    case "CoPost":
      return "/community/post/";
    case "ProPost":
      return "making/producerPost/";
    case "Quotation":
      return "/making/requestPost/";
    case "ShareVideo":
      return "/making/shareVideo/";
    case "FA":
      return "/participate/post/";
    case "FP":
      return "/participate/post/";
    case "IP":
      return "/participate/post/";
    case "Lo":
      return "/participate/post/";
  }
};

/////////////////////////////
//          Image          //
/////////////////////////////

router.post(
  "/community/image/upload",
  setUpload(`makeit/community`),
  (req, res, next) => {
    return res.json({
      success: true,
      key: res.req.file.key,
      filePath: res.req.file.location,
      fileName: res.req.file.originalname,
    });
  }
);
router.post(
  "/making/image/upload",
  setUpload(`makeit/making`),
  (req, res, next) => {
    return res.json({
      success: true,
      key: res.req.file.key,
      filePath: res.req.file.location,
      fileName: res.req.file.originalname,
    });
  }
);
router.post(
  "/participate/image/upload",
  setUpload(`makeit/participate`),
  (req, res, next) => {
    return res.json({
      success: true,
      key: res.req.file.key,
      filePath: res.req.file.location,
      fileName: res.req.file.originalname,
    });
  }
);

router.post("/image/delete", (req, res) => {
  setDelete("makeit/community", req.body.key);
  return res.json({
    success: true,
  });
});

/////////////////////////////
//          like           //
/////////////////////////////

router.post("/like", (req, res) => {
  let Model = SelectLikeModel(req.body.type);

  let key = req.body.likeFlag;
  if (key) {
    // 좋아요를 이미 누른 상태
    Model.findOneAndUpdate(
      { _id: req.body._id },
      { $inc: { likeNum: -1 }, $pull: { likeArray: req.body.userId } }
    )
      .exec()
      .then((response) => {
        return res.status(200).send({ success: true });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ success: false, err });
      });
  } else {
    let URL = SelectURL(req.body.type);
    Model.findOneAndUpdate(
      { _id: req.body._id },
      { $inc: { likeNum: 1 }, $push: { likeArray: req.body.userId } }
    )
      .exec()
      .then((response) => {
        let alarmTemp = {
          uid: response.uid,
          url: req.body.url,
          type: "like",
          category: req.body.category,
        };
        console.log("alarm", alarmTemp);
        const alarm = new Alarm(alarmTemp);
        alarm.save(() => {
          let flag = setLog(req.body.userId, "like", `${URL + req.body.url}`);
          if (flag) {
            return res.status(200).send({ success: true });
          }
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ success: false, err });
      });
  }
});

/////////////////////////////
//          reple          //
/////////////////////////////

router.post("/getReple", (req, res) => {
  let filter = {};
  filter.postId = req.body.postId;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let limit = req.body.limit ? parseInt(req.body.limit) : 5;
  let sort = {};
  sort.createdAt = 1;
  Reple.find(filter)
    .exec()
    .then((totalReple) => {
      Reple.find(filter)
        .populate("auther")
        .populate("rerepleArray")
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .exec()
        .then((repleInfo) => {
          return res.status(200).json({
            success: true,
            repleInfo,
            repleSize: repleInfo.length,
            totalSize: totalReple.length,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

router.post("/repleSubmit", (req, res) => {
  let reple = {
    uid: req.body.uid,
    postId: req.body.postId,
    content: req.body.content,
    url: req.body.url,
  };

  let PostModel = SelectPostModel(req.body.type);
  //let RepleModel = SelectRepleModel(req.body.type, req.body.stype);
  //console.log();
  let URL = SelectURL(req.body.type);

  User.findOne({ uid: req.body.uid })
    .exec()
    .then((userInfo) => {
      reple.auther = userInfo._id;
      reple.realTime = moment().format("YY-MM-DD[ ]HH:mm");
      const NewReple = new Reple(reple);
      NewReple.save(() => {
        PostModel.findOneAndUpdate(
          { _id: req.body.postId },
          { $inc: { repleNum: 1 } }
        )
          .exec()
          .then((response) => {
            let flag = setLog(req.body.uid, "reple", `${URL + reple.postNum}`);
            if (response.uid != reple.uid) {
              let alarmTemp = {
                uid: response.uid,
                url: reple.url,
                type: "reple",
                category: req.body.category,
              };
              const alarm = new Alarm(alarmTemp);
              alarm.save(() => {
                return res.status(200).send({ success: true });
              });
            } else {
              return res.status(200).send({ success: true });
            }
          });
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

router.post("/repleUpdate", (req, res) => {
  let temp = {};
  temp.content = req.body.content;
  temp.realTime = setRealTime();
  let key = req.body.id;
  Reple.findByIdAndUpdate({ _id: key }, { $set: temp }).exec((err, post) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).send({ success: true });
  });
});

router.post("/repleDelete", (req, res) => {
  let PostModel = SelectPostModel(req.body.type);

  PostModel.findOneAndUpdate(
    { _id: req.body.postId },
    { $inc: { repleNum: -1 } }
  )
    .exec()
    .then((result) => {
      if (req.body.rerepleNum) {
        Reple.findOneAndUpdate(
          { _id: req.body.repleId },
          { $set: { isDeleted: true } }
        ).exec();
      } else {
        Reple.findOneAndDelete({ _id: req.body.repleId }).exec();
      }
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      console.log("err", err);
      if (err) return res.status(400).json({ success: false, err });
    });
});

///////////////////////////////
//          rereple          //
///////////////////////////////

router.post("/rerepleGetAuther", (req, res) => {
  Rereple.findOne({ _id: req.body.id })
    .populate("auther")
    .exec((err, rerepleInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, rerepleInfo });
    });
});

router.post("/rerepleSubmit", (req, res) => {
  let PostModel = SelectPostModel(req.body.type);
  let URL = SelectURL(req.body.type);
  let temp = req.body;
  let rereple = {};
  rereple.uid = temp.uid;
  rereple.content = temp.content;
  rereple.postId = temp.postId;
  rereple.url = temp.url;
  rereple.realTime = moment().format("YY-MM-DD[ ]HH:mm");
  User.findOne({ uid: temp.uid })
    .exec()
    .then((userInfo) => {
      rereple.auther = userInfo._id;
      const rerepleObj = new Rereple(rereple);
      rerepleObj.save().then((doc) => {
        Reple.findOneAndUpdate(
          { _id: temp.repleId },
          {
            $inc: { rerepleNum: 1 },
            $push: { rerepleArray: doc._id },
          }
        )
          .exec()
          .then((result) => {
            if (result.uid != req.body.uid) {
              let alarmtemp = {
                uid: result.uid,
                url: temp.url,
                type: "reple",
                category: req.body.category,
              };
              const replealarm = new Alarm(alarmtemp);
              replealarm.save();
            }
          });
      });
    })
    .then(() => {
      console.log(req.body);
      PostModel.findOneAndUpdate(
        { _id: req.body.postId },
        { $inc: { repleNum: 1 } }
      )
        .exec()
        .then((result) => {
          let flag = setLog(req.body.uid, "rereple", `${URL + reple.postNum}`);

          let alarmtemp = {
            uid: result.uid,
            url: temp.url,
            type: "reple",
            category: req.body.category,
          };
          if (req.body.uid != result.uid) {
            const alarm = new Alarm(alarmtemp);
            alarm.save();
          }
          return res.status(200).send({ success: true });
        });
    })
    .catch((err) => {
      console.log("err", err);
      if (err) return res.status(400).json({ success: false, err });
    });
});

router.post("/rerepleUpdate", (req, res) => {
  let temp = {};
  temp.content = req.body.content;
  temp.realTime = setRealTime();
  let rerepleId = req.body.rerepleId;

  Rereple.findByIdAndUpdate({ _id: rerepleId }, { $set: temp }).exec(
    (err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

router.post("/rerepleDelete", (req, res) => {
  Rereple.deleteOne({ _id: req.body.rerepleId })
    .exec()
    .then((rereple) => {
      Reple.findOneAndUpdate(
        { postId: rereple.postId },
        {
          $inc: { rerepleNum: -1 },
          $pull: { rerepleArray: req.body.rerepleId },
        }
      )
        .exec()
        .then(() => {
          return Reple.findOne({ _id: req.body.repleId }).exec();
        })
        .then((repleInfo) => {
          if (repleInfo.isDeleted && !repleInfo.rerepleNum) {
            repleInfo.deleteOne();
          }
        });
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      console.log("err", err);
      return res.status(400).json({ success: false, err });
    });
});

///////////////////////////////
//          search           //
///////////////////////////////

router.post("/search", (req, res) => {
  console.log(req.body.term);
  User.find({ displayName: { $regex: req.body.term } })
    .exec()
    .then((userInfo) => {
      let uidArr = [];
      if (userInfo != []) {
        for (let i = 0; i < userInfo.length; i++) {
          uidArr.push(userInfo[i].uid);
        }
      }
      //community
      Community.find({
        $or: [
          { title: { $regex: req.body.term } },
          { content: { $regex: req.body.term } },
          { uid: { $in: uidArr } },
        ],
      })
        .populate("auther")
        .exec()
        .then((coPost) => {
          //making
          ProPost.find({
            $or: [
              { oneLineIntroduce: { $regex: req.body.term } },
              { description: { $regex: req.body.term } },
              { uid: { $in: uidArr } },
            ],
          })
            .populate("auther")
            .exec()
            .then((proPost) => {
              RequestPost.find({
                $or: [
                  { oneLineIntroduce: { $regex: req.body.term } },
                  { content: { $regex: req.body.term } },
                  { uid: { $in: uidArr } },
                ],
              })
                .populate("auther")
                .exec()
                .then((reqPost) => {
                  ShareVideo.find({
                    $or: [
                      {
                        oneLineIntroduce: { $regex: req.body.term },
                      },
                      { content: { $regex: req.body.term } },
                      { uid: { $in: uidArr } },
                    ],
                  })
                    .populate("auther")
                    .exec()
                    .then((sharePost) => {
                      let MakingPost = [...proPost, ...reqPost, ...sharePost];
                      if (MakingPost.length > 2) {
                        MakingPost.sort((a, b) => {
                          let Day1 = new Date(a.updatedAt);
                          let Day2 = new Date(b.updatedAt);
                          return Day2 - Day1;
                        });
                      }
                      //participate
                      PartFA.find({
                        $or: [
                          {
                            oneLineIntroduce: {
                              $regex: req.body.term,
                            },
                          },
                          {
                            content: { $regex: req.body.term },
                          },
                          { uid: { $in: uidArr } },
                        ],
                      })
                        .populate("auther")
                        .exec()
                        .then((partPost) => {
                          return res.status(200).send({
                            success: true,
                            coLength: coPost.length,
                            coResult: coPost.splice(0, 5),
                            makingLength: MakingPost.length,
                            makingResult: MakingPost.splice(0, 5),
                            participateLength: partPost.length,
                            participateResult: partPost.splice(0, 5),
                          });
                        });
                    });
                });
            });
        });
    })
    .catch((err) => {
      console.log("err", err);
      return res.status(400).json({ success: false, err });
    });
});

router.post("/category/search", (req, res) => {
  console.log(req.body.term);
  console.log(req.body.category);
  let Term = req.body.term;
  let Model = SelectPostModel(req.body.category);

  Model.find({
    $or: [{ title: { $regex: Term } }, { content: { $regex: Term } }],
  })
    .populate()
    .exec()
    .then((postResult) => {
      Model.find()
        .populate({
          path: "auther",
          match: {
            displayName: { $regex: Term },
          },
        })
        .exec()
        .then((autherResult) => {
          let searchResult = [...postResult, ...autherResult];
          if (searchResult.length > 2) {
            coResult.sort((a, b) => {
              let Day1 = new Date(a.updatedAt);
              let Day2 = new Date(b.updatedAt);
              return Day2 - Day1;
            });
          }
          console.log(searchResult);
          return res.status(200).send({
            success: true,
            searchLength: searchResult.length,
            searchResult: searchResult,
          });
        });
    })
    .catch((err) => {
      console.log("err", err);
      return res.status(400).json({ success: false, err });
    });
});

module.exports = router;
