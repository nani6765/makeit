const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function getTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return new Date(Date.UTC(year, month, day, hours, minutes));
}

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
      type: String,
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
    createAt: {
      type: Date,
      default: getTime(),
    },
  },
  {
    //timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
    collection: "coPosts",
  }
);

const Community = mongoose.model("coPostSchema", coPostSchema);
module.exports = { Community };
