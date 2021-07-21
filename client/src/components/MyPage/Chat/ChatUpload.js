import React, { useState } from 'react'
import { firebase } from "../../../firebase.js";

function ChatUpload(props) {
  let MessageRef = firebase.database().ref("chats");

  const submitHandler = (e) => {
    e.preventDefault();
    props.CreateMessage(props.ChatRoomId, "text");
  };

    return (

      <div style={{ width: "100%", textAlign: "center" }}>
        <form onSubmit={submitHandler}>
          <textarea
            value={props.SendComment}
            onChange={(e) => props.setSendComment(e.currentTarget.value)}
            rows="3"
          ></textarea>
          <button type="submit">전송</button>
        </form>
    </div>
    )
}

export default ChatUpload
