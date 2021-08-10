import React from "react";
import ChatContent from "../../Content/ChatContent.js";
import { AlarmListDiv } from "../../../css/AlarmCenterCSS.js";
function ChatListFnc(props) {
  return (
    <AlarmListDiv>
      {props.ChatList &&
        Object.values(props.ChatList).map((chatInfo, idx) => {
          return (
            <ChatContent
              key={idx}
              chatInfo={chatInfo}
              chatRoomId={Object.keys(props.ChatList)[idx]}
            />
          );
        })}
    </AlarmListDiv>
  );
}

export default ChatListFnc;
