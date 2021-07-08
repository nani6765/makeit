import React, { useState, useEffect } from "react";
import { ModalDiv } from "../../../css/CommunityDetailElement.js";
import { withRouter } from "react-router-dom";
import DeleteModal from "./DeleteModal";

function RerepleModal(props) {
  const [RepleInfo, setRepleInfo] = useState(props.repleInfo);
  const [ModalFlag, setModalFlag] = useState(false);

  function EditHandler() {
    props.setUpdateCheck(true);
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
      {ModalFlag ? (
        <DeleteModal
          reple={props.reple}
          rereple={props.rereple}
          setModalFlag={setModalFlag}
          type="rereple"
        />
      ) : null}
    </ModalDiv>
  );
}

export default withRouter(RerepleModal);
