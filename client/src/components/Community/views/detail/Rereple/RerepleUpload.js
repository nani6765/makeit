import React, { useState } from "react";
import Avatar from "react-avatar";
import axios from "axios";
import { RerepleUploadDiv } from "../../../css/CommunityDetailElement.js";

function RerepleUpload(props) {
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!content) {
      return alert("댓글 내용을 입력해주세요.");
    }
    const body = {
      auther: props.userData._id,
      avatar: props.userData.avatar,
      email: props.userData.email,
      name: props.userData.name,
      postNum: props.postInfo.postNum,
      replePid: props.Reple._id,
      _id: props.Reple.rerepleIdx,
      content: content,
    };

    axios.post("/api/community/rerepleSubmit", body).then((response) => {
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
            src={props.userData.avatar}
            size="50"
            round={true}
            style={{ border: "1px solid #c6c6c6" }}
          />
        </div>

        <p className="name">{props.userData.name}</p>

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
