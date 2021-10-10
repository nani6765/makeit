import React, { useState } from "react";
import { ModalDiv } from "../../../../../../css/FPDCSS.js";
import ReviewDeleteModal from "./ReviewDeleteModal.js";

function ReviewModal(props) {
  const [ModalFlag, setModalFlag] = useState(false);

  return (
    <ModalDiv>
      <div>
        <button className="edit" onClick={() => props.setEditFlag(true)}>
          <i className="bi bi-pencil-square"></i>
          수정
        </button>
      </div>
      <div>
        <button className="delete" onClick={() => setModalFlag(true)}>
          <i className="bi bi-trash"></i>삭제
        </button>
      </div>
      {ModalFlag && (
        <ReviewDeleteModal setModalFlag={setModalFlag} Review={props.Review} />
      )}
    </ModalDiv>
  );
}

export default ReviewModal;
