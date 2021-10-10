import React from "react";
import { withRouter } from "react-router-dom";
import { DeleteModalDiv } from "../../../../../css/RVDCSS.js";
import axios from "axios";

function PostDeleteModal(props) {
  const RemoveHandler = () => {
    let body = {
      type: props.type,
      _id: props._id,
    };

    axios.post("/api/making/requestVideo/deletePost", body).then((response) => {
      if (response.data.success) {
        alert("삭제가 완료되었습니다.");
        props.history.push("/making");
      } else {
        alert("삭제 실패");
      }
    });
  };
  return (
    <DeleteModalDiv>
      <div className="content">
        <div
          className="background"
          onClick={() => props.setModalFlag(false)}
        ></div>
        <div className="gridDiv">
          <p className="title">
            {props.type === "post" ? "게시물" : "견적"} 삭제
          </p>
          <span className="delete" onClick={() => props.setModalFlag(false)}>
            X
          </span>
          <p className="desc">
            해당 {props.type === "post" ? "게시물" : "견적"}을 삭제하시겠습니까?
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

export default withRouter(PostDeleteModal);
