import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

import DeleteModal from "./DeleteModal.js";

import { ModalDiv } from "./ModalCSS.js";

function UserModal(props) {
  let history = useHistory();

  const [ModalFlag, setModalFlag] = useState(false);

  function EditHandler() {
    if (props.modalType === "post") {
      return history.push({
        pathname: "/community/update/" + props.Info.url,
        state: { postInfo: props.Info },
      });
    }
    else if (props.modalType === "review") {
      props.setEditFlag(true);
    }
    else {
      return history.push({
        pathname: props.modalType+"Edit",
        state: { postInfo: props.Info },
      });
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
      {ModalFlag && 
        <DeleteModal
          Info={props.Info}
          setModalFlag={setModalFlag}
          modalType={props.modalType}
          path={props.path}
          category={props.category}
        />}
    </ModalDiv>
  );
}

export default withRouter(UserModal);
