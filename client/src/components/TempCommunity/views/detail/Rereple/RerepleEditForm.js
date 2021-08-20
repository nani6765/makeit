import React, { useState } from "react";
import axios from "axios";

function RerepleEditForm(props) {
  const [content, setContent] = useState(props.rereple.content || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!content) {
      return alert("댓글 내용을 입력해주세요.");
    }

    const body = {
      content: content,
      rerepleId: props.rereple._id,
    };

    axios.post("/api/community/rerepleUpdate", body).then((response) => {
      if (response.data.success) {
        alert("댓글 수정 성공");
        window.location.reload();
      } else {
        alert("댓글 수정 실패");
      }
    });
  };

  return (
    <form action="post" onSubmit={submitHandler} className="desc">
      <input
        type="text"
        placeholder="댓글을 수정하세요"
        name="content"
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      />

      <div>
        <button
          className="cancel"
          type="button"
          onClick={() => props.setUpdateCheck(false)}
        >
          취소
        </button>
        <button className="submit" type="submit">
          완료
        </button>
      </div>
    </form>
  );
}

export default RerepleEditForm;
