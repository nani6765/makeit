import React, { useState, useEffect, useRef } from "react";
import { firebase } from "../../../firebase.js";
import { useSelector } from "react-redux";

import ChatUpload from "./Content/ChatUpload.js";
import ImageUpload from "./Content/ImageUpload.js";
import ChatDetailContent from "./Content/ChatDetailContent.js";

import moment from "moment";
import "moment/locale/ko";

import {
  ChatContentDiv,
  ChatForContentDiv,
  ChatContentDate,
  ChatMeContentGrid,
  ChatYouContentGrid,
  UploadDiv,
} from "../css/ChatDetailElement.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function ChatDetail(props) {
  const [Comments, setComments] = useState([]);
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
      LoadMessages(ChatRoomId);
    }
  }, [ChatRoomId]);

  const ScrollFunction = () => {
    let TargetDIv = document.querySelector("#ChatForContentDiv");
    console.log("hello?", TargetDIv.scrollHeight);
    TargetDIv.scrollTo({
      top: `${TargetDIv.scrollHeight}`,
      left: 0,
      behavior: "smooth",
    });
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
    });
  };

  return (
    <>
      <ChatContentDiv>
        <ChatForContentDiv id="ChatForContentDiv">
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
          <UploadDiv>
            <ChatUpload ChatRoomId={ChatRoomId} user={user} />

            <ImageUpload ChatRoomId={ChatRoomId} user={user} />
          </UploadDiv>
        )}
      </ChatContentDiv>
    </>
  );
}

export default ChatDetail;
