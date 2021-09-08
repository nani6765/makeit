var router = require("express").Router();

const { User } = require("../model/User.js");
const { ProPost, TempProPost } = require("../model/Producer.js");

var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

router.post("/producer/youtube", (req, res) => {
  console.log(req.body);
  router.get("https://www.googleapis.com/youtube/v3/search");
});

router.post("/producer/tempSaving", (req, res) => {
  let temp = req.body;
 
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
  .catch((err) => {
    return res.json({ success: false, err });
  })
})

module.exports = router;
