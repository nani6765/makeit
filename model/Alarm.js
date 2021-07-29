const mongoose = require("mongoose");

var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function realTime() {
  return moment().format("YY-MM-DD[ ]HH:mm");
}

const alarmSchema = mongoose.Schema(
  {
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
    type: {
      type: String,
    },
    category: {
      type:String,
    },
    isCheck: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, collection: "alarmInfo" }
);

const Alarm = mongoose.model("Alarm", alarmSchema);
module.exports = { Alarm };
