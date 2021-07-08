const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function getTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return new Date(Date.UTC(year, month, day, hours, minutes));
}

function realTime() {
  return moment().format("YY-MM-DD[ ]HH:mm");
}

const coPostSchema = mongoose.Schema(
  {
    //쓰니정보
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
    },
    //글정보
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
    realTime: {
      type: String,
      default: realTime(),
    },
    edit: {
      type: Boolean,
      default: false,
    },
    //post속성
    views: {
      type: Number,
      default: 0,
    },
    repleNum: {
      type: Number,
      default: 0,
    },
    likeNum: {
      type: Number,
      default: 0,
    },
    likeArray: {
      type: Array,
    },
    postNum: {
      type: Number,
      //unique: true,
    },
    //필터
    category: {
      type: String,
      default: 0,
    },
    subCategory: {
      type: String,
    },
    filters: {
      type: Array,
    },
  },
  {
    timestamps: true,
    collection: "coPosts",
  }
);

const coRepleSchema = mongoose.Schema(
  {
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      maxlength: 50,
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
    rerepleNum: {
      //현재 대댓글 개수
      type: Number,
      default: 0,
    },
    rerepleIdx: {
      //만들어진 대댓글 개수(아이디)
      type: Number,
      default: 0,
    },
    rerepleArray: {
      type: Array,
    },
  },
  {
    //timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
    timestamps: true,
    collection: "coReples",
  }
);

const Community = mongoose.model("coPostSchema", coPostSchema);
const CommunityReple = mongoose.model("coRepleSchema", coRepleSchema);
module.exports = { Community, CommunityReple };
