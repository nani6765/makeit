import React from "react";

import { withRouter, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import { ModalDiv } from "../../../../../css/RVDCSS.js";

function GuestModal(props) {
  const user = useSelector((state) => state.user);
  let history = useHistory();

  const ModalStyle = () => {
    if (props.modalType === "post") {
      return null;
    }
  };

  const OtherUid = () => {
    return props.postInfo.auther.uid;
  };

  function SendMessage() {
    let body = {
      me: user.userData.uid,
      you: OtherUid(),
    };
    axios.post("/api/chat/create", body).then((response) => {
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
    </ModalDiv>
  );
}

export default withRouter(GuestModal);
