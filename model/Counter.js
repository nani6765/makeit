const mongoose = require("mongoose");

const counter = mongoose.Schema(
  {
    name: {
      type: String,
    },
    users: {
      type: Number,
    },
    coPosts: {
      type: Number,
    },
  },
  { collection: "counter" }
);

const Counter = mongoose.model("counter", counter);
module.exports = { Counter };
