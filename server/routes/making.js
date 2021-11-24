var router = require("express").Router();

const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");
const {
  ProPost,
  TempProPost,
  ProReview,
  RequestPost,
  Quotation,
  ShareVideo,
} = require("../model/Making.js");

const { Reple, Rereple } = require("../model/Reple.js");

const setDelete = require("../module/multer/delete.js");
const setLog = require("../module/setLog.js");

var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

const SelectSearchModel = (category) => {
  switch (category) {
    case "proPost":
      return ProPost;
    case "reqVideo":
      return RequestPost;
    case "shareVideo":
      return ShareVideo;
    default:
      break;
  }
};

router.post("/search", (req, res) => {
  let sort = {};
  sort.createdAt = -1;

  if (req.body.category !== "all") {
    let Model = SelectSearchModel(req.body.category);
    User.find({ displayName: { $regex: req.body.term } })
      .exec()
      .then((userInfo) => {
        let uidArr = [];
        if (userInfo != []) {
          for (let i = 0; i < userInfo.length; i++) {
            uidArr.push(userInfo[i].uid);
          }
        }
        Model.find({
          $or: [
            { title: { $regex: req.body.term } },
            { content: { $regex: req.body.term } },
            { uid: { $in: uidArr } },
          ],
        })
          .populate("auther")
          .sort(sort)
          .exec()
          .then((post) => {
            return res
              .status(200)
              .send({
                success: true,
                postLength: post.length,
                post: post.splice(req.body.skip, req.body.limit),
              });
          });
      });
  } else {
    User.find({ displayName: { $regex: req.body.term } })
      .exec()
      .then((userInfo) => {
        let uidArr = [];
        if (userInfo != []) {
          for (let i = 0; i < userInfo.length; i++) {
            uidArr.push(userInfo[i].uid);
          }
        }
        ProPost.find({
          $or: [
            { oneLineIntroduce: { $regex: req.body.term } },
            { content: { $regex: req.body.term } },
            { uid: { $in: uidArr } },
          ],
        })
          .populate("auther")
          .sort(sort)
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
              .sort(sort)
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
                  .sort(sort)
                  .exec()
                  .then((sharePost) => {
                    let MakingPost = [...proPost, ...reqPost, ...sharePost];
                    if (MakingPost.length > 2) {
                      MakingPost.sort((a, b) => {
                        let Day1 = new Date(a.createdAt);
                        let Day2 = new Date(b.createdAt);
                        return Day2 - Day1;
                      });
                    }
                    return res
                      .status(200)
                      .send({
                        success: true,
                        postLength: MakingPost.length,
                        post: MakingPost.splice(req.body.skip, req.body.limit),
                      });
                  });
              });
          });
      });
  }
});

router.post("/producer", (req, res) => {
  let category = {
    category: req.body.category,
  };
  if (category.category === "전체") {
    delete category.category;
  }

  if (req.body.searchTerm) {
    category.$or = [
      { oneLineIntroduce: { $regex: req.body.searchTerm } },
      { content: { $regex: req.body.searchTerm } },
      { editandReprogress: { $regex: req.body.searchTerm } },
    ];
  }

  //최신순&&인기순 정렬
  let sort = {};
  if (req.body.sort === "최신순") {
    sort.createdAt = -1;
  } else {
    sort.likeNum = -1;
  }

  ProPost.find(category)
    .populate("auther")
    .sort(sort)
    .skip(req.body.skip)
    .limit(12)
    .exec()
    .then((posts) => {
      return res.status(200).send({ success: true, posts: posts });
    })
    .catch((err) => {
      console.log("error", err);
      return res.json({ success: false, err });
    });
});

