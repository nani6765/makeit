import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import axios from "axios";
import ChatDetail from "./ChatDetail.js";
import { ChatDiv } from "../css/ChatDetailElement.js";
function ChatDetailDiv(props) {
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
        setCheckUser(true);
        setChatRoomId(response.data.chatInfo.chatRoomId);
      } else {
        alert("유효하지 않은 사용자입니다.");
        history.push("/");
      }
    });
  }, []);

  return (
    <>
      <ChatDiv>
        {CheckUser && ChatRoomId != "" ? (
          <ChatDetail ChatRoomId={ChatRoomId} />
        ) : null}
      </ChatDiv>
    </>
  );
}

export default withRouter(ChatDetailDiv);
