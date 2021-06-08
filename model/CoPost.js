const mongoose = require("mongoose");

const coPostSchema = mongoose.Schema({
  postNum: {
    type: 0,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  auther: {
    type: String,
  },
  category: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  link: {
    type: String,
  },
  repleNum: {
    type: Number,
    default: 0,
  },
  likeNum: {
    type: Number,
    default: 0,
  },
});

const coPostSchema = mongoose.model("coPostSchema", coPostSchema);
module.exports = { coPostSchema };
