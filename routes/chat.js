var router = require("express").Router();
const { User } = require("../model/User");
const { Chat } = require("../model/Chat.js");
const { Counter } = require("../model/Counter.js");


router.post("/chatdetail/checkuser", (req, res) => {
    let user = [];
    user.push(req.body.user);
    let chatNum = req.body.chatNum;
    Chat.findOne({chatNum: chatNum, users: {$in : user}}, (err, result) => {
        if (err) return res.status(400).json({ success: false, err });
        console.log("checkuser result", result);
        if(result === null) {
            return res.status(200).send({
               success: true,
               checkResult: false,
            });
        } else {
            return res.status(200).send({
               success: true,
               checkResult: true,
            });
        }
    });
})

router.post("/create", (req, res) => {
  let me = req.body.me;
  let you = req.body.you;
  let temp = {};
  let tempUsers = [];

  tempUsers.push(me);
  tempUsers.push(you);
  Chat.findOne({users: {$all : tempUsers.sort((a, b) => (a > b) ? 1 : -1)}})
  .exec((err, result) => {
    if (err) return res.status(400).json({ success: false, err });
    if(result === null) {   
        User.find({_id: { $in : [ me, you ]}}, (err, users) => {
           if (err) return res.status(400).json({ success: false, err });
           temp.users = users.sort((a, b) => (a._id > b._id) ? 1 : -1);
           Counter.findOne({ name: "counter" }, (err, counter) => {
               if (err) return res.status(400).json({ success: false, err });
               temp.chatNum = counter.chatNum;
               console.log("counter.chatNum", counter.chatNum);
               const chatObj = new Chat(temp);
               chatObj.save((err, doc) => {
                   if (err) return res.status(400).json({ success: false, err });
                   counter.updateOne({ $inc: { chatNum: 1 } }, (err) => {
                       if (err) return res.json({ success: false, err });
                       return res.status(200).send({
                           success: true,
                           chatNum: temp.chatNum,
                        });
                    });
                });
            });
        })
    } else return res.status(200).send({
        success: true,
        chatNum: result.chatNum,
    });
  });

  /*
  //save
  */


});

module.exports = router;
