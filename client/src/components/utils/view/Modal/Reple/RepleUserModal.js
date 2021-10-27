import React, { useState } from "react";

import RepleDeleteModal from "./RepleDeleteModal.js";

import { withRouter } from "react-router-dom";
import { ModalDiv } from "../ModalCSS.js";

function RepleUserModal(props) {
  const [ModalFlag, setModalFlag] = useState(false);
  const [RepleInfo, setRepleInfo] = useState(props.repleInfo || "");

  function EditHandler() {
    props.setUpdateCheck(true);
  }

  function DeleteHandler() {
    if (props.modalType === "reple") {
      return (
        <RepleDeleteModal
          RepleInfo={RepleInfo}
          setModalFlag={setModalFlag}
          modalType="reple"
          type={props.type}
        />
      );
    } else {
      return (
        <RepleDeleteModal
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
      {props.modalType === "reple" && (
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

export default withRouter(RepleUserModal);
