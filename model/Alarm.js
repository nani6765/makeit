const mongoose = require("mongoose");

var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function realTime() {
  console.log("???", moment().format("YY-MM-DD[ ]HH:mm"));
  return moment().format("YY-MM-DD[ ]HH:mm");
}

const alarmSchema = mongoose.Schema(
  {
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    uid: {
        type: String,
    },
    url: {
      type: String,
    },
    realTime: {
      type: String,
      default: realTime(),
    },
    /*
    isCheck: {
      type: Boolean,
      default: false,
    },
    */
  },
  { collection: "alarmInfo" }
);

const Alarm = mongoose.model("Alarm", alarmSchema);
module.exports = { Alarm };
