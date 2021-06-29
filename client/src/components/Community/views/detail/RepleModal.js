import React, { useState, useEffect } from "react";
import { ModalDiv } from "../../css/CommunityDetailElement.js";
import { withRouter } from "react-router-dom";
import axios from "axios";

function RepleModal(props) {
  const [RepleInfo, setRepleInfo] = useState(props.repleInfo);

  function EditHandler() {
    props.setUpdateCheck(true);
  }

  function RemoveHandler() {
    let body = {
      repleId: RepleInfo._id,
      postNum: RepleInfo.postNum,
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

  return (
    <ModalDiv>
      <div>
        <button className="edit" onClick={() => EditHandler()}>
          <i className="bi bi-pencil-square"></i>
          수정
        </button>
      </div>
      <div>
        <button className="delete" onClick={() => RemoveHandler()}>
          <i className="bi bi-trash"></i>삭제
        </button>
      </div>
    </ModalDiv>
  );
}

export default withRouter(RepleModal);
