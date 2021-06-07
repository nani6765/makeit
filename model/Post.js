const mongoose = require("mongoose");

const coPostSchema = mongoose.Schema({
  auther: {
    type: String,
    maxlength: 50,
  },
  postNum: {
    type: 0,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  repleNum: {
    type: Num,
    default: 0,
  },
  likeNum: {
    type: Num,
    default: 0,
  },
});

const coPostSchema = mongoose.model("coPostSchema", coPostSchema);
module.exports = { coPostSchema };
