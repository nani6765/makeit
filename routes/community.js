var router = require("express").Router();
const { Community, CommunityReple } = require("../model/CoPost.js");
const { Counter } = require("../model/Counter.js");
const setUpload = require("../model/multer/upload.js");
const setDelete = require("../model/multer/delete.js");
const setRealTime = require("../model/multer/realTime.js");

////////////////////////////
//          POST          //
////////////////////////////

router.post("/", (req, res) => {
  let filter = req.body.filter;
  if (filter.subCategory === "전체") {
    delete filter.subCategory;
  }

  let sort = {};
  if (req.body.sortPost === "최신순") {
    sort.createdAt = -1;
  } else {
    sort.likeNum = -1;
  }

  let limit = 10;
  let skipTemp = parseInt(req.body.PageIdx);
  let skip = (skipTemp - 1) * 10;

  console.log("skip", skip);
  Community.find(filter).exec((err, postList) => {
    let totalIdx = postList.length;
    if (err) return res.status(400).json({ success: false, err });
    Community.find(filter)
      .populate("auther") //조인이랑 비슷함 (다른 테이블의 아이디가 같은 객체를 불러옴) 근데 조인처럼 db에서 합치는게 아니라 자바스크립트 단에서 합쳐줌
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .exec((err, postInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, postInfo, totalIdx });
      });
  });
});

router.post("/length", (req, res) => {
  let filter = {};
  filter.category = req.body.category;
  Community.find(filter).exec((err, postInfo) => {
    let idx = postInfo.length;
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, idx });
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
  CommunityReple.find(filter).exec((err, totalReple) => {
    if (err) return res.status(400).json({ success: false, err });
    CommunityReple.find(filter)
      .populate("auther")
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .exec((err, repleInfo) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({
          success: true,
          repleInfo,
          repleSize: repleInfo.length,
          totalSize: totalReple.length,
        });
      });
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

router.post("/image/delete", (req, res) => {
  setDelete("makeit/community", req.body.key);
  return res.json({
    success: true,
  });
});

router.post("/postSubmit", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" }, (err, counter) => {
    if (err) return res.status(400).json({ success: false, err });
    temp.postNum = counter.coPosts;
    const communityPost = new Community(temp);

    communityPost.save((err, doc) => {
      if (err) return res.status(400).json({ success: false, err });
      counter.updateOne({ $inc: { coPosts: 1 } }, (err) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
          success: true,
        });
      });
    });
  });
});

