import React, { useState, useEffect } from "react";
import DeleteModal from "./DeleteModal.js";
import { ModalDiv } from "../../../css/CommunityDetailElement.js";
import { withRouter, Link } from "react-router-dom";

function PostModal(props) {
  const [ModalFlag, setModalFlag] = useState(false);
  const [PostInfo, setPostInfo] = useState(props.postInfo);
  return (
    <>
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
          <button className="delete" onClick={() => setModalFlag(true)}>
            <i className="bi bi-trash"></i>삭제
          </button>
        </div>
      </ModalDiv>
      {ModalFlag ? (
        <DeleteModal
          PostInfo={PostInfo}
          setModalFlag={setModalFlag}
          type="post"
        />
      ) : null}
    </>
  );
}

export default withRouter(PostModal);
