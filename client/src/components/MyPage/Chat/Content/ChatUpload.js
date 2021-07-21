import React, { useState } from "react";

function ChatUpload(props) {
  const [Loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    props.CreateMessage(props.ChatRoomId, "text");
    props.setSendComment("");
    setLoading(false);
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <form onSubmit={submitHandler}>
        <textarea
          value={props.SendComment}
          onChange={(e) => props.setSendComment(e.currentTarget.value)}
          rows="3"
        ></textarea>
        <button type="submit" disabled={Loading}>
          전송
        </button>
      </form>
    </div>
  );
}

export default ChatUpload;
