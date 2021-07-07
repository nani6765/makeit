import React, { useState, useEffect } from "react";
import axios from "axios";

function RerepleEditForm(props) {
  const [content, setContent] = useState(props.rereple.content || "");

  useEffect(() => {
    console.log("리리플", props);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!content) {
      return alert("댓글 내용을 입력해주세요.");
    }

    const body = {
      replePid: props.replePid,
      rerepleIdx: props.rereple._id, //rereple의 id
      content: content, //바꿔야 될 내용
    };

    console.log("body", body);

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
