import React, { useState, useEffect, useRef } from "react";

import { firebase } from "../../../firebase.js";
import { useSelector } from "react-redux";

import ChatMeDetailContent from "./Content/ChatMeDetailContent.js";
import ChatYouDetailContent from "./Content/ChatYouDetailContent.js";
import ChatUpload from "./Content/ChatUpload.js";
import ImageUpload from "./Content/ImageUpload.js";
import ChatDateDetailContent from "./Content/ChatDateDetailContent.js";

import { ChatContentDiv } from "../css/ChatDetailElement.js";

function ChatDetail(props) {
  const [CommentGroup, setCommentGroup] = useState([]);
  const [Date, setDate] = useState("");
  const user = useSelector((state) => state.user);

  let MessageRef = firebase.database().ref("chats");

  useEffect(() => {
    if (props.ChatRoomId != "") {
      ReadMessage(props.ChatRoomId);
    }
  }, [props]);

  const ReadMessage = (ChatRoomId) => {
    console.log(ChatRoomId);

    let comments = [];
    MessageRef.child(ChatRoomId).on("child_added", (DataSnapshot) => {
      comments.push(DataSnapshot.val());
      setCommentGroup([...comments]);
    });
  };

  return (
    <>
      <ChatContentDiv>
        {CommentGroup.map((comments) => {
          let temp = [{ ...comments }];
          console.log("temp", temp);
          /*
          comments.map((comment, idx) => {
            console.log("comment", comment);
            return (
              <React.Fragment key={idx}>
                {comment.uid === user.userData.uid ? (
                  <ChatMeDetailContent comment={comment} />
                ) : (
                  <ChatYouDetailContent comment={comment} />
                )}
              </React.Fragment>
            );
          });
          */
        })}

        <ChatUpload ChatRoomId={props.ChatRoomId} user={user} />
        <ImageUpload ChatRoomId={props.ChatRoomId} />
      </ChatContentDiv>
    </>
  );
}

export default ChatDetail;
