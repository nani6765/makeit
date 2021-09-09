const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function realTime() {
  return moment().format("YY-MM-DD[ ]HH:mm");
}

const ProPostSchema = mongoose.Schema(
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

const TempProPostSchema = mongoose.Schema(
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


//아직 다 안함
const ProReviewSchema = mongoose.Schema(
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
  },
  {
    //timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
    //timestamps: true,
    collection: "proReview",
  }
);

const ProPost = mongoose.model("ProPostSchema", ProPostSchema);
const TempProPost = mongoose.model("TempProPostSchema", TempProPostSchema);
const ProReview = mongoose.model("ProReviewSchema", ProReviewSchema);
module.exports = { ProPost, TempProPost, ProReview };
