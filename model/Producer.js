const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function realTime() {
  return moment().format("YY-MM-DD[ ]HH:mm");
}

const ProPost = mongoose.Schema(
  {
    //쓰니정보
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

    //상세 설명
    oneLineIntroduce: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    workTypeArr: {
      type: Array,
      default: [],
    },
    videoPurposeArr: {
      type: Array,
      default: [],
    },

    //포트폴리오
    thumbnailArr: {
      type: Array,
      default: [],
    },
    detailImgArr: {
      type: Array,
      default: [],
    },
    videoArr: {
      type: Array,
      default: [],
    },

    //가격 설정
    priceInfo: {
      type: String,
    },

    //수정환불안내
    editandReprogress: {
      type: String,
    },
    FAQList: {
      type: Array,
      default: [],
    },

    //post속성
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
    url: {
      type: Number,
      unique: true,
    },
    grade: {
      type: Number,
    },
    gradeArrayNum: {
      type: Number,
    },
    gradeArray: {
      type: Array,
    },
  },
  {
    timestamps: true,
    collection: "proPost",
  }
);

const TempProPost = mongoose.Schema(
  {
    //쓰니정보
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

    //상세 설명
    oneLineIntroduce: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    workTypeArr: {
      type: Array,
      default: [],
    },
    videoPurposeArr: {
      type: Array,
      default: [],
    },

    //포트폴리오
    thumbnailArr: {
      type: Array,
      default: [],
    },
    detailImgArr: {
      type: Array,
      default: [],
    },
    videoArr: {
      type: Array,
      default: [],
    },

    //가격 설정
    priceInfo: {
      type: String,
    },

    //수정환불안내
    editandReprogress: {
      type: String,
    },
    FAQList: {
      type: Array,
      default: [],
    },

    realTime: {
      type: String,
      default: realTime(),
    },
  },
  {
    timestamps: true,
    collection: "tempProPosts",
  }
);


const ProReview = mongoose.Schema(
  {
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    uid: {
      type: String,
    },
    url: {
      type: Number,
    },
    grade: {
      type: Number,
    },
    content: {
      type: String,
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
        ref: "coRerepleSchema",
      },
    ],
  },
  {
    //timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
    //timestamps: true,
    collection: "coReples",
  }
);

const ProPost = mongoose.model("ProPost", ProPost);
const TempProPost = mongoose.model("TempProPost", TempProPost);
module.exports = { ProPost, TempProPost };
