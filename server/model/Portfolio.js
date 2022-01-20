const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function realTime() {
  return moment().format("YY-MM-DD[ ]HH:mm");
}

const prodPortfolioSchema = mongoose.Schema({
  auther: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  uid: {
    type: String,
  },
  url: {
    type: Number,
    unique: 1,
  },
  titletext: {
    type: String,
  },
  Name: {
    type: String,
  },
  fieldArr: {
    type: Array,
  },
  Location: {
    type: Array,
  },
  Introduce: {
    type: String,
  },
  projectArr: {
    type: Array,
  },
    /*
  MakeitProjectArr: [
    {
      type: Schema.Types.ObjectId,
      ref: "projectSchema",
    },
  ],
  */
  profileImg: {
    type: String,
  },
  type: {
    type: String,
    default: "프로덕션"
  },
  tagArr: {
    type: Array,
  },
  public: {
    type: Boolean,
    default: false,
  }
},{ collection: "portfolios", timestamps: true }
)

const proPortfolioSchema = mongoose.Schema({
  auther: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  uid: {
    type: String,
  },
  url: {
    type: Number,
    unique: 1,
  },
  titletext: {
    type: String,
  },
  Name: {
    type: String,
  },
  proName: {
    type: String,
  },
  gender: {
    type: String,
  },
  field: {
    type: String,
  },
  Location: {
    type: Array,
  },
  Introduce: {
    type: String,
  },
  projectArr: {
    type: Array,
  },
  /*
  MakeitProjectArr: [
    {
      type: Schema.Types.ObjectId,
      ref: "projectSchema",
    },
  ],
  */
  profileImg: {
    type: String,
  },
  type: {
    type: String,
    default: "프로"
  },
  tagArr: {
    type: Array,
  },
  public: {
    type: Boolean,
    default: false,
  }
},{ collection: "portfolios", timestamps: true }
)

const projectSchema = mongoose.Schema(
  {
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    url: {
      type: Number,
      unique: 1,
    },
    title: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    introduce: {
      type: String,
    },
    detailContent: {
      type: String,
    },
    location: {
      type: Array,
    },
    timeline: {
      type: Array,
    },
    tag: {
      type: Array,
    },
    realTime: {
      type: String,
      default: realTime(),
    },
    participater: [
      {
        type: {
          type: String,
          required : true,
        },
        uid: {
          type: String,
        },
        portfolio : { 
          type: Schema.Types.ObjectId,
        },
        accept : {
          type: Boolean,
          default: false
        }
      },
    ]
  },
  { collection: "projects", timestamps: true }
);

const ProdPortfolio = mongoose.model("ProdPortfolio", prodPortfolioSchema);
const ProPortfolio = mongoose.model("ProPortfolio", proPortfolioSchema);
const Project = mongoose.model("Project", projectSchema);
module.exports = { Project, ProdPortfolio, ProPortfolio };
