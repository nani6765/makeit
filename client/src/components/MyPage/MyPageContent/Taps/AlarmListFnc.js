import React, { useState, useEffect } from "react";
import AlarmContent from "../Content/AlarmContent.js";

function AlarmListFnc(props) {
  useEffect(() => {
    console.log(props);
  });

  function SwitchCard(alarm) {
    let key = alarm.type;
    let AlarmType, PostType;
    switch (key) {
      case "repleToPost":
        return (
          <>
            <p>repleToPost</p>
          </>
        );

      case "rerepleToReple":
        return (
          <>
            <p>rerepleToReple</p>
          </>
        );

      case "likeToPost":
        return (
          <>
            <p>likeToPostc</p>
          </>
        );

      case "likeToReple":
        return (
          <>
            <p>likeToReple</p>
          </>
        );

      case "likeToRereple":
        return (
          <>
            <p>likeToRereple</p>
          </>
        );
    }
  }

  return (
    <>
      {props.AlarmList.map((alarm, idx) => {
        return SwitchCard(alarm);
      })}
    </>
  );
}

export default AlarmListFnc;
