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
    postNum: {
      type: Number,
      //unique: true,
    },
    //filter
  },
  {
    timestamps: true,
    collection: "participate",
  }
);

const partFPSchema = mongoose.Schema(
  {
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
    postNum: {
      type: Number,
      //unique: true,
    },
    //filter
  },
  {
    timestamps: true,
    collection: "participate",
  }
);

const partIPSchema = mongoose.Schema(
  {
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
    postNum: {
      type: Number,
      //unique: true,
    },
    //filter
  },
  {
    timestamps: true,
    collection: "participate",
  }
);

const partLoSchema = mongoose.Schema(
  {
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
    postNum: {
      type: Number,
      //unique: true,
    },
    //filter
  },
  {
    timestamps: true,
    collection: "participate",
  }
);

const PartFA = mongoose.model("PartFA", partFASchema);
const PartFP = mongoose.model("PartFA", partFPSchema);
const PartIP = mongoose.model("PartFA", partIPSchema);
const PartLo = mongoose.model("PartFA", partLoSchema);

module.exports = { PartFA, PartFP, PartIP, PartLo };
