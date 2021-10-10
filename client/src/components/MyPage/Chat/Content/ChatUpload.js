import React, { useState, useEffect } from "react";
import firebase from "../../../../config/firebase.js";
import { useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";
import { useHistory } from "react-router-dom";

import moment from "moment";
import "moment/locale/ko";

function ChatUpload(props) {
  const [SendComment, setSendComment] = useState("");
  const [SendCommentLoading, setSendCommentLoading] = useState(false);
  const [OtherInfo, setOtherInfo] = useState();

  let history = useHistory();
  const user = useSelector((state) => state.user);

  moment.locale("ko");
  let MessageRef = firebase.database().ref("chats");
  let UserRef = firebase.database().ref("users");

  useEffect(() => {
    UserRef.child(props.OthersUid).once("value", (DataSnapshot) => {
      setOtherInfo(DataSnapshot.val());
    });
  }, []);

  useEffect(() => {
    console.log("OtherInfo", OtherInfo);
  }, [OtherInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!/\S/.test(SendComment)) {
      return;
    }
    setSendCommentLoading(true);
    CreateMessage(props.ChatRoomId);
    CreateAlarm(props.ChatRoomId);
    setSendComment("");
    setSendCommentLoading(false);
  };

  const handleKeyDown = (event) => {
    if (!event.shiftKey && event.keyCode === 13) {
      submitHandler(event);
    }
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

  const CreateAlarm = (ChatRoomId) => {
    let messageForMe = {
      type: "message",
      comment: SendComment,
      url: history.location.pathname,
      otherName: OtherInfo.name,
      otherImage: OtherInfo.image,
      isCheck: true,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    };

    let messageForYou = {
      type: "message",
      comment: SendComment,
      url: history.location.pathname,
      otherName: user.userData.displayName,
      otherImage: user.userData.photoURL,
      isCheck: false,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    };

    UserRef.child(`${user.userData.uid}/chats/${ChatRoomId}`).set(messageForMe);
    UserRef.child(`${props.OthersUid}/chats/${ChatRoomId}`).set(messageForYou);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <TextareaAutosize
          value={SendComment}
          onChange={(e) => setSendComment(e.currentTarget.value)}
          rows="1"
          cols="20"
          className="text"
          onKeyDown={handleKeyDown}
        />
        <button className="btn" type="submit" disabled={SendCommentLoading}>
          <i className="bi bi-envelope-open"></i>
          <span>보내기</span>
        </button>
      </form>
    </>
  );
}

export default ChatUpload;
