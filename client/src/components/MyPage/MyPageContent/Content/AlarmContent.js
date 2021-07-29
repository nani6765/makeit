import React, { useEffect } from "react";
import { AlarmContentDiv } from "../../css/AlarmCenterCSS.js";
import { ReactComponent as Chat } from "../../css/chat.svg";
import { ReactComponent as Like } from "../../css/like.svg";

function AlarmContent(props) {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <AlarmContentDiv>
      <div className="Icon">
        <Chat />
      </div>
      <div className="Content">
        <p>
          내 {props.ContentType}에{" "}
          {props.AlarmType === "댓글" ? (
            <React.Fragment>{props.AlarmType}이 달렸어요</React.Fragment>
          ) : (
            <React.Fragment>{props.AlarmType}을 받았어요</React.Fragment>
          )}
        </p>
        <p className="date">{props.alarm.realTime}</p>
      </div>
    </AlarmContentDiv>
  );
}

export default AlarmContent;
