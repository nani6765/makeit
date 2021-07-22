import React, { useState, useEffect, useRef } from "react";
import { firebase } from "../../../firebase.js";
import { useSelector } from "react-redux";

import ChatUpload from "./Content/ChatUpload.js";
import FileUpload from "./Content/FileUpload.js";
import ChatDetailContent from "./Content/ChatDetailContent.js";

import moment from "moment";
import "moment/locale/ko";

import {
  ChatContentDiv,
  ChatForContentDiv,
  ChatContentDate,
  ChatMeContentGrid,
  ChatYouContentGrid,
<<<<<<< HEAD
  UploadDiv,
} from "../css/ChatDetailElement.js";

=======
} from "../css/ChatDetailElement.js";
>>>>>>> kimdoyoen-develop
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function ChatDetail(props) {
  const [Comments, setComments] = useState([]);
<<<<<<< HEAD
=======
  const [SendComment, setSendComment] = useState("");
>>>>>>> kimdoyoen-develop
  const [ChatRoomId, setChatRoomId] = useState("");

  const user = useSelector((state) => state.user);
  moment.locale("ko");

  let MessageRef = firebase.database().ref("chats");

  //ChatRoomId 부모에게서 받아오기
  useEffect(() => {
    setChatRoomId(props.ChatRoomId);
  }, [props]);

  //ChatRoomId 받아왔을 때 ChatRoomId 설정
  useEffect(() => {
    if (ChatRoomId != "") {
<<<<<<< HEAD
      LoadMessages(ChatRoomId);
    }
  }, [ChatRoomId]);

  const ScrollFunction = () => {
    let TargetDIv = document.querySelector("#ChatForContentDiv");
<<<<<<< HEAD
=======
    console.log("scroll Height", TargetDIv.scrollHeight, ", Start", TargetDIv.scrollTop);
>>>>>>> 4cc7f7a1acb7d527d92fb8c6f2866a2c1f6b8f99
    TargetDIv.scrollTo({
      top: `${TargetDIv.scrollHeight}`,
      left: 0,
      behavior: "smooth",
    });
    console.log("scroll Height", TargetDIv.scrollHeight, ", End", TargetDIv.scrollTop);
  };

  const LoadMessages = (ChatRoomId) => {
    MessageRef.child(ChatRoomId).once("child_added", (DataSnapshot) => {
      let comments = [];
      comments.push(DataSnapshot.val());
      setComments([...comments]);
      ScrollFunction();
    });

    MessageRef.child(ChatRoomId).on("child_changed", (DataSnapshot) => {
      let comments = [];
      comments.push(DataSnapshot.val());
      setComments([...comments]);
      ScrollFunction();
=======
      ReadMessage(ChatRoomId);
    }
  }, [ChatRoomId]);

  const ReadMessage = (ChatRoomId) => {
    let comments = [];
    MessageRef.child(ChatRoomId).on("child_added", (DataSnapshot) => {
      comments.push(DataSnapshot.val());
      setComments([...comments]);
>>>>>>> kimdoyoen-develop
    });
  };

  const CreateMessage = (ChatRoomId) => {
    const Date = moment().format("YYYY[년] MM[월] DD[일]");
    let message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      username: user.userData.displayName,
      profile_picture: user.userData.photoURL,
      uid: user.userData.uid,
      type: "message",
      comment: SendComment,
    };
    MessageRef.child(`${ChatRoomId}/${Date}`).push().set(message);
  };

  return (
    <>
      <ChatContentDiv>
<<<<<<< HEAD
        <ChatForContentDiv id="ChatForContentDiv">
=======
        <ChatForContentDiv>
>>>>>>> kimdoyoen-develop
          {Comments.map((commentGroup, idx) => {
            return Object.values(commentGroup).map((comment, idx) => {
              return (
                <React.Fragment key={idx}>
                  {idx === 0 && (
                    <ChatContentDate>
                      {moment(comment.timestamp).format(
                        "YYYY[년] MM[월] DD[일]"
                      )}
                    </ChatContentDate>
                  )}
                  <div
                    css={
                      user.userData.uid === comment.uid
                        ? ChatMeContentGrid
                        : ChatYouContentGrid
                    }
                  >
                    <ChatDetailContent comment={comment} />
                  </div>
                </React.Fragment>
              );
            });
          })}
        </ChatForContentDiv>
        {ChatRoomId === "" ? null : (
<<<<<<< HEAD
          <UploadDiv>
            <ChatUpload ChatRoomId={ChatRoomId} user={user} />

            <FileUpload ChatRoomId={ChatRoomId} user={user} />
          </UploadDiv>
=======
          <div>
            <ChatUpload
              ChatRoomId={ChatRoomId}
              user={user}
              CreateMessage={CreateMessage}
              SendComment={SendComment}
              setSendComment={setSendComment}
            />

            <ImageUpload ChatRoomId={ChatRoomId} user={user} />
          </div>
>>>>>>> kimdoyoen-develop
        )}
      </ChatContentDiv>
    </>
  );
}

export default ChatDetail;
