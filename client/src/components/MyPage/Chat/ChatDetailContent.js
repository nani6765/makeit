import React, { useState, useEffect, useRef } from "react";
import { firebase } from "../../../firebase.js";
import { useSelector } from "react-redux";
import ChatUpload from './ChatUpload.js';
import ImageUpload from "./ImageUpload.js";

function ChatDetailContent(props) {
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

      <ChatUpload ChatRoomId={ChatRoomId} user={user} />

      <ImageUpload ChatRoomId={ChatRoomId}/>
    </>
  );
}

export default ChatDetailContent;
