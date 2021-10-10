import React, { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router";
import axios from "axios";

import { RepleUploadDiv } from "../RepleCSS.js";

function RepleUpload(props) {
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.user);
  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!content) {
      return alert("댓글 내용을 입력해주세요.");
    }
    if (user.userData === null) {
      alert("로그인한 회원만 댓글을 입력할 수 있습니다.");
      return history.push("/login");
    }

    const body = {
      uid: user.userData.uid,
      postNum: props.postInfo.postNum,
      content: content,
    };

    axios.post("/api/community/repleSubmit", body).then((response) => {
      if (response.data.success) {
        alert("댓글 등록 성공");
        window.location.reload();
      } else {
        alert("댓글 등록 실패");
      }
    });
  };

  return (
    <>
      <RepleUploadDiv>
        <form action="post" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="댓글을 입력하세요"
            name="content"
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
          <div>
            <button type="submit">
              작성하기<i className="bi bi-pencil-fill"></i>
            </button>
          </div>
        </form>
      </RepleUploadDiv>
    </>
  );
}

export default withRouter(RepleUpload);
