var router = require("express").Router();
const {
  Community,
  CommunityReple,
  CommunityRereple,
} = require("../model/CoPost.js");
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");
const { Alarm } = require("../model/Alarm.js");

const setUpload = require("../module/multer/upload.js");
const setDelete = require("../module/multer/delete.js");
const setRealTime = require("../module/multer/realTime.js");
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

////////////////////////////
//          POST          //
////////////////////////////

router.post("/", (req, res) => {
  //카테고리 정렬
  let category = req.body.GNB;
  if (category.category === "전체게시판") {
    delete category.category;
  }

  //최신순&&인기순 정렬
  let sort = {};
  if (req.body.sortPost === "new") {
    sort.createdAt = -1;
  } else {
    sort.likeNum = -1;
  }

  console.log(sort);
  Community.find(category)
    .populate("auther")
    .sort(sort)
    .skip(req.body.skip)
    .limit(req.body.limit)
    .exec((err, postInfo) => {
      console.log(postInfo)
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, postInfo });
    });
});

router.post("/postDetail", (req, res) => {
  let filter = {};
  filter.postNum = req.body.postNum;
  Community.findOneAndUpdate(filter, { $inc: { views: 1 } })
    .populate("auther")
    .exec((err, postInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, postInfo });
    });
});

router.post("/postDetail/reple", (req, res) => {
  let filter = {};
  filter.postNum = req.body.postNum;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let limit = req.body.limit ? parseInt(req.body.limit) : 5;
  let sort = {};
  sort.createdAt = 1;
  CommunityReple.find(filter)
    .exec()
    .then((totalReple) => {
      CommunityReple.find(filter)
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

router.post("/image", setUpload("makeit/community"), (req, res, next) => {
  return res.json({
    success: true,
    key: res.req.file.key,
    filePath: res.req.file.location,
    fileName: res.req.file.originalname,
  });
});

router.post("/postSubmit", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.coPostNum;
      User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
          temp.auther = userInfo._id;
          temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
          const communityPost = new Community(temp);
          communityPost.save();
        });
      counter
        .updateOne({ $inc: { coPostNum: 1 } })
        .exec()
        .then(() => {
          return res.status(200).send({
            success: true,
          });
        });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/postUpdate", (req, res) => {
  let temp = {};
  temp.title = req.body.title;
  temp.content = req.body.content;
  temp.images = req.body.images;
  temp.subCategory = req.body.subCategory;
  temp.filters = req.body.filters;
  let key = req.body.id;
  Community.findByIdAndUpdate({ _id: key }, { $set: temp }).exec(
    (err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

router.post("/image/delete", (req, res) => {
  setDelete("makeit/community", req.body.key);
  return res.json({
    success: true,
  });
});

router.post("/postDelete", (req, res) => {
  let temp = req.body;
  for (let i = 0; i < temp.imageLength; i++) {
    setDelete("makeit/community", temp.images[i].key);
  }
  CommunityRereple.deleteMany({ postNum: temp.postNum })
    .exec()
    .then(() => {
      CommunityReple.deleteMany({ postNum: temp.postNum }).exec();
    })
    .then(() => {
      Community.deleteOne({ _id: temp.postInfoId }).exec();
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

router.post("/like", (req, res) => {
  let key = req.body.likeFlag;

  if (key) {
    // 좋아요를 이미 누른 상태
    Community.findOneAndUpdate(
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
    Community.findOneAndUpdate(
      { postNum: req.body.postNum },
      { $inc: { likeNum: 1 }, $push: { likeArray: req.body.userId } }
    )
      .exec()
      .then((response) => {
        if (response.uid != req.body.userId) {
          let alarmTemp = {
            uid: response.uid,
            url: req.body.postNum,
            type: "likeToPost",
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

/////////////////////////////
//          reple          //
/////////////////////////////

router.post("/repleSubmit", (req, res) => {
  let reple = {
    uid: req.body.uid,
    postNum: req.body.postNum,
    content: req.body.content,
  };

  User.findOne({ uid: req.body.uid })
    .exec()
    .then((userInfo) => {
      reple.auther = userInfo._id;
      reple.realTime = moment().format("YY-MM-DD[ ]HH:mm");
      const communityReple = new CommunityReple(reple);
      communityReple.save(() => {
        Community.findOneAndUpdate(
          { postNum: req.body.postNum },
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
  let temp = {};
  temp.content = req.body.content;
  temp.realTime = setRealTime();
  let key = req.body.id;
  CommunityReple.findByIdAndUpdate({ _id: key }, { $set: temp }).exec(
    (err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

router.post("/repleDelete", (req, res) => {
  Community.findOneAndUpdate(
    { postNum: req.body.postNum },
    { $inc: { repleNum: -1 } }
  )
    .exec()
    .then((result) => {
      if (req.body.rerepleNum) {
        CommunityReple.findOneAndUpdate(
          { _id: req.body.repleId },
          { $set: { isDeleted: true } }
        ).exec();
      } else {
        CommunityReple.findOneAndDelete({ _id: req.body.repleId }).exec();
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

  if (key) {
    // 좋아요를 이미 누른 상태
    CommunityReple.findOneAndUpdate(
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
    CommunityReple.findOneAndUpdate(
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
  CommunityRereple.findOne({ _id: req.body._id })
    .populate("auther")
    .exec((err, rerepleInfo) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, rerepleInfo });
    });
});

router.post("/rerepleSubmit", (req, res) => {
  let temp = req.body;
  let rereple = {};
  rereple.postNum = temp.postNum;
  User.findOne({ uid: temp.uid })
    .exec()
    .then((userInfo) => {
      rereple.auther = userInfo._id;
      rereple.content = temp.content;
      rereple.realTime = moment().format("YY-MM-DD[ ]HH:mm");
      const rerepleObj = new CommunityRereple(rereple);
      rerepleObj.save().then((doc) => {
        CommunityReple.findOneAndUpdate(
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
      Community.findOneAndUpdate(
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
  let temp = {};
  temp.content = req.body.content;
  temp.realTime = setRealTime();
  let rerepleId = req.body.rerepleId;

  CommunityRereple.findByIdAndUpdate({ _id: rerepleId }, { $set: temp }).exec(
    (err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

router.post("/rerepleDelete", (req, res) => {
  CommunityRereple.deleteOne({ _id: req.body.rerepleId })
    .exec()
    .then(() => {
      CommunityReple.findOneAndUpdate({
        $inc: { rerepleNum: -1 },
        $pull: { rerepleArray: req.body.rerepleId },
      })
        .exec()
        .then(() => {
          return CommunityReple.findOne({ _id: req.body.repleId }).exec();
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
  let rerepleId = req.body.rerepleId;
  let key = req.body.likeFlag;
  let user = req.body.userId;
  if (key) {
    //likeArray에서 userId 삭제
    CommunityRereple.findOneAndUpdate(
      { _id: rerepleId },
      { $inc: { likeNum: -1 }, $pull: { likeArray: user } }
    ).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  } else {
    //userId 삽입
    CommunityRereple.findOneAndUpdate(
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
