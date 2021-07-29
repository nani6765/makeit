import React, { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { MyPageMainDiv, MyPageSubTitle } from "./css/MyPageElement.js";

import BasicMyPage from "./MyPageContent/Taps/BasicMyPage.js";
import EditProfile from "./MyPageContent/Taps/EditProfile.js";
import AlarmCenter from "./MyPageContent/Taps/AlarmCenter.js";

function MyPage() {
  const user = useSelector((state) => state.user);
  const [Taps, setTaps] = useState("내정보");
  const [AlarmType, setAlarmType] = useState("알림센터");

  const SwitchTaps = () => {
    switch (Taps) {
      case "내정보":
        return <BasicMyPage setTaps={setTaps} />;
      case "프로필":
        return <EditProfile setTaps={setTaps} />;
      case "알림":
        return (
          <AlarmCenter AlarmType={AlarmType} setAlarmType={setAlarmType} />
        );
      default:
        return <BasicMyPage setTaps={setTaps} />;
    }
  };

  const SwitchTapHeader = () => {
    switch (Taps) {
      case "내정보":
        return <p>내정보 관리</p>;

      case "프로필":
        return (
          <React.Fragment>
            <p>프로필 관리</p>;
            <span
              onClick={() => {
                setTaps("내정보");
              }}
            >
              X
            </span>
          </React.Fragment>
        );

      case "알림":
        return (
          <React.Fragment>
            <div>
              <p
                className={AlarmType === "알림센터" ? "active" : null}
                onClick={() => setAlarmType("알림센터")}
              >
                알림센터
              </p>
              <p
                className={AlarmType === "쪽지함" ? "active" : null}
                onClick={() => setAlarmType("쪽지함")}
              >
                쪽지함
              </p>
            </div>
            <span
              onClick={() => {
                setTaps("내정보");
              }}
            >
              X
            </span>
          </React.Fragment>
        );

      default:
        return <p>내정보 관리</p>;
    }
  };

  return (
    <>
      <MyPageMainDiv>
        <p className="title">마이페이지</p>
        <MyPageSubTitle>{SwitchTapHeader()}</MyPageSubTitle>
        {SwitchTaps()}
      </MyPageMainDiv>
    </>
  );
}

export default withRouter(MyPage);
