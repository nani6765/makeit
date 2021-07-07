import React, { useState, useEffect } from "react";
import { DeleteModalDiv } from "../../../css/CommunityDetailElement";
import { withRouter } from "react-router-dom";
import axios from "axios";

function DeleteModal(props) {
  useEffect(() => {
    console.log(props.type);
  }, []);

  function RemoveHandler() {
    if (props.type === "post") {
      let body = {
        postInfoId: props.PostInfo._id,
        postNum: props.PostInfo.postNum,
        images: props.PostInfo.images,
        imageLength: props.PostInfo.images.length,
      };

      axios.post("/api/community/postDelete", body).then((response) => {
        if (response.data.success) {
          alert("게시글 삭제 성공");
          props.history.push("/community");
        } else {
          alert("게시글 삭제 실패");
        }
      });
    } else {
      let body = {
        repleId: props.RepleInfo._id,
        postNum: props.RepleInfo.postNum,
      };

      axios.post("/api/community/repleDelete", body).then((response) => {
        if (response.data.success) {
          alert("댓글 삭제 성공");
          window.location.reload();
        } else {
          alert("댓글 삭제 실패");
        }
      });
    }
  }

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

export default withRouter(DeleteModal);
