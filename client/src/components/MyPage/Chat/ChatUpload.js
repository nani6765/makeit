import React, { useState } from 'react'
import { firebase } from "../../../firebase.js";

function ChatUpload(props) {
  const [SendComment, setSendComment] = useState("");

  let MessageRef = firebase.database().ref("chats");

  const CreateMessage = (ChatRoomId) => {
    MessageRef.child(ChatRoomId).push().set({
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      username: props.user.userData.displayName,
      profile_picture: props.user.userData.photoURL,
      uid: props.user.userData.uid,
      comment: SendComment,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    CreateMessage(props.ChatRoomId);
  };

    return (

      <div style={{ width: "100%", textAlign: "center" }}>
        <form onSubmit={submitHandler}>
          <textarea
            value={SendComment}
            onChange={(e) => setSendComment(e.currentTarget.value)}
            rows="3"
          ></textarea>
          <button type="submit">전송</button>
        </form>
    </div>
    )
}

export default ChatUpload
