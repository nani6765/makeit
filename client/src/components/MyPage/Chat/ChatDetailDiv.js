import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import axios from "axios";

import ChatDetail from "./ChatDetail.js";
import ChatGNB from "./ChatGNB.js";

import { ChatDiv } from "../css/ChatDetailElement.js";

function ChatDetailDiv(props) {
  const [CheckUser, setCheckUser] = useState(false);
  const [ChatRoomId, setChatRoomId] = useState("");
  const [OthersUid, setOthersUid] = useState("");
  const user = useSelector((state) => state.user);
  let history = useHistory();

  useEffect(() => {
    let body = {
      uid: user.userData.uid,
      url: props.match.params.chatUrl,
    };
    axios.post("/api/chat/userCheck", body).then((response) => {
      if (response.data.success) {
        console.log("Data", response.data);
        setCheckUser(true);
        setChatRoomId(response.data.chatInfo.chatRoomId);
        if (response.data.chatInfo.users[0] === user.userData.uid) {
          setOthersUid(response.data.chatInfo.users[1]);
        } else {
          setOthersUid(response.data.chatInfo.users[0]);
        }
      } else {
        alert("유효하지 않은 사용자입니다.");
        history.push("/");
      }
    });
  }, []);

  return (
    <>
      <ChatDiv>
        {CheckUser && ChatRoomId != "" && OthersUid != "" ? (
          <>
            <ChatGNB OthersUid={OthersUid} />
            <ChatDetail ChatRoomId={ChatRoomId} />
          </>
        ) : null}
      </ChatDiv>
    </>
  );
}

export default withRouter(ChatDetailDiv);
