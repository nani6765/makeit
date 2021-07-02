import React from "react";
import { DeleteModalDiv } from "../../css/CommunityDetailElement";

function DeleteModal() {
  return (
    <DeleteModalDiv>
      <div className="gridDiv">
        <p className="title">개시물 삭제</p>
        <span className="delete">X</span>
        <p className="desc">
          해당 게시물을 삭제하시겠습니까?
          <br />
          삭제된 내용은 복원할 수 없습니다.
        </p>
        <div className="buttonDiv">
          <button type="button" className="cancel">
            취소
          </button>
          <button type="button" className="delete">
            삭제
          </button>
        </div>
      </div>
    </DeleteModalDiv>
  );
}

export default DeleteModal;
