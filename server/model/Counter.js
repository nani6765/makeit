const mongoose = require("mongoose");
const counter = mongoose.Schema(
  {
    name: {
      type: String,
    },
    userNum: {
      type: Number,
    },
    coPostNum: {
      type: Number,
    },
    chatNum: {
      type: Number,
    },
    proPostNum: {
      type: Number,
    },
    reqPostNum: {
      type: Number,
    },
    shareVideoNum: {
      type: Number,
    },
    participateNum: {
      type: Number,
    },
    projectNum: {
      type: Number,
    },
    portfolioNum: {
      type: Number,
    },
  },
  { collection: "counter" }
);

const Counter = mongoose.model("Counter", counter);
module.exports = { Counter };
