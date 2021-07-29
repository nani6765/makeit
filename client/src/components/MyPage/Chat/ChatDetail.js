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
  UploadDiv,
} from "../css/ChatDetailElement.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function ChatDetail(props) {
  const [Comments, setComments] = useState([]);
  const [ChatRoomId, setChatRoomId] = useState("");
  const [ScorllHChange, setScorllHChange] = useState(false);

  const user = useSelector((state) => state.user);
  moment.locale("ko");

  let MessageRef = firebase.database().ref("chats");
  const Date = moment().format("YYYY[년] MM[월] DD[일]");

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

  useEffect(() => {
    if (ScorllHChange) {
      ScrollFunction();
      setScorllHChange(false);
    }
  }, [ScorllHChange]);

  const ScrollFunction = () => {
    let TargetDIv = document.querySelector("#ChatForContentDiv");
    TargetDIv.scrollTo({
      top: `${TargetDIv.scrollHeight}`,
      left: 0,
      behavior: "smooth",
    });
  };

  const LoadMessages = (ChatRoomId) => {
    let comments = [];
    setComments(comments);
    MessageRef.child(ChatRoomId).on("value", (DataSnapshot) => {
      setComments(...Comments, DataSnapshot.val());
      setScorllHChange(true);
    });
  };

  return (
    <>
      <ChatContentDiv>
        <ChatForContentDiv id="ChatForContentDiv">
          {Comments
            ? Object.values(Comments).map((commentGroup, idx) => {
                return Object.values(commentGroup).map((comment, i) => {
                  return (
                    <React.Fragment key={`${idx}/${i}`}>
                      {i === 0 && (
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
                        <ChatDetailContent
                          comment={comment}
                          setScorllHChange={setScorllHChange}
                        />
                      </div>
                    </React.Fragment>
                  );
                });
              })
            : null}
        </ChatForContentDiv>
        {ChatRoomId === "" ? null : (
          <UploadDiv>
            <ChatUpload
              ChatRoomId={ChatRoomId}
              user={user}
              OthersUid={props.OthersUid}
            />

            <FileUpload
              ChatRoomId={ChatRoomId}
              user={user}
              OthersUid={props.OthersUid}
            />
          </UploadDiv>
        )}
      </ChatContentDiv>
    </>
  );
}

export default ChatDetail;
