import React, { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { MyPageMainDiv, MyPageSubTitle } from "./css/MyPageElement.js";

import BasicMyPage from "./MyPageContent/Taps/BasicMyPage.js";
import EditProfile from "./MyPageContent/Taps/EditProfile.js";

function MyPage() {
  const user = useSelector((state) => state.user);
  const [Taps, setTaps] = useState("내정보 관리");

  const SwitchTaps = () => {
    switch (Taps) {
      case "내정보 관리":
        return <BasicMyPage setTaps={setTaps} />;
      case "프로필 관리":
        return <EditProfile setTaps={setTaps} />;
      default:
        return <BasicMyPage setTaps={setTaps} />;
    }
  };

  return (
    <>
      <MyPageMainDiv>
        <p className="title">마이페이지</p>
        <MyPageSubTitle>
          <p>{Taps}</p>
          {Taps != "내정보 관리" && (
            <span
              onClick={() => {
                setTaps("내정보 관리");
              }}
            >
              X
            </span>
          )}
        </MyPageSubTitle>
        {SwitchTaps()}
      </MyPageMainDiv>
    </>
  );
}

export default withRouter(MyPage);
