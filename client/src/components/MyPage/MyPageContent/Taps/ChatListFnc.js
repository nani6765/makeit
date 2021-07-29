import React from "react";

function ChatListFnc(props) {
  return (
    <React.Fragment>
      {props.ChatList &&
        Object.values(props.ChatList).map((chatInfo, idx) => {
          console.log(chatInfo);
          return <p key={idx}>{chatInfo.comment}</p>;
        })}
    </React.Fragment>
  );
}

export default ChatListFnc;
