var router = require("express").Router();

const { Counter } = require("../model/Counter.js");
const { User } = require("../model/User.js");
const { ProPost, TempProPost } = require("../model/Producer.js");

var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

router.post("/producer", (req, res) => {
  let category = {
    category: req.body.category,
    subCategory: req.body.subCategory,
  }
  if(category.subCategory === "전체") {
    delete category.subCategory;
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
    return res.json({ success: false, err });
  });
});

router.post("/producer/postLength", (req, res) => {
  let category = {
    category: req.body.category,
    subCategory: req.body.subCategory,
  }
  if(category.subCategory === "전체") {
    delete category.subCategory;
  }

    ProPost.find({category : category})
    .exec()
    .then((posts) => {
      return res.status(200).send({ success: true, len: posts.length });
    })
    .catch((err) => {
      return res.json({ success: false, err });
    });
})


router.post("/producer/youtube", (req, res) => {
  console.log(req.body);
  router.get("https://www.googleapis.com/youtube/v3/search");
});

router.post("/producer/loadTempPost", (req, res) => {
  TempProPost.findOne({uid: req.body.uid})
  .exec()
  .then((result) => {
    return res.status(200).send({ success: true, tempPost: result });
  })
  .catch((err) => {
    return res.json({ success: false, err });
  })
});

router.post("/producer/tempSaving", (req, res) => {
  let temp = req.body;
 

  TempProPost.findOne({uid: temp.uid}).
  exec()
  .then((result) => {
    if(!result) {
      User.findOne({uid: temp.uid})
      .exec()
      .then((userinfo)=> {
        temp.auther = userinfo._id;
        temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
        const tempPost = new TempProPost(temp);
        tempPost.save(() => {
          return res.status(200).send({ success: true });
        })
      })
    }
    else {
      TempProPost.findOneAndUpdate({uid: temp.uid}, {$set: temp})
      .exec()
      .then((result) => {
          return res.status(200).send({ success: true });
      })
    }
  })
  .catch((err) => {
    return res.json({ success: false, err });
  })
})


router.post("/producer/proPostSubmit", (req, res) => {
  let temp = req.body;
 
  User.findOne({uid: temp.uid})
  .exec()
  .then((userinfo)=> {
    temp.auther = userinfo._id;
    temp.realTime = moment().format("YY-MM-DD[ ]HH:mm");
    Counter.findOneAndUpdate({name: "counter"}, {$inc: {proPostNum: 1}})
    .exec()
    .then((cnt) => {
      temp.url=cnt.proPostNum;
      TempProPost.findOneAndDelete({uid: temp.uid})
      .exec()
      .then(() => {
        const post = new ProPost(temp);
        post.save(() => {
          return res.status(200).send({ success: true });
        })
      })
    })
  })
  .catch((err) => {
    return res.json({ success: false, err });
  })
})

module.exports = router;
