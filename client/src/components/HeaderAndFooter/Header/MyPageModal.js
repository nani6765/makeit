import React from "react";
import firebase from "../../../firebase.js";
import { Link, withRouter } from "react-router-dom";
import { ModalDiv } from "../css/HeaderElement.js";

function AlarmModal(props) {
  const logoutHandler = () => {
    firebase.auth().signOut();
  };

  return (
    <ModalDiv style={{ top: "25px", right: "20px" }}>
      <div onClick={() => props.setmyPageHambucControl(false)}>
        <Link to="/MyPage" style={{ color: "black", textDecoration: "none" }}>
          마이페이지
        </Link>
      </div>
      <div>
        <button
          className="logout"
          onClick={() => {
            logoutHandler();
          }}
        >
          로그아웃
        </button>
      </div>
    </ModalDiv>
  );
}

export default withRouter(AlarmModal);
