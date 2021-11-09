const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function realTime() {
  return moment().format("YY-MM-DD[ ]HH:mm");
}

const partFASchema = mongoose.Schema(
  {
    type: {
      type: String,
      default: "FA",
    },
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    uid: {
      type: String,
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
    url: {
      type: Number,
      //unique: true,
    },
    //filter
    gender: {
      type: Array,
    },
    filmType: {
      type: Array,
    },
    classification: {
      type: Array,
    },
  },
  {
    timestamps: true,
    collection: "participate",
  }
);

const partFPSchema = mongoose.Schema(
  {
    type: {
      type: String,
      default: "FP",
    },
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    uid: {
      type: String,
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
    url: {
      type: Number,
      //unique: true,
    },
    //filter
    filmType: {
      type: Array,
    },
    classification: {
      type: Array,
    },
  },
  {
    timestamps: true,
    collection: "participate",
  }
);

const partIPSchema = mongoose.Schema(
  {
    type: {
      type: String,
      default: "IP",
    },
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    uid: {
      type: String,
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
    thumbnail: {
      type: Array,
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
    url: {
      type: Number,
      //unique: true,
    },
    //filter
    subCategory: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "participate",
  }
);

const partLoSchema = mongoose.Schema(
  {
    type: {
      type: String,
      default: "Lo",
    },
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    uid: {
      type: String,
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
    thumbnail: {
      type: Array,
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
    url: {
      type: Number,
      //unique: true,
    },
    //filter
    subCategory: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "participate",
  }
);

const PartFA = mongoose.model("PartFA", partFASchema);
const PartFP = mongoose.model("PartFP", partFPSchema);
const PartIP = mongoose.model("PartIP", partIPSchema);
const PartLo = mongoose.model("PartLo", partLoSchema);

module.exports = { PartFA, PartFP, PartIP, PartLo };
