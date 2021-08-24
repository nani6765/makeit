import React from "react";

import { withRouter, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import { ModalDiv } from "../../../css/CommunityModalCSS.js";

function GuestModal(props) {
  const user = useSelector((state) => state.user);
  let history = useHistory();

  const ModalStyle = () => {
    if (props.type === "post") {
      return null;
    } else if (props.type === "reple") {
      return { justifyContent: "space-around" };
    } else {
      return { minHeight: "50px", display: "flex", justifyContent: "center" };
    }
  };

  const OtherUid = () => {
    if (props.type === "post") {
      return props.postInfo.auther.uid;
    } else if (props.type === "reple") {
      return props.repleInfo.auther.uid;
    } else {
      return props.rerepleInfo.auther.uid;
    }
  };

  function SendMessage() {
    console.log(props);
    let body = {
      me: user.userData.uid,
      you: [OtherUid],
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
      {props.type === "reple" && (
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
