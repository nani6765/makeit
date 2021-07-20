import React, { useState, useEffect } from "react";
import { firebase } from "../../../firebase.js";
import { useSelector } from "react-redux";

function ChatDetailContent(props) {
  const [SendComment, setSendComment] = useState("");
  const [Comments, setComments] = useState([]);
  const [ChatRoomId, setChatRoomId] = useState("");
  const user = useSelector((state) => state.user);
  let MessageRef = firebase.database().ref("chats");

  //ChatRoomId 부모에게서 받아오기
  useEffect(() => {
    setChatRoomId(props.ChatRoomId);
  }, [props]);

  //ChatRoomId 받아왔을 때 ChatRoomId 설정
  useEffect(() => {
    if (ChatRoomId != "") {
      ReadMessage(ChatRoomId);
    }
  }, [ChatRoomId]);

  useEffect(() => {
    console.log("Comments", Comments);
  }, [Comments]);

  const ReadMessage = (ChatRoomId) => {
    let comments = [];
    MessageRef.child(ChatRoomId).on("child_added", (DataSnapshot) => {
      comments.push(DataSnapshot.val());
      setComments([...comments]);
    });
  };

  const CreateMessage = (ChatRoomId) => {
    MessageRef.child(ChatRoomId).push().set({
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      username: user.userData.displayName,
      profile_picture: user.userData.photoURL,
      uid: user.userData.uid,
      comment: SendComment,
    });
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
            <div key={idx}>
              <p>{comment.comment}</p>
            </div>
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
          <button type="submit">전송</button>
        </form>
      </div>
    </>
  );
}

export default ChatDetailContent;
