import React, { useState, useEffect } from "react";
import { RepleUploadDiv } from "../../css/CommunityDetailElement.js";
import { withRouter } from "react-router-dom";
import axios from "axios";

function RepleUpload(props) {
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!content) {
      return alert("댓글 내용을 입력해주세요.");
    }
    if (props.user.userData.error === true) {
      props.history.push("/");
    }
    const body = {
      auther: props.user.userData._id,
      email: props.user.userData.email,
      name: props.user.userData.name,
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
