const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = mongoose.Schema(
  {
    chatNum: {
      type: Number,
      unique: 1,
    },
    users: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "User",
        }],
    },
    chatLog: {
        type: Array,
    }
  },
  { collection: "chatInfo" }
);

const Chat = mongoose.model("Chat", chatSchema);
module.exports = { Chat };
