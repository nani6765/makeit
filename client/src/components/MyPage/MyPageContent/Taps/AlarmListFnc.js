import React, { useState } from "react";
import { useSelector } from "react-redux";
import AlarmContent from "../Content/AlarmContent.js";

import { AlarmListDiv } from "../../css/AlarmCenterCSS.js";
import axios from "axios";

function AlarmListFnc(props) {
  const user = useSelector((state) => state.user);
  const [allChecked, setallChecked] = useState(false);

  function SwitchCard(alarm) {
    let key = alarm.type;
    let alarmType, contentType;
    switch (key) {
      case "repleToPost":
        alarmType = "댓글";
        contentType = "게시글";
        break;

      case "rerepleToReple":
        alarmType = "대댓글";
        contentType = "댓글";
        break;

      case "rerepleToPost":
        alarmType = "대댓글";
        contentType = "게시글";
        break;

      case "likeToPost":
        alarmType = "공감";
        contentType = "게시글";
        break;

      case "likeToReple":
        alarmType = "공감";
        contentType = "댓글";
        break;

      case "likeToRereple":
        alarmType = "공감";
        contentType = "대댓글";
        break;
    }
    return (
      <AlarmContent
        AlarmType={alarmType}
        ContentType={contentType}
        alarm={alarm}
        allChecked={allChecked}
      />
    );
  }

  const AllCheck = () => {
    let body = {};
    body.uid = user.userData.uid;
    axios.post("api/alarm/allCheck", body).then((response) => {
      if (response.data.success) {
        setallChecked(true);
      } else {
        alert("error");
      }
    });
  };

  return (
    <>
      <p
        style={{
          marginTop: "-5vh",
          textAlign: "right",
          cursor: "pointer",
          padding: "20px",
          fontWeight: "bold",
        }}
        onClick={() => AllCheck()}
      >
        모두 읽기
      </p>
      <AlarmListDiv>
        {props.AlarmList.map((alarm, idx) => {
          return <React.Fragment key={idx}>{SwitchCard(alarm)}</React.Fragment>;
        })}
      </AlarmListDiv>
    </>
  );
}

export default AlarmListFnc;
