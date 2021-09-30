var router = require("express").Router();

const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");
const { ProPost, TempProPost, ProReview, RequestPost } = require("../model/Making.js");

var moment = require("moment");
const { response } = require("express");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

router.post("/producer", (req, res) => {
  let category = {
    category: req.body.category,
  };
  if (category.category === "전체") {
    delete category.category;
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
  console.log(req.body);
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
              post.save(() => {
                return res.status(200).send({ success: true });
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
  ProPost.findOneAndUpdate({uid: temp.uid}, temp)
  .exec()
  .then((response) => {
    return res.status(200).send({ success: true });
  })
  .catch((err) => {
    return res.json({ success: false, err });
  })
})

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
    console.log("push?");
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
router.post("/producer/review/upload", (req, res) => {
  let temp = req.body;
  ProReview.findOne({ uid: temp.uid })
    .exec()
    .then((doc) => {
      if (doc === null) {
        ProPost.findOneAndUpdate(
          { url: temp.url },
          { $inc: { gradeArrayNum: 1, grade: temp.grade } }
        )
          .exec()
          .then((doc) => {
            const proReview = new ProReview(temp);
            proReview.save().then((doc) => {
              console.log(doc);
              return res.status(200).send({ success: true });
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




// RequestVideo

router.post("/requestVideo/reqPostSubmit", (req, res) => {
  let temp = req.body;

  User.findOne({uid: temp.uid})
  .exec()
  .then((user) => {
    temp.auther = user._id;
    temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
    Counter.findOneAndUpdate({name: "counter"}, {$inc : {reqPostNum: 1}})
    .exec()
    .then((cnt) => {
      temp.url = cnt.reqPostNum;
      const post = new RequestPost(temp);
      post.save(() => {
        return res.status(200).send({ success: true });
      });
    })
  })
  .catch((err) => {
    console.log("reqPostSubmit Error: ", err);
  });
});

module.exports = router;
