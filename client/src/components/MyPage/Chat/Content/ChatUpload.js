import React, { useState } from "react";
import { firebase } from "../../../../firebase.js";
import { useSelector } from "react-redux";

import moment from "moment";
import "moment/locale/ko";

function ChatUpload(props) {
  const user = useSelector((state) => state.user);

  const [SendComment, setSendComment] = useState("");
  const [SendCommentLoading, setSendCommentLoading] = useState(false);

  moment.locale("ko");
  let MessageRef = firebase.database().ref("chats");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!/\S/.test(SendComment)) {
      return;
    }
    setSendCommentLoading(true);
    console.log(SendComment);
    CreateMessage(props.ChatRoomId);
    setSendComment("");
    setSendCommentLoading(false);

function ChatUpload(props) {
  const [Loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    props.CreateMessage(props.ChatRoomId, "text");
    props.setSendComment("");
    setLoading(false);
  };

  const CreateMessage = (ChatRoomId) => {
    const Date = moment().format("YYYY[년] MM[월] DD[일]");
    let message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      username: user.userData.displayName,
      profile_picture: user.userData.photoURL,
      uid: user.userData.uid,
      type: "message",
      comment: SendComment,
    };
    MessageRef.child(`${ChatRoomId}/${Date}`).push().set(message);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <textarea
          value={SendComment}
          onChange={(e) => setSendComment(e.currentTarget.value)}
          rows="1"
          cols="20"
          className="text"
          wrap="soft"
        ></textarea>
        <button className="btn" type="submit" disabled={SendCommentLoading}>
          <i className="bi bi-envelope-open"></i>
          <span>보내기</span>
          </button>
        <button type="submit" disabled={Loading}>
          전송
        </button>
      </form>
    </>
  );
}

export default ChatUpload;
