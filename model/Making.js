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
    collection: "proPost",
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
    collection: "tempProPosts",
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
      type: Number,
    },
    maxPrice: {
      type: Number,
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


    //post속성
    realTime: {
      type: String,
      default: realTime(),
    },
    url: {
      type: Number,
      unique: true,
    },
    view: {
      type: Number,
      default: 0,
    }
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
      type: Number,
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


    //post속성
    realTime: {
      type: String,
      default: realTime(),
    },
    url: { //의뢰 url
      type: Number,
      unique: true,
    },
  },
  {
    timestamps: true,
    collection: "quotation",
  }
);



const ProPost = mongoose.model("ProPostSchema", ProPostSchema);
const TempProPost = mongoose.model("TempProPostSchema", TempProPostSchema);
const ProReview = mongoose.model("ProReviewSchema", ProReviewSchema);
const RequestPost = mongoose.model("RequestPostSchema", RequestPostSchema);
module.exports = { ProPost, TempProPost, ProReview, RequestPost };
