import React, { useEffect } from "react";
import { ModalDiv } from "../../../css/CommunityDetailElement.js";
import { withRouter, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function RepleGuestModal(props) {
  const user = useSelector((state) => state.user);
  let history = useHistory();

  function SendMessage() {
    console.log(props);

    let body = {
      me: user.userData.uid,
      you: props.repleInfo.auther.uid,
    };
    axios.post("/api/chat/create", body).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        history.push(`/chat/${response.data.resultUrl}`);
      } else {
        console.log("error");
      }
    });
  }

  return (
    <ModalDiv style={{ justifyContent: "space-around" }}>
      <div>
        <button className="edit" onClick={() => SendMessage()}>
          <i className="bi bi-envelope-open"></i>
          쪽지 보내기
        </button>
      </div>
      <div>
        <button className="edit" onClick={() => props.setrerepleUpload(true)}>
          <i className="bi bi-chat-right"></i>대댓글 달기
        </button>
      </div>
    </ModalDiv>
  );
}

export default withRouter(RepleGuestModal);