router.post("/postDelete", (req, res) => {
  let temp = req.body;

  CommunityReple.deleteMany({ postNum: temp.postNum }, (err, result) => {
    if (err) return res.status(400).json({ success: false, err });
    for (let i = 0; i < temp.imageLength; i++) {
      setDelete("makeit/community", temp.images[i].key);
    }
    Community.deleteOne({ _id: temp.postInfoId }, (err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  });
});

router.post("/postUpdate", (req, res) => {
  let temp = {};
  temp.title = req.body.title;
  temp.content = req.body.content;
  temp.images = req.body.images;
  let key = req.body.id;
  Community.findByIdAndUpdate({ _id: key }, { $set: temp }).exec(
    (err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

router.post("/like", (req, res) => {
  let postNum = req.body.postNum;
  let key = req.body.likeFlag;
  let user = req.body.userId;
  let temp = {};
  //  temp.$inc = {likeNum: 1};
  temp.$push = { likeArray: user };

  if (key) {
    //likeArray에서 userId 삭제
    Community.findOneAndUpdate(
      { postNum: postNum },
      { $inc: { likeNum: -1 }, $pull: { likeArray: user } }
    ).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  } else {
    //userId 삽입
    Community.findOneAndUpdate(
      { postNum: postNum },
      { $inc: { likeNum: 1 }, $push: { likeArray: user } }
    ).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  }
});

/////////////////////////////
//          reple          //
/////////////////////////////

router.post("/repleSubmit", (req, res) => {
  let temp = req.body;
  Community.findOneAndUpdate(
    { postNum: temp.postNum },
    { $inc: { repleNum: 1 } }
  ).exec((err, post) => {
    if (err) return res.status(400).json({ success: false, err });
    const communityReple = new CommunityReple(temp);
    communityReple.save((err, doc) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  });
});

router.post("/repleDelete", (req, res) => {
  let temp = req.body;
  let deleteRepleNum = req.body.rerepleNum + 1;
  CommunityReple.deleteOne({ _id: temp.repleId }, (err, result) => {
    if (err) return res.status(400).json({ success: false, err });
    Community.findOneAndUpdate(
      { postNum: temp.postNum },
      { $inc: { repleNum: -deleteRepleNum } }
    ).exec((err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  });
});

router.post("/repleUpdate", (req, res) => {
  let temp = {};
  temp.content = req.body.content;
  let key = req.body.id;
  CommunityReple.findByIdAndUpdate({ _id: key }, { $set: temp }).exec(
    (err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    }
  );
});

router.post("/repleLike", (req, res) => {
  let repleId = req.body.repleId;
  let key = req.body.likeFlag;
  let user = req.body.userId;
  if (key) {
    //likeArray에서 userId 삭제
    CommunityReple.findOneAndUpdate(
      { _id: repleId },
      { $inc: { likeNum: -1 }, $pull: { likeArray: user } }
    ).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  } else {
    //userId 삽입
    CommunityReple.findOneAndUpdate(
      { _id: repleId },
      { $inc: { likeNum: 1 }, $push: { likeArray: user } }
    ).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  }
});

///////////////////////////////
//          rereple          //
///////////////////////////////

router.post("/rerepleSubmit", (req, res) => {
  let temp = req.body;
  let newRereple = {
    _id: temp._id,
    auther: temp.auther,
    avatar: temp.avatar,
    email: temp.email,
    name: temp.name,
    content: temp.content,
    likeArray: [],
    realTime: setRealTime(),
  };
  Community.findOneAndUpdate(
    { postNum: temp.postNum },
    { $inc: { repleNum: 1 } }
  ).exec((err, post) => {
    if (err) return res.status(400).json({ success: false, err });
    CommunityReple.findOneAndUpdate(
      { _id: temp.replePid },
      {
        $inc: { rerepleNum: 1, rerepleIdx: 1 },
        $push: { rerepleArray: newRereple },
      }
    ).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  });
});

router.post("/rerepleUpdate", (req, res) => {
  let temp = {};
  temp.content = req.body.content;
  let key = req.body.replePid;
  let Idx = req.body.rerepleIdx;
  CommunityReple.findOne({ _id: key }).exec((err, reple) => {
    if (err) return res.status(400).json({ success: false, err });
    let repleTemp = {};
    repleTemp = reple;
    let targetIdx = repleTemp.rerepleArray.findIndex(
      (rereple) => rereple._id === Idx
    );
    repleTemp.rerepleArray[targetIdx].content = req.body.content;
    repleTemp.rerepleArray[targetIdx].realTime = setRealTime();
    console.log(repleTemp.rerepleArray[targetIdx]);
    CommunityReple.findByIdAndUpdate({ _id: key }, { $set: repleTemp }).exec(
      (err, post) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).send({ success: true });
      }
    );
  });
});

router.post("/rerepleDelete", (req, res) => {
  let temp = req.body;
  let idx = req.body.rereple._id;
  Community.findOneAndUpdate(
    { postNum: temp.reple.postNum },
    { $inc: { repleNum: -1 } }
  ).exec((err, post) => {
    if (err) return res.status(400).json({ success: false, err });

    CommunityReple.findOneAndUpdate(
      { _id: temp.reple._id },
      { $inc: { rerepleNum: -1 }, $pull: { rerepleArray: { _id: idx } } }
    ).exec((err, result) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  });
});

router.post("/rerepleLike", (req, res) => {
  let repleId = req.body.repleId;
  let key = req.body.likeFlag;
  let userId = req.body.userId;
  let rerepleId = req.body.rerepleId;
  CommunityReple.findOne({ _id: repleId }).exec((err, reple) => {
    if (err) return res.status(400).json({ success: false, err });
    let repleTemp = {};
    repleTemp = reple;
    let targetIdx = repleTemp.rerepleArray.findIndex(
      (rereple) => rereple._id === rerepleId
    );
    if (key) {
      let likeIdx = repleTemp.rerepleArray[targetIdx].likeArray.indexOf(userId);
      repleTemp.rerepleArray[targetIdx].likeArray.splice(likeIdx, 1);
    } else {
      repleTemp.rerepleArray[targetIdx].likeArray.push(userId);
    }
    CommunityReple.findByIdAndUpdate(
      { _id: repleId },
      { $set: repleTemp }
    ).exec((err, post) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).send({ success: true });
    });
  });
});

module.exports = router;
