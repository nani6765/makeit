import React, { useState } from "react";

import RepleDeleteModal from "./RepleDeleteModal.js";
import { withRouter, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import { ModalDiv } from "./ModalCSS.js";

function RepleModal(props) {
  let history = useHistory();
  const user = useSelector((state) => state.user);

  const [ModalFlag, setModalFlag] = useState(false);
  const [RepleInfo, setRepleInfo] = useState(props.repleInfo || "");

  const ModalStyle = () => {
    if (props.modalType === "reple") {
      return { justifyContent: "space-around" };
    } else {
      return { minHeight: "50px", display: "flex", justifyContent: "center" };
    }
  };

  const OtherUid = () => {
    if (props.modalType === "post") {
      return props.postInfo.auther.uid;
    } else if (props.modalType === "reple") {
      return props.repleInfo.uid;
    } else {
      return props.rerepleInfo.uid;
    }
  };

  function SendMessage() {
    console.log(props);
    let body = {
      me: user.userData.uid,
      you: OtherUid(),
    };
    axios.post("/api/chat/create", body).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        history.push(`/chat/${response.data.resultUrl}`);
      } else {
        console.log("error");
      }
    });
  }

  function EditHandler() {
    props.setUpdateCheck(true);
  }

  function DeleteHandler() {
    console.log("??");
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

  function UserModal() {
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
            <button
              className="edit"
              onClick={() => props.setrerepleUpload(true)}
            >
              <i className="bi bi-chat-right"></i>대댓글 달기
            </button>
          </div>
        )}
        <div>
          <button className="delete" onClick={() => setModalFlag(true)}>
            <i className="bi bi-trash"></i>삭제
          </button>
        </div>
        <ModalDiv>{ModalFlag && DeleteHandler()}</ModalDiv>
      </ModalDiv>
    );
  }

  function GusetModal() {
    return (
      <ModalDiv style={ModalStyle()}>
        <div>
          <button className="edit" onClick={() => SendMessage()}>
            <i className="bi bi-envelope-open"></i>
            쪽지 보내기
          </button>
        </div>
        {props.modalType === "reple" && (
          <div>
            <button
              className="edit"
              onClick={() => props.setrerepleUpload(true)}
            >
              <i className="bi bi-chat-right"></i>대댓글 달기
            </button>
          </div>
        )}
      </ModalDiv>
    );
  }

  return <div>{props.isUser ? <UserModal /> : <GusetModal />}</div>;
}

export default withRouter(RepleModal);
