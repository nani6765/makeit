import React, { useEffect } from "react";

function AlarmListFnc(props) {
  useEffect(() => {
    console.log(props);
  });

  function SwitchCard(alarm) {
    let key = alarm.type;
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
