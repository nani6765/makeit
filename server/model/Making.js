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
    content: {
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
    thumbnailUrl: {
      type: String,
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
    priceDirectInput: {
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
    type: {
      type: String,
      default: "영상 제작자 탐색",
    },
    url: {
      type: Number,
      unique: true,
    },
    grade: {
      type: Number,
      default: 0,
    },
    gradeArrayNum: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: "findingProducer",
  }
);

//임시저장
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
    content: {
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
    priceDirectInput: {
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
    collection: "tempfindingProducer",
  }
);

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
  },
  {
    //timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
    //timestamps: true,
    collection: "proReview",
  }
);

const RequestPostSchema = mongoose.Schema(
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
    minPrice: {
      type: String,
    },
    maxPrice: {
      type: String,
    },
    deadline: {
      type: String,
    },
    filmType: {
      type: String,
    },
    uniqueness: {
      type: String,
    },
    content: {
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
    isPublic: {
      type: Boolean,
    },

    //post속성
    realTime: {
      type: String,
      default: realTime(),
    },
    type: {
      type: String,
      default: "영상 의뢰하기",
    },
    url: {
      type: Number,
      unique: true,
    },
    view: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: "reqPost",
  }
);

const QuotationSchema = mongoose.Schema(
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
    price: {
      type: String,
    },
    deadline: {
      type: String,
    },
    //포폴은 아직 구현 x 임시로 string 타입
    portpolio: {
      type: String,
    },
    content: {
      type: String,
    },
    videoArr: {
      type: Array,
      default: [],
    },
    isPublic: {
      type: Boolean,
    },

    //post속성
    realTime: {
      type: String,
      default: realTime(),
    },
    url: {
      //의뢰 url
      type: Number,
    },
    likeArray: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
    collection: "quotation",
  }
);

const ShareVideoSchema = mongoose.Schema(
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
    content: {
      type: String,
    },
    thumbnailUrl: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
    realTime: {
      type: String,
      default: realTime(),
    },
    //post속성
    type: {
      type: String,
      default: "제작 영상 알리기",
    },
    url: {
      type: Number,
      unique: true,
    },
    likeNum: {
      type: Number,
      default: 0,
    },
    likeArray: {
      type: Array,
    },
    repleNum: {
      type: Number,
      default: 0,
    },
    view: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    collection: "shareVideo",
  }
);
const ProPost = mongoose.model("ProPostSchema", ProPostSchema);
const TempProPost = mongoose.model("TempProPostSchema", TempProPostSchema);
const ProReview = mongoose.model("ProReviewSchema", ProReviewSchema);
const RequestPost = mongoose.model("RequestPostSchema", RequestPostSchema);
const Quotation = mongoose.model("QuotationSchema", QuotationSchema);
const ShareVideo = mongoose.model("ShareVideoSchema", ShareVideoSchema);

module.exports = {
  ProPost,
  TempProPost,
  ProReview,
  RequestPost,
  Quotation,
  ShareVideo,
};
