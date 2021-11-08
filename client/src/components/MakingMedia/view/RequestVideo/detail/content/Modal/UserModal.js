import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

import DeleteModal from "./DeleteModal.js";

import { ModalDiv } from "../../../../../css/RVDCSS.js";

function UserModal(props) {
  let history = useHistory();

  return (
      <>
    <ModalDiv>
      <div>
        <button className="edit" onClick={() => history.push({pathname: "/making/QuotationEdit", state: { postInfo : props.Info }})}>
          <i className="bi bi-pencil-square"></i>
          수정
        </button>
      </div>
      <div>
        <button className="delete" onClick={() => props.setModalFlag(true)}>
          <i className="bi bi-trash"></i>삭제
        </button>
      </div>
    </ModalDiv>
    </>
  );
}

export default withRouter(UserModal);
