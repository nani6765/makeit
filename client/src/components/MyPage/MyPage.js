import React, { useState, useEffect } from "react";
import { withRouter, useLocation, useHistory } from "react-router-dom";
import { MyPageMainDiv, MyPageSubTitle } from "./css/MyPageElement.js";

import BasicMyPage from "./MyPageContent/Taps/BasicMyPage.js";
import EditProfile from "./MyPageContent/Taps/EditProfile.js";
import AlarmCenter from "./MyPageContent/Taps/Alarm/AlarmCenter.js";
import ActivityLog from "./MyPageContent/Taps/Logs/ActivityLog.js";
import { batch } from "react-redux";

function MyPage(props) {
  const location = useLocation();
  let history = useHistory();

  const [Taps, setTaps] = useState("basic");
  const [AlarmType, setAlarmType] = useState("alarm");

  useEffect(() => {
    if (location.state) {
      setTaps(location.state.Taps);
      setAlarmType(location.state.AlarmType);
    }
  }, [location.state]);

  useEffect(() => {
    if (location.search === "") {
      setTaps("basic");
    } else {
      if (location.search.slice(1) != Taps) {
        setTaps(location.search.slice(1));
      }
    }
  }, [location.search]);

  const SwitchTaps = () => {
    switch (Taps) {
      case "basic":
        return <BasicMyPage setTaps={setTaps} />;
      case "profile":
        return <EditProfile setTaps={setTaps} />;
      case "alarmCenter":
        return (
          <AlarmCenter AlarmType={AlarmType} setAlarmType={setAlarmType} />
        );
      case "activityHistory":
        return <ActivityLog setTaps={setTaps} />;
      default:
        return <BasicMyPage setTaps={setTaps} />;
    }
  };

  const SwitchTapHeader = () => {
    switch (Taps) {
      case "basic":
        return <p>내정보 관리</p>;

      case "profile":
        return (
          <React.Fragment>
            <p>프로필 관리</p>
            <span
              onClick={() => {
                setTaps("basic");
                history.push("/mypage");
              }}
            >
              X
            </span>
          </React.Fragment>
        );

      case "alarmCenter":
        return (
          <React.Fragment>
            <div>
              <p
                className={AlarmType === "alarm" ? "active" : null}
                onClick={() => setAlarmType("alarm")}
              >
                알림센터
              </p>
              <p
                className={AlarmType === "note" ? "active" : null}
                onClick={() => setAlarmType("note")}
              >
                쪽지함
              </p>
            </div>
            <span
              onClick={() => {
                setTaps("basic");
                history.push("/mypage");
              }}
            >
              X
            </span>
          </React.Fragment>
        );

      case "activityHistory":
        return (
          <React.Fragment>
            <p>활동이력</p>
            <span
              onClick={() => {
                setTaps("basic");
                history.push("/mypage");
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
