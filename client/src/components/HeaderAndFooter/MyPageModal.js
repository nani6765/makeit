import React from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { ModalDiv } from "./css/HeaderElement.js";

function AlarmModal(props) {
  const logoutHandler = () => {
    axios.get("/api/user/logout").then((res) => {
      console.log(res.data);
      if (res.data.success) {
        props.history.push("/");
        window.location.reload();
      } else {
        alert("로그아웃 하는 데 실패했습니다.");
      }
    });
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
