  import React, { useState, useEffect, useRef } from "react";
  import { firebase } from "../../../firebase.js";
  import { useSelector } from "react-redux";
  import ChatUpload from './ChatUpload.js';
  import ImageUpload from "./ImageUpload.js";

  function ChatDetailContent(props) {
    const [Comments, setComments] = useState([]);
    const [SendComment, setSendComment] = useState("");
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
      let message = {
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        username: user.userData.displayName,
        profile_picture: user.userData.photoURL,
        uid: user.userData.uid,
        type: "message",
        comment: SendComment,
      }
  
      MessageRef.child(ChatRoomId).push().set(message);
    };

    return (
      <>
        <div>
          {Comments.map((comment, idx) => {
            return (
              <div key={idx}>
                { comment.comment
                ? <p>{comment.comment}</p>
                : ( comment.type === 'image'
                    ? <img src={comment.src} />
                    : <a href={comment.src} download></a>
                )}
              </div>
            );
          })}
        </div>
        { ChatRoomId === ""
        ? null
        : (
          <div>
        <ChatUpload ChatRoomId={ChatRoomId} user={user} CreateMessage={CreateMessage} SendComment={setSendComment} setSendComment={setSendComment}/>

        <ImageUpload ChatRoomId={ChatRoomId} user={user}/>
        </div>
        )}
      </>
    );
  }

  export default ChatDetailContent;
