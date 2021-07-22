var router = require("express").Router();
const { Counter } = require("../model/Counter.js");
const { Chat } = require("../model/Chat.js");

router.post("/create", (req, res) => {
  let temp = {};
  temp.users = [];
  temp.users.push(req.body.me);
  temp.users.push(req.body.you);
  let chatRoomId =
    req.body.me > req.body.you
      ? `${req.body.me}${req.body.you}`
      : `${req.body.you}${req.body.me}`;

  Chat.findOne({ chatRoomId: chatRoomId })
    .exec()
    .then((chatInfo) => {
      if (chatInfo === null) {
        temp.chatRoomId = chatRoomId;
        Counter.findOne({ name: "counter" })
          .exec()
          .then((counter) => {
            temp.url = counter.chatNum;
            const newChat = new Chat(temp);
            newChat.save().then(() => {
              Counter.findOneAndUpdate(
                { name: "counter" },
                { $inc: { chatNum: 1 } }
              )
                .exec()
                .then(() => {
                  Chat.findOne({ chatRoomId: chatRoomId })
                    .exec()
                    .then((chatInfo) => {
                      return res.status(200).send({
                        success: true,
                        resultUrl: chatInfo.url,
                      });
                    });
                });
            });
          });
      } else {
        return res.status(200).send({
          success: true,
          resultUrl: chatInfo.url,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

router.post("/userCheck", (req, res) => {
  let temp = req.body;
  Chat.findOne({ url: temp.url, users: temp.uid })
    .exec()
    .then((chatInfo) => {
      if (chatInfo === null) {
        console.log("check");
        return res.status(200).json({ success: false });
      }
      return res.status(200).send({
        success: true,
        chatInfo: chatInfo,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

module.exports = router;
