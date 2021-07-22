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
<<<<<<< HEAD
        {props.comment.type === "message" ? (
          <p>{props.comment.comment}</p>
        ) : props.comment.type === "image" ? (
          <img
            src={props.comment.src}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        ) : (
          <a href={props.comment.src}>{props.comment.comment}</a>
        )}
=======
        <p>{props.comment.comment}</p>
>>>>>>> kimdoyoen-develop
      </div>
    </>
  );
}

export default ChatDetailContent;
