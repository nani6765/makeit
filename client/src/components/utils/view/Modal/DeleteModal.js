import React from "react";

import { withRouter } from "react-router-dom";
import axios from "axios";

import { DeleteModalDiv } from "./ModalCSS.js";

function DeleteModal(props) {
  function RemoveHandler() {
    //게시글 삭제
    if (props.modalType === "post") {
      let body = {
        postInfoId: props.Info._id,
        postNum: props.Info.postNum,
        images: props.Info.images,
        imageLength: props.Info.images.length,
      };

      axios.post("/api/community/postDelete", body).then((response) => {
        if (response.data.success) {
          alert("게시글 삭제 성공");
          props.history.push("/community");
        } else {
          alert("게시글 삭제 실패");
        }
      });
    }
    else if (props.modalType==="review") {
      let body = {
        grade: props.Info.grade,
        uid: props.Info.uid,
        url: props.Info.url,
      };

      axios.post("/api/making/producer/review/delete", body).then((response) => {
        if (response.data.success) {
          alert("리뷰가 삭제되었습니다.");
          window.location.reload();
        } else {
          console.log(response.data.err);
        }
      });
    }
    else {
      let body = {
        postInfo : props.Info,
      };
      
      axios.post("/api"+props.modalType+"/delete", body).then((response) => {
        if (response.data.success) {
          alert("게시글이 삭제되었습니다.");
          if(props.path==="reload") {
            window.location.reload();
          } else {
            props.history.push({pathname: props.path, state: {category: props.category}});
          }
        } else {
          console.log(response.data.err);
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
          <p className="title">{props.modalType==="review" ? "리뷰" : "게시글"} 삭제</p>
          <span className="delete" onClick={() => props.setModalFlag(false)}>
            X
          </span>
          <p className="desc">
            해당 {props.modalType==="review" ? "리뷰를" : "게시글을"} 삭제하시겠습니까?
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