router.post("/producer/postLength", (req, res) => {
  let category = {
    category: req.body.category,
  };
  if (category.category === "전체") {
    delete category.category;
  }

  if (req.body.searchTerm) {
    category.$or = [
      { oneLineIntroduce: { $regex: req.body.searchTerm } },
      { content: { $regex: req.body.searchTerm } },
      { editandReprogress: { $regex: req.body.searchTerm } },
    ];
  }

  ProPost.find(category)
    .exec()
    .then((posts) => {
      return res.status(200).send({ success: true, len: posts.length });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/producer/youtube", (req, res) => {
  router.get("https://www.googleapis.com/youtube/v3/search");
});

router.post("/producer/loadTempPost", (req, res) => {
  TempProPost.findOne({ uid: req.body.uid })
    .exec()
    .then((result) => {
      return res.status(200).send({ success: true, tempPost: result });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/producer/tempSaving", (req, res) => {
  let temp = req.body;

  TempProPost.findOne({ uid: temp.uid })
    .exec()
    .then((result) => {
      if (!result) {
        User.findOne({ uid: temp.uid })
          .exec()
          .then((userinfo) => {
            temp.auther = userinfo._id;
            temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
            const tempPost = new TempProPost(temp);
            tempPost.save(() => {
              return res.status(200).send({ success: true });
            });
          });
      } else {
        TempProPost.findOneAndUpdate({ uid: temp.uid }, { $set: temp })
          .exec()
          .then((result) => {
            return res.status(200).send({ success: true });
          });
      }
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/producer/proPostSubmit", (req, res) => {
  let temp = req.body;

  User.findOne({ uid: temp.uid })
    .exec()
    .then((userinfo) => {
      temp.auther = userinfo._id;
      temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
      Counter.findOneAndUpdate({ name: "counter" }, { $inc: { proPostNum: 1 } })
        .exec()
        .then((cnt) => {
          temp.url = cnt.proPostNum;
          TempProPost.findOneAndDelete({ uid: temp.uid })
            .exec()
            .then(() => {
              const post = new ProPost(temp);
              post.save().then((doc) => {
                let flag = setLog(
                  temp.uid,
                  "post",
                  `/making/producerPost/${temp.url}`
                );
                if (flag) {
                  return res.status(200).send({ success: true });
                }
              });
            });
        });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/producer/proPostEdit", (req, res) => {
  let temp = req.body;

  temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
  ProPost.findOneAndUpdate({ url: temp.url }, temp)
    .exec()
    .then((response) => {
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false, err });
    });
});

router.post("/producer/delete", (req, res) => {
  let temp = req.body.postInfo;

  setDelete("makeit/making", temp.thumbnailArr[0].key);
  for (let i = 0; i < temp.detailImgArr.length; i++) {
    setDelete("makeit/making", temp.detailImgArr[i].key);
  }

  ProReview.deleteMany({ url: temp.url })
    .exec()
    .then(() => {
      ProPost.findOneAndDelete({ url: temp.url })
        .exec()
        .then(() => {
          return res.status(200).send({ success: true });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false, err });
    });
});

router.post("/producer/getPostDetail", (req, res) => {
  ProPost.findOne({ url: req.body.url })
    .populate("auther")
    .exec()
    .then((post) => {
      return res.status(200).send({ success: true, post: post });
    })
    .catch((err) => {
      console.log("producer getPostDetail Error", err);
      return res.json({ success: false, err });
    });
});

router.post("/producer/producerLike", (req, res) => {
  if (req.body.key) {
    ProPost.findOneAndUpdate(
      { url: req.body.url },
      { $pull: { likeArray: req.body.uid } }
    )
      .exec()
      .then((post) => {
        return res.status(200).send({ success: true, post: post });
      })
      .catch((err) => {
        console.log("producer Like Error", err);
        return res.json({ success: false, err });
      });
  } else {
    ProPost.findOneAndUpdate(
      { url: req.body.url },
      { $push: { likeArray: req.body.uid } }
    )
      .exec()
      .then((post) => {
        return res.status(200).send({ success: true, post: post });
      })
      .catch((err) => {
        console.log("producer Like Error", err);
        return res.json({ success: false, err });
      });
  }
});

/////////////////////////////
//         review          //
/////////////////////////////
router.post("/producer/review", (req, res) => {
  let url = parseInt(req.body.url);
  ProReview.find({ url: url })
    .exec()
    .then((doc) => {
      if (doc === null) {
        return res.status(200).send({ review: [] });
      } else {
        return res.status(200).send({ review: doc });
      }
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/producer/getUser", (req, res) => {
  let uid = req.body.uid;
  User.find({ uid: uid })
    .exec()
    .then((doc) => {
      return res.status(200).send({ user: doc });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/producer/review/upload", (req, res) => {
  let temp = req.body;
  ProReview.findOne({ url: temp.url, uid: temp.uid })
    .exec()
    .then((doc) => {
      if (doc === null) {
        ProPost.findOneAndUpdate(
          { url: temp.url },
          { $inc: { gradeArrayNum: 1, grade: temp.grade + 1 } }
        )
          .exec()
          .then((doc) => {
            const proReview = new ProReview(temp);
            proReview.save().then((doc) => {
              let flag = setLog(
                temp.uid,
                "review",
                `/making/producerPost/${temp.url}`
              );
              if (flag) {
                return res.status(200).send({ success: true });
              }
            });
          });
      } else {
        let message = "리뷰 등록은 한 번만 할 수 있습니다.";
        return res.status(200).send({ success: false, message });
      }
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/producer/review/update", (req, res) => {
  let temp = req.body;
  ProPost.findOneAndUpdate(
    { url: temp.url },
    { $inc: { grade: temp.grade - temp.originGrade } }
  )
    .exec()
    .then((doc) => {
      ProReview.findOneAndUpdate(
        { url: temp.url, uid: temp.uid },
        { $set: { grade: temp.grade, content: temp.content } }
      )
        .exec()
        .then((doc) => {
          return res.status(200).send({ success: true });
        });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/producer/review/delete", (req, res) => {
  let temp = req.body;
  ProPost.findOneAndUpdate(
    { url: temp.url },
    { $inc: { gradeArrayNum: -1, grade: -temp.grade - 1 } }
  )
    .exec()
    .then((doc) => {
      ProReview.findOneAndDelete({ url: temp.url, uid: temp.uid })
        .exec()
        .then((doc) => {
          return res.status(200).send({ success: true });
        });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

/////////////////////////////////////////
///////////// RequestVideo //////////////
/////////////////////////////////////////

router.post("/requestVideo", (req, res) => {
  let category = {
    category: req.body.category,
  };
  if (category.category === "전체") {
    delete category.category;
  }

  if (req.body.searchTerm) {
    category.$or = [
      { oneLineIntroduce: { $regex: req.body.searchTerm } },
      { content: { $regex: req.body.searchTerm } },
    ];
  }

  //최신순&&인기순 정렬
  let sort = {};
  if (req.body.sort === "최신순") {
    sort.createdAt = -1;
  } else {
    sort.view = -1;
  }

  RequestPost.find(category)
    .populate("auther")
    .sort(sort)
    .skip(req.body.skip)
    .limit(5)
    .exec()
    .then((post) => {
      return res.status(200).send({ success: true, post: post });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/requestVideo/postLength", (req, res) => {
  let category = {
    category: req.body.category,
  };
  if (category.category === "전체") {
    delete category.category;
  }

  if (req.body.searchTerm) {
    category.$or = [
      { oneLineIntroduce: { $regex: req.body.searchTerm } },
      { content: { $regex: req.body.searchTerm } },
    ];
  }

  RequestPost.find(category)
    .exec()
    .then((posts) => {
      return res.status(200).send({ success: true, len: posts.length });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/requestVideo/reqPostSubmit", (req, res) => {
  let temp = req.body;

  User.findOne({ uid: temp.uid })
    .exec()
    .then((user) => {
      temp.auther = user._id;
      temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
      Counter.findOneAndUpdate({ name: "counter" }, { $inc: { reqPostNum: 1 } })
        .exec()
        .then((cnt) => {
          temp.url = cnt.reqPostNum;
          const post = new RequestPost(temp);
          post.save(() => {
            let flag = setLog(
              temp.uid,
              "post",
              `/making/requestPost/${temp.url}`
            );
            if (flag) {
              return res.status(200).send({ success: true });
            }
          });
        });
    })
    .catch((err) => {
      console.log("reqPostSubmit Error: ", err);
      return res.json({ success: false, err });
    });
});

router.post("/requestVideo/reqPostEdit", (req, res) => {
  let temp = req.body;

  temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
  RequestPost.findOneAndUpdate({ url: temp.url }, temp)
    .exec()
    .then((response) => {
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      console.log("reqPostEdit Error: ", err);
      return res.json({ success: false, err });
    });
});

router.post("/requestVideo/getPostDetail", (req, res) => {
  RequestPost.findOneAndUpdate({ url: req.body.url }, { $inc: { view: 1 } })
    .populate("auther")
    .exec()
    .then((post) => {
      return res.status(200).send({ success: true, post: post });
    })
    .catch((err) => {
      console.log("requestVideo getPostDetail Error", err);
      return res.json({ success: false, err });
    });
});

router.post("/requestVideo/delete", (req, res) => {
  let temp = req.body.postInfo;
  Quotation.deleteMany({ url: temp.url })
    .exec()
    .then(() => {
      RequestPost.findByIdAndDelete({ _id: temp._id })
        .exec()
        .then((doc) => {
          return res.status(200).send({ success: true });
        });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/requestVideo/quotationSubmit", (req, res) => {
  let temp = req.body;

  User.findOne({ uid: temp.uid })
    .exec()
    .then((user) => {
      temp.auther = user._id;
      temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
      const newQuotation = new Quotation(temp);
      newQuotation.save((result) => {
        let flag = setLog(temp.uid, "post", `/making/requestPost/${temp.url}`);
        if (flag) {
          return res.status(200).send({ success: true });
        }
        return res.status(200).send({ success: true });
      });
    })
    .catch((err) => {
      console.log("quotationUpload Error: ", err);
      return res.json({ success: false, err });
    });
});

router.post("/quotationEdit", (req, res) => {
  let temp = req.body;

  Quotation.findOneAndUpdate({ _id: temp._id }, temp)
    .exec()
    .then(() => {
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      console.log("quotationUpload Error: ", err);
      return res.json({ success: false, err });
    });
});

router.post("/quotation/delete", (req, res) => {
  let temp = req.body;

  Quotation.findOneAndDelete({ _id: temp._id })
    .exec()
    .then(() => {
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      console.log("quotationUpload Error: ", err);
      return res.json({ success: false, err });
    });
});

router.post("/requestVideo/getQuotation", (req, res) => {
  let temp = req.body;

  Quotation.find({ url: temp.url })
    .populate("auther")
    .exec()
    .then((result) => {
      return res.status(200).send({ success: true, quotation: result });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

///////////////////////////////////////
///////////// ShareVideo //////////////
///////////////////////////////////////

router.post("/shareVideo", (req, res) => {
  //최신순&&인기순 정렬
  let sort = {};
  if (req.body.sort === "최신순") {
    sort.createdAt = -1;
  } else {
    sort.view = -1;
  }

  let search = {};
  if (req.body.searchTerm) {
    search.$or = [
      { oneLineIntroduce: { $regex: req.body.searchTerm } },
      { content: { $regex: req.body.searchTerm } },
    ];
  }

  ShareVideo.find(search)
    .populate("auther")
    .sort(sort)
    .skip(req.body.skip)
    .limit(10)
    .exec()
    .then((post) => {
      return res.status(200).send({ success: true, post: post });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/shareVideo/getPageLen", (req, res) => {
  ShareVideo.countDocuments(req.body)
    .exec()
    .then((len) => {
      return res.status(200).send({ success: true, len: len });
    })
    .catch((err) => {
      return res.status(400).json({ success: false, err });
    });
});

router.post("/shareVideo/submit", (req, res) => {
  let temp = req.body;
  temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
  User.findOne({ uid: temp.uid })
    .exec()
    .then((userinfo) => {
      temp.auther = userinfo._id;
      temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
      Counter.findOneAndUpdate(
        { name: "counter" },
        { $inc: { shareVideoNum: 1 } }
      )
        .exec()
        .then((cnt) => {
          temp.url = cnt.shareVideoNum;
          const post = new ShareVideo(temp);
          post.save(() => {
            let flag = setLog(
              temp.uid,
              "post",
              `/making/shareVideo/${temp.url}`
            );
            if (flag) {
              return res.status(200).send({ success: true });
            }
          });
        });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
});

router.post("/shareVideo/Edit", (req, res) => {
  let temp = req.body;

  ShareVideo.findOneAndUpdate({ _id: temp._id }, temp)
    .exec()
    .then(() => {
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ success: false, err });
    });
});

router.post("/shareVideo/delete", (req, res) => {
  let temp = req.body.postInfo;

  Rereple.deleteMany({ postId: temp._id })
    .exec()
    .then(() => {
      ShareVideo.findByIdAndDelete({ _id: temp._id })
        .exec()
        .then(() => {
          return res.status(200).send({ success: true });
        });
    })
    .catch((err) => {
      console.log("requestVideo delete Error", err);
      return res.json({ success: false, err });
    });
});

router.post("/shareVideo/getPostDetail", (req, res) => {
  ShareVideo.findOneAndUpdate({ url: req.body.url }, { $inc: { view: 1 } })
    .populate("auther")
    .exec()
    .then((post) => {
      return res.status(200).send({ success: true, post: post });
    })
    .catch((err) => {
      console.log("requestVideo getPostDetail Error", err);
      return res.json({ success: false, err });
    });
});

module.exports = router;
