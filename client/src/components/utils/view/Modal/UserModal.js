import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

import DeleteModal from "./DeleteModal.js";

import { ModalDiv } from "./ModalCSS.js";

function UserModal(props) {
  let history = useHistory();

  const [ModalFlag, setModalFlag] = useState(false);

  const [PostInfo, setPostInfo] = useState(props.postInfo || "");
  const [RepleInfo, setRepleInfo] = useState(props.repleInfo || "");
  const [RerepleInfo, setRerepleInfo] = useState(props.rerepleInfo || "");

  function EditHandler() {
    if (props.modalType === "post") {
      history.push({
        pathname: "/community/update/" + PostInfo.postNum,
        state: { postInfo: PostInfo },
      });
    } else {
      props.setUpdateCheck(true);
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
    } else if (props.modalType === "reple") {
      return (
        <DeleteModal
          RepleInfo={RepleInfo}
          setModalFlag={setModalFlag}
          modalType="reple"
          type={props.type}
        />
      );
    } else {
      return (
        <DeleteModal
          reple={props.reple}
          rereple={props.rereple}
          setModalFlag={setModalFlag}
          modalType="rereple"
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
      {props.type === "reple" && (
        <div style={{ marginTop: "10px" }}>
          <button className="edit" onClick={() => props.setrerepleUpload(true)}>
            <i className="bi bi-chat-right"></i>대댓글 달기
          </button>
        </div>
      )}
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
