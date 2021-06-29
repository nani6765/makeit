import React, { useState, useEffect } from "react";
import { ModalDiv } from "../../css/CommunityDetailElement.js";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

function PostModal(props) {
  const [PostInfo, setPostInfo] = useState(props.postInfo);

  function RemoveHandler() {
    let body = {
      postInfoId: PostInfo._id,
      postNum: PostInfo.postNum,
      images: PostInfo.images,
      imageLength: PostInfo.images.length,
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

  return (
    <ModalDiv>
      <div>
        <Link
          to={{
            pathname: "/community/update/" + PostInfo.postNum,
            state: { postInfo: PostInfo },
          }}
        >
          <button className="edit">
            <i className="bi bi-pencil-square"></i>수정
          </button>
        </Link>
      </div>
      <div>
        <button className="delete" onClick={() => RemoveHandler()}>
          <i className="bi bi-trash"></i>삭제
        </button>
      </div>
    </ModalDiv>
  );
}

export default withRouter(PostModal);
