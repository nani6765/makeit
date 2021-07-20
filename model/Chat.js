const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    url: {
      type: Number,
      unique: 1,
    },
    users: {
      type: Array,
    },
    chatRoomId: {
      type: String,
    },
  },
  { collection: "chatInfo" }
);

const Chat = mongoose.model("Chat", chatSchema);
module.exports = { Chat };
