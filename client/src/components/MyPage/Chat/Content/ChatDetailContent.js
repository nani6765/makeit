import React from "react";
import moment from "moment";
import "moment/locale/ko";

function ChatDetailContent(props) {
  moment.locale("en");
  return (
    <>
      <p className="date">
        {moment(props.comment.timestamp).format("h[:]mm a")}
      </p>
      <div className="content">
        <p>{props.comment.comment}</p>
      </div>
    </>
  );
}

export default ChatDetailContent;
