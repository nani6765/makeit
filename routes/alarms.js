var router = require("express").Router();
const { Alarm } = require("../model/Alarm.js");

router.post("/getAlarm", (req, res) => {
  let sort = {};
  sort.createdAt = -1;
  Alarm.find({ uid: req.body.uid })
    .sort(sort)
    .exec()
    .then((response) => {
      return res.status(200).send({
        success: true,
        alarms: response,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

router.post("/Check", (req, res) => {
  Alarm.findOneAndUpdate({ _id: req.body._id }, { $set: { isCheck: true } })
    .exec()
    .then((response) => {
      return res.status(200).send({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

router.post("/allCheck", (req, res) => {
  Alarm.updateMany({ uid: req.body.uid }, { $set: { isCheck: true } })
    .exec()
    .then((response) => {
      return res.status(200).send({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});

module.exports = router;
