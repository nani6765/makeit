import React, { useState, useEffect } from "react";
import AlarmContent from "../Content/AlarmContent.js";

function AlarmListFnc(props) {
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
      />
    );
  }

  return (
    <>
      {props.AlarmList.map((alarm, idx) => {
        return <React.Fragment key={idx}>{SwitchCard(alarm)}</React.Fragment>;
      })}
    </>
  );
}

export default AlarmListFnc;
