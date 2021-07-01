import React, { useState, useEffect } from "react";
import { ModalDiv } from "../../css/CommunityDetailElement.js";
import { withRouter } from "react-router-dom";
import axios from "axios";

function RepleGuestModal() {
  return (
    <ModalDiv>
      <div>
        <button className="edit">
          <i className="bi bi-envelope-open"></i>
          쪽지 보내기
        </button>
      </div>
      <div>
        <button className="edit">
          <i className="bi bi-chat-right"></i>대댓글 달기
        </button>
      </div>
    </ModalDiv>
  );
}

export default withRouter(RepleGuestModal);
