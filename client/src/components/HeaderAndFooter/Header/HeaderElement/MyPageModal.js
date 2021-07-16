import React from "react";
import firebase from "../../../../firebase.js";
import { Link, withRouter } from "react-router-dom";
import { ModalDiv } from "../../css/HeaderElement.js";

function MyPageModal(props) {
  const logoutHandler = () => {
    props.setmyPageHambucControl(false);
    firebase.auth().signOut();
  };

  return (
    <ModalDiv style={{ top: "25px", right: "20px" }}>
      <div>
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

export default withRouter(MyPageModal);
