const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function realTime() {
  return moment().format("YY-MM-DD[ ]HH:mm");
}

const logSchema = mongoose.Schema({
  type: {
    type: String,
  },
  url: {
    type: String,
  },
  realTime: {
    type: String,
    default: realTime(),
  },
});
const Log = mongoose.model("Log", logSchema);

const userSchema = mongoose.Schema(
  {
    uid: {
      type: String,
      unique: 1,
    },
    displayName: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      unique: 1,
    },
    photoURL: {
      type: String,
    },
    userNum: {
      type: Number,
    },
    logs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Log",
      },
    ],
  },
  { collection: "userInfo" }
);
const User = mongoose.model("User", userSchema);

module.exports = { User, Log };
