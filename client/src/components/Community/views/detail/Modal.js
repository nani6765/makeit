import React from "react";
import { ModalDiv } from "../../css/CommunityDetailElement.js";

function Modal() {
  return (
    <ModalDiv>
      <div className="edit">
        <i className="bi bi-pencil-square"></i>수정
      </div>
      <div className="delete">
        <i className="bi bi-trash"></i>삭제
      </div>
    </ModalDiv>
  );
}

export default Modal;
