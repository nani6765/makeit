var router = require("express").Router();
const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");
const { Alarm } = require("../model/Alarm.js");
const { Chat } = require("../model/Chat.js");
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
} = require("../model/Making.js");

const SelectModel = (types) => {
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

router.post("/like", (req, res) => {
  let Model = SelectModel(req.body.type);

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

module.exports = router;
