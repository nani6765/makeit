import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import axios from "axios";
import ChatDetailContent from "./ChatDetailContent.js";

function ChatDetail(props) {
  const [CheckUser, setCheckUser] = useState(false);
  const [ChatRoomId, setChatRoomId] = useState("");
  const user = useSelector((state) => state.user);
  let history = useHistory();

  useEffect(() => {
    let body = {
      uid: user.userData.uid,
      url: props.match.params.chatUrl,
    };
    axios.post("/api/chat/userCheck", body).then((response) => {
      if (response.data.success) {
        //Firebase 데이터베이스에 저장해주기
        setCheckUser(true);
        setChatRoomId(response.data.chatInfo.chatRoomId);
      } else {
        alert("유효하지 않은 사용자입니다.");
        history.push("/");
      }
    });
  }, []);
  return (
    <>{CheckUser ? <ChatDetailContent ChatRoomId={ChatRoomId} /> : null}</>
  );
}

export default withRouter(ChatDetail);
