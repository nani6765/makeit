const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

function realTime() {
  return moment().format("YY-MM-DD[ ]HH:mm");
}

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
  },
  { collection: "projects", timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
module.exports = { Project };
