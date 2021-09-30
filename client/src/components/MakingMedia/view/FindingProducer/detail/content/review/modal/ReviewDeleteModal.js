import React from "react";
import axios from "axios";

import { DeleteModalDiv } from "../../../../../../css/FindingProducerDetailCSS.js";

function ReviewDeleteModal(props) {
  const RemoveHandler = () => {
    let body = {
      grade: props.Review.grade,
      uid: props.Review.uid,
      url: props.Review.url,
    };

    axios.post("/api/making/producer/review/delete", body).then((response) => {
      if (response.data.success) {
        alert("리뷰가 삭제되었습니다.");
        window.location.reload();
      } else {
        console.log(response.data.err);
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
            {props.type === "post" ? "게시물" : "댓글"} 삭제
          </p>
          <span className="delete" onClick={() => props.setModalFlag(false)}>
            X
          </span>
          <p className="desc">
            해당 {props.type === "post" ? "게시물" : "댓글"}을 삭제하시겠습니까?
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

export default ReviewDeleteModal;
