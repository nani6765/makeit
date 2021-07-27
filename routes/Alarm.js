var router = require("express").Router();
const { Alarm } = require("../model/Alarm.js");

router.post("/getAlarm", (req, res) => {
    Alarm.find({uid: req.body.uid}).exec()
    .then((response) => {
        console.log(req.body.uid);
      return res.status(200).send({
        success: true,
        alarms: response,
      });
    }).catch((err) => {
      console.log(err);
      return res.status(400).json({ success: false, err });
    });
});


module.exports = router;