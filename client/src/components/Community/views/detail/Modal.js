import React from "react";
import { ModalDiv } from "../../css/CommunityDetailElement.js";

function Modal() {
  return (
    <ModalDiv>
      <div>
        <button className="edit">
          <i className="bi bi-pencil-square"></i>수정
        </button>
      </div>
      <div>
        <button className="delete">
          <i className="bi bi-trash"></i>삭제
        </button>
      </div>
    </ModalDiv>
  );
}

export default Modal;