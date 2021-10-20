import React from "react";

import { withRouter, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import { ModalDiv } from "./ModalCSS.js";

function GuestModal(props) {
  const user = useSelector((state) => state.user);
  let history = useHistory();

  const ModalStyle = () => {
    if (props.modalType === "post") {
      return null;
    } else if (props.modalType === "reple") {
      return { justifyContent: "space-around" };
    } else {
      return { minHeight: "50px", display: "flex", justifyContent: "center" };
    }
  };

  const OtherUid = () => {
    if (props.modalType === "post") {
      return props.postInfo.auther.uid;
    } else if (props.modalType === "reple") {
      return props.repleInfo.uid;
    } else {
      return props.rerepleInfo.uid;
    }
  };

  function SendMessage() {
    console.log(props);
    let body = {
      me: user.userData.uid,
      you: OtherUid(),
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
    <ModalDiv style={ModalStyle()}>
      <div>
        <button className="edit" onClick={() => SendMessage()}>
          <i className="bi bi-envelope-open"></i>
          쪽지 보내기
        </button>
      </div>
      {props.modalType === "reple" && (
        <div>
          <button className="edit" onClick={() => props.setrerepleUpload(true)}>
            <i className="bi bi-chat-right"></i>대댓글 달기
          </button>
        </div>
      )}
    </ModalDiv>
  );
}

export default withRouter(GuestModal);
