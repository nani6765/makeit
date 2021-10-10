import React, { useState } from "react";

import { ModalDiv } from "../../../../../css/RVDCSS.js";
import PostDeleteModal from "./PostDeleteModal.js";

function PostModal(props) {
  const [ModalFlag, setModalFlag] = useState(false);

  return (
    <ModalDiv>
      <div>
        <button className="edit" onClick={() => {}}>
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
        <PostDeleteModal
          setModalFlag={setModalFlag}
          _id={props._id}
          type={props.type}
        />
      )}
    </ModalDiv>
  );
}

export default PostModal;
