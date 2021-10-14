var router = require("express").Router();
const { User } = require("../model/User.js");
const { Alarm } = require("../model/Alarm.js");
const {
  Community,
  CommunityReple,
  CommunityRereple,
} = require("../model/CoPost.js");
const {
  ProPost,
  TempProPost,
  ProReview,
  RequestPost,
  Quotation,
  ShareVideo,
  ShareVideoReple,
  ShareVideoRereple,
} = require("../model/Making.js");

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
    case "CoReple":
      return CommunityReple;
    case "CoRereple":
      return CommunityRereple;
    case "ProPost":
      return ProPost;
    case "Quotation":
      return Quotation;
    case "ShareVideo":
      return ShareVideo;
  }
};

const SelectPostModel = (types) => {
  switch (types) {
    case "Community":
      return Community;
    case "ShareVideo":
      return ShareVideo;
  }
};

const SelectRepleModel = (types) => {
  switch (types) {
    case "Community":
      return CommunityReple;
    case "ShareVideo":
      return ShareVideoReple;
  }
};

const SelectRerepleModel = (types, SecondType = "") => {
  console.log(SecondType);
  switch (types) {
    case "Community":
      return CommunityRereple;
    case "ShareVideo":
      return ShareVideoRereple;
  }
};

/////////////////////////////
//          like           //
/////////////////////////////

router.post("/like", (req, res) => {
  let Model = SelectLikeModel(req.body.type);

  let key = req.body.likeFlag;
  if (key) {
    // 좋아요를 이미 누른 상태
    Model.findOneAndUpdate(
      { postNum: req.body.postNum },
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
    Model.findOneAndUpdate(
      { postNum: req.body.postNum },
      { $inc: { likeNum: 1 }, $push: { likeArray: req.body.userId } }
    )
      .exec()
      .then((response) => {
        if (response.uid != req.body.userId) {
          let alarmTemp = {
            uid: response.uid,
            url: req.body.postNum,
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
                type: "repleToPost",
                category: "community/post",
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
  let RepleModel = SelectRepleModel(req.body.type);

  let temp = {};
  temp.content = req.body.content;
  temp.realTime = setRealTime();
  let key = req.body.id;
  RepleModel.findByIdAndUpdate({ _id: key }, { $set: temp }).exec(
    (err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

router.post("/repleDelete", (req, res) => {
  let PostModel = SelectPostModel(req.body.type);
  let RepleModel = SelectRepleModel(req.body.type);

  PostModel.findOneAndUpdate(
    { postNum: req.body.postNum },
    { $inc: { repleNum: -1 } }
  )
    .exec()
    .then((result) => {
      if (req.body.rerepleNum) {
        RepleModel.findOneAndUpdate(
          { _id: req.body.repleId },
          { $set: { isDeleted: true } }
        ).exec();
      } else {
        RepleModel.findOneAndDelete({ _id: req.body.repleId }).exec();
      }
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      console.log("err", err);
      if (err) return res.status(400).json({ success: false, err });
    });
});

router.post("/repleLike", (req, res) => {
  let key = req.body.likeFlag;

  let RepleModel = SelectRepleModel(req.body.type);

  if (key) {
    // 좋아요를 이미 누른 상태
    RepleModel.findOneAndUpdate(
      { _id: req.body.repleId },
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
    RepleModel.findOneAndUpdate(
      { _id: req.body.repleId },
      { $inc: { likeNum: 1 }, $push: { likeArray: req.body.userId } }
    )
      .exec()
      .then((response) => {
        if (response.uid != req.body.userId) {
          let alarmTemp = {
            uid: response.uid,
            url: response.postNum,
            type: "likeToReple",
            category: "community/post",
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

///////////////////////////////
//          rereple          //
///////////////////////////////

router.post("/rerepleGetAuther", (req, res) => {
  let RerepleModel = SelectRerepleModel(req.body.type);

  RerepleModel.findOne({ _id: req.body.id })
    .populate("auther")
    .exec((err, rerepleInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, rerepleInfo });
    });
});

router.post("/rerepleSubmit", (req, res) => {
  let PostModel = SelectPostModel(req.body.type);
  let RepleModel = SelectRepleModel(req.body.type);
  let RerepleModel = SelectRerepleModel(req.body.type);

  let temp = req.body;
  let rereple = {};
  rereple.postNum = temp.postNum;
  User.findOne({ uid: temp.uid })
    .exec()
    .then((userInfo) => {
      rereple.auther = userInfo._id;
      rereple.content = temp.content;
      rereple.realTime = moment().format("YY-MM-DD[ ]HH:mm");
      const rerepleObj = new RerepleModel(rereple);
      rerepleObj.save().then((doc) => {
        RepleModel.findOneAndUpdate(
          { _id: temp.repleInfo._id },
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
                category: "community/post",
              };
              const replealarm = new Alarm(alarmtemp);
              replealarm.save();
            }
          });
      });
    })
    .then(() => {
      PostModel.findOneAndUpdate(
        { postNum: req.body.postNum },
        { $inc: { repleNum: 1 } }
      )
        .exec()
        .then((result) => {
          let alarmtemp = {
            uid: result.uid,
            url: temp.postNum,
            type: "rerepleToPost",
            category: "community/post",
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
  let RerepleModel = SelectRerepleModel(req.body.type);

  let temp = {};
  temp.content = req.body.content;
  temp.realTime = setRealTime();
  let rerepleId = req.body.rerepleId;

  RerepleModel.findByIdAndUpdate({ _id: rerepleId }, { $set: temp }).exec(
    (err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

router.post("/rerepleDelete", (req, res) => {
  let RepleModel = SelectRepleModel(req.body.type);
  let RerepleModel = SelectRerepleModel(req.body.type);

  RerepleModel.deleteOne({ _id: req.body.rerepleId })
    .exec()
    .then(() => {
      CommunityReple.findOneAndUpdate({
        $inc: { rerepleNum: -1 },
        $pull: { rerepleArray: req.body.rerepleId },
      })
        .exec()
        .then(() => {
          return RepleModel.findOne({ _id: req.body.repleId }).exec();
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

router.post("/rerepleLike", (req, res) => {
  let RerepleModel = SelectRerepleModel(req.body.type);

  let rerepleId = req.body.rerepleId;
  let key = req.body.likeFlag;
  let user = req.body.userId;
  if (key) {
    //likeArray에서 userId 삭제
    RerepleModel.findOneAndUpdate(
      { _id: rerepleId },
      { $inc: { likeNum: -1 }, $pull: { likeArray: user } }
    ).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  } else {
    //userId 삽입
    RerepleModel.findOneAndUpdate(
      { _id: rerepleId },
      { $inc: { likeNum: 1 }, $push: { likeArray: user } }
    )
      .exec()
      .then((result) => {
        let alarmtemp = {
          uid: result.uid,
          url: result.postNum,
          type: "likeToRereple",
          category: "community/post",
        };
        const alarm = new Alarm(alarmtemp);
        alarm.save(() => {
          return res.status(200).send({ success: true });
        });
      })
      .catch((err) => {
        return res.status(400).send({ success: false, err });
      });
  }
});

module.exports = router;
