const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function realTime() {
  return moment().format("YY-MM-DD[ ]HH:mm");
}

const RepleSchema = mongoose.Schema(
  {
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    uid: {
      type: String,
    },
    postId: {
      type: Schema.Types.ObjectId,
    },
    url: {
      type: Number,
    },
    content: {
      type: String,
    },
    likeNum: {
      type: Number,
      default: 0,
    },
    realTime: {
      type: String,
      default: realTime(),
    },
    edit: {
      type: Boolean,
      default: false,
    },
    rerepleNum: {
      type: Number,
      default: 0,
    },
    likeArray: {
      type: Array,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    rerepleArray: [
      {
        type: Schema.Types.ObjectId,
        ref: "RerepleSchema",
      },
    ],
  },
  {
    //timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
    timestamps: true,
    collection: "reple",
  }
);

const RerepleSchema = mongoose.Schema(
  {
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    uid: {
      type: String,
    },
    postId: {
      type: Schema.Types.ObjectId,
    },
    postNum: {
      type: Number,
    },
    content: {
      type: String,
    },
    likeNum: {
      type: Number,
      default: 0,
    },
    realTime: {
      type: String,
      default: realTime(),
    },
    edit: {
      type: Boolean,
      default: false,
    },
    likeArray: {
      type: Array,
    },
  },
  {
    timestamps: true,
    collection: "reReple",
  }
);

const Reple = mongoose.model("RepleSchema", RepleSchema);
const Rereple = mongoose.model("RerepleSchema", RerepleSchema);
module.exports = { Reple, Rereple };
