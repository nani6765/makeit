import React, { useState, useEffect } from "react";
import { ModalDiv } from "../../../css/CommunityDetailElement.js"
import { withRouter } from "react-router-dom";
import axios from 'axios';

function RepleGuestModal(props) {

    function ChatHandler() {
        let body = {
            me: props.userId,
            you: props.postInfo.auther._id,
        }
        axios.post("/api/chat/create/", body).then((response) => {
            if (response.data.success) {
                props.history.push({
                    pathname: "/chat/"+response.data.chatNum,
                });
            } else {
                alert("error");
            }
        });
    }
    
  return (
    <ModalDiv>
      <div>
        <button className="edit" onClick={() => ChatHandler()}>
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
