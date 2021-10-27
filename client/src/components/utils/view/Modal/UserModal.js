import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

import DeleteModal from "./DeleteModal.js";

import { ModalDiv } from "./ModalCSS.js";

function UserModal(props) {
  let history = useHistory();

  const [ModalFlag, setModalFlag] = useState(false);
  const [PostInfo, setPostInfo] = useState(props.postInfo || "");

  function EditHandler() {
    if (props.modalType === "post") {
      return history.push({
        pathname: "/community/update/" + PostInfo.postNum,
        state: { postInfo: PostInfo },
      });
    }
  }

  function DeleteHandler() {
    if (props.modalType === "post") {
      return (
        <DeleteModal
          PostInfo={PostInfo}
          setModalFlag={setModalFlag}
          modalType="post"
          type={props.type}
        />
      );
    }
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
        <button className="delete" onClick={() => setModalFlag(true)}>
          <i className="bi bi-trash"></i>삭제
        </button>
      </div>
      {ModalFlag && DeleteHandler()}
    </ModalDiv>
  );
}

export default withRouter(UserModal);
