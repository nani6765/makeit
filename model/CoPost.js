const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coPostSchema = mongoose.Schema(
  {
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    email: {
      type: String,
    },
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
    category: {
      type: Number,
      default: 0,
    },
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
    postNum: {
      type: Number,
      //unique: true,
    },
  },
  { timeStamps: true }
);

const Community = mongoose.model("coPostSchema", coPostSchema);
module.exports = { Community };
