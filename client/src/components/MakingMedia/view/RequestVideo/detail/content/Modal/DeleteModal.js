import React from "react";

import { withRouter } from "react-router-dom";
import axios from "axios";

import { DeleteModalDiv } from "../../../../../css/RVDCSS.js";

function DeleteModal(props) {

    function RemoveHandler() {
      let body = {
        _id: props._id,
      };
      
      axios.post("/api/making/quotation/delete", body).then((response) => {
        if (response.data.success) {
          alert("게시글이 삭제되었습니다.");
            window.location.reload();
        } else {
          console.log(response.data.err);
        }
      });
    }

  return (
    <DeleteModalDiv>
      <div className="content">
        <div
          className="background"
          onClick={() => props.setModalFlag(false)}
        ></div>
        <div className="gridDiv">
          <p className="title">견적 삭제</p>
          <span className="delete" onClick={() => props.setModalFlag(false)}>
            X
          </span>
          <p className="desc">
            해당 견적을 삭제하시겠습니까?
            <br />
            삭제된 내용은 복원할 수 없습니다.
          </p>
          <div className="buttonDiv">
            <button
              type="button"
              className="cancel"
              onClick={() => props.setModalFlag(false)}
            >
              취소
            </button>
            <button
              type="button"
              className="delete"
              onClick={() => RemoveHandler()}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </DeleteModalDiv>
  );
}

export default withRouter(DeleteModal);
