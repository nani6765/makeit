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
    case "Community":
      return Community;
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
        console.log("response : ", response);
        return res.status(200).send({ success: true });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ success: false, err });
      });
  } else {
    Model.findOneAndUpdate(
      { _id: req.body._id },
      { $inc: { likeNum: 1 }, $push: { likeArray: req.body.userId } }
    )
      .exec()
      .then((response) => {
        console.log(response);
        if (response.uid != req.body.userId) {
          let alarmTemp = {
            uid: response.uid,
            url: req.body.url,
            type: `likeTo${req.body.type}`,
            category: req.body.category,
          };
          const alarm = new Alarm(alarmTemp);
          alarm.save(() => {
            return res.status(200).send({ success: true });
          });
        } else {
          return res.status(200).send({ success: true });
        }
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
    postNum: req.body.postNum,
  };

  let PostModel = SelectPostModel(req.body.type);
  //let RepleModel = SelectRepleModel(req.body.type, req.body.stype);
  console.log();

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
            if (response.uid != reple.uid) {
              let alarmTemp = {
                uid: response.uid,
                url: reple.postNum,
                type: "repleTopost",
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

  let temp = req.body;
  let rereple = {};
  rereple.content = temp.content;
  rereple.postId = temp.postId;
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
                url: temp.postNum,
                type: "rerepleToReple",
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
          let alarmtemp = {
            uid: result.uid,
            url: temp.postNum,
            type: "rerepleToPost",
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

module.exports = router;
