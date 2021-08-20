import React, { useState, useEffect } from "react";
import axios from "axios";

function RepleEditForm(props) {
  const [content, setContent] = useState(props.Reple.content || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!content) {
      return alert("댓글 내용을 입력해주세요.");
    }

    const body = {
      id: props.Reple._id,
      content: content,
    };

    axios.post("/api/community/repleUpdate", body).then((response) => {
      if (response.data.success) {
        alert("댓글 수정 성공");
        window.location.reload();
      } else {
        alert("댓글 수정 실패");
      }
    });
  };

  return (
    <form action="post" onSubmit={submitHandler} className="edit">
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

export default RepleEditForm;
