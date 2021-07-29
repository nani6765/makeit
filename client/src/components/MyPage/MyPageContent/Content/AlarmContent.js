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
      <Chat />
      <p>내 {props.ContentType}에</p>
    </AlarmContentDiv>
  );
}

export default AlarmContent;
