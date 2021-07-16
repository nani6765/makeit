const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    uid: {
      type: String,
      unique: 1,
    },
    displayName: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      unique: 1,
    },
    photoURL: {
      type: String,
    },
    userNum: {
      type: Number,
    },
  },
  { collection: "userInfo" }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };
