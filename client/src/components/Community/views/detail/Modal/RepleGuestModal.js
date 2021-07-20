import React, { useEffect } from "react";
import { ModalDiv } from "../../../css/CommunityDetailElement.js";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function RepleGuestModal(props) {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log("Reple :: props : ", props, ", user : ", user);
  }, []);
  return (
    <ModalDiv style={{ justifyContent: "space-around" }}>
      <div>
        <button className="edit">
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
