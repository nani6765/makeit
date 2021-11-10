import React, { useState } from "react";
import Avatar from "react-avatar";
import axios from "axios";
import { useSelector } from "react-redux";

import { RerepleUploadDiv } from "../RepleCSS.js";

function RerepleUpload(props) {
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!content) {
      return alert("댓글 내용을 입력해주세요.");
    }
    const body = {
      uid: user.userData.uid,
      repleId: props.Reple._id,
      content: content,
      url: props.url,
      postId: props.Reple.postId,
      type: props.type,
      category: props.category,
    };

    axios.post("/api/util/rerepleSubmit", body).then((response) => {
      if (response.data.success) {
        alert("대댓글 등록 성공");
        window.location.reload();
      } else {
        alert("대댓글 등록 실패");
      }
    });
  };

  return (
    <RerepleUploadDiv>
      <form action="post" onSubmit={submitHandler}>
        <div className="avatar">
          <Avatar
            src={user.userData.photoURL}
            size="50"
            round={true}
            style={{ border: "1px solid #c6c6c6" }}
          />
        </div>

        <p className="name">{user.userData.displayName}</p>

        <input
          type="text"
          placeholder="댓글을 입력하세요"
          name="content"
          value={content}
          className="inputContent"
          onChange={(e) => setContent(e.currentTarget.value)}
        />

        <button
          type="button"
          className="cancel"
          onClick={() => {
            props.setrerepleUpload(false);
          }}
        >
          취소
        </button>

        <button type="submit" className="submit">
          완료
        </button>
      </form>
    </RerepleUploadDiv>
  );
}

export default RerepleUpload;
