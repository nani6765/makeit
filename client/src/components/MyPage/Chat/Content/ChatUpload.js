import React, { useState } from "react";
import { firebase } from "../../../../firebase.js";
import moment from "moment";
import "moment/locale/ko";

function ChatUpload(props) {
  const [SendComment, setSendComment] = useState("");
  const [SendCommentLoading, setSendCommentLoading] = useState(false);

  moment.locale("ko");
  let MessageRef = firebase.database().ref("chats");

  const CreateMessage = (ChatRoomId) => {
    let Date = moment().format("YY[년] MM[월] DD[일]");
    MessageRef.child(`${ChatRoomId}/${Date}`).push().set({
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      username: props.user.userData.displayName,
      profile_picture: props.user.userData.photoURL,
      uid: props.user.userData.uid,
      comment: SendComment,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSendCommentLoading(true);
    CreateMessage(props.ChatRoomId);
    setSendComment("");
    setSendCommentLoading(false);
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <form onSubmit={submitHandler}>
        <textarea
          value={SendComment}
          onChange={(e) => setSendComment(e.currentTarget.value)}
          rows="3"
        ></textarea>
        <button type="submit" disabled={SendCommentLoading}>
          전송
        </button>
      </form>
    </div>
  );
}

export default ChatUpload;
