var router = require("express").Router();
const { Alarm } = require("../model/Alarm.js");

router.post("/getAlarm", (req, res) => {
  let sort = {};
  sort.createdAt = -1;
  Alarm.find({ uid: req.body.uid })
    .sort(sort)
    .skip(req.body.skip)
    .limit(req.body.limit)
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

router.post("/isChecked", (req, res) => {
  Alarm.find({uid: req.body.uid, isCheck: false})
  .exec()
  .then((response) => {
    console.log(response);
      return res.status(200).send({
        success: true,
        isCheck: response.length ? true : false,
      });
  }).catch((err) => {
    console.log(err);
    return res.status(400).json({ success: false, err });
  })
})

module.exports = router;
