import React, { useState, useEffect } from "react";
import { firebase } from "../../../firebase.js";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/ko";

function ChatDetailContent(props) {
  const [SendComment, setSendComment] = useState("");
  const [SendCommentLoading, setSendCommentLoading] = useState(false);

  const [Comments, setComments] = useState([]);
  const [ChatRoomId, setChatRoomId] = useState(props.ChatRoomId);

  const [DateInfo, setDateInfo] = useState("");
  const user = useSelector((state) => state.user);
  moment.locale("ko");

  let MessageRef = firebase.database().ref("chats");

  const ReadMessage = (ChatRoomId) => {
    console.log("ChatRoomId", ChatRoomId);
    let comments = [];
    MessageRef.child(ChatRoomId).on("child_added", (DataSnapshot) => {
      comments.push(DataSnapshot.val());
      setComments([...comments]);
    });
  };

  const CreateMessage = (ChatRoomId) => {
    setSendCommentLoading(true);
    MessageRef.child(ChatRoomId)
      .push()
      .set({
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        Date: moment().format("L"),
        username: user.userData.displayName,
        profile_picture: user.userData.photoURL,
        uid: user.userData.uid,
        comment: SendComment,
      });
    setSendComment("");
    setSendCommentLoading(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    CreateMessage(ChatRoomId);
  };

  return (
    <>
      <div>
        {Comments.map((comment, idx) => {
          return (
            <React.Fragment key={idx}>
              {DateInfo != comment.Date && <p>{comment.Date}</p>}
              {comment.uid === user.userData.uid ? (
                <div>
                  <p>
                    <span>나 : </span>
                    {comment.comment}
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    <span>상대방 : </span>
                    {comment.comment}
                  </p>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div style={{ width: "100%", textAlign: "center" }}>
        <form onSubmit={submitHandler}>
          <textarea
            value={SendComment}
            onChange={(e) => setSendComment(e.currentTarget.value)}
            rows="3"
          ></textarea>
          <button type="submit" disabled={SendCommentLoading}>
            전송
          </button>
        </form>
      </div>
    </>
  );
}

export default ChatDetailContent;
