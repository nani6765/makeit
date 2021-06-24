import React, { useState, useEffect, useRef } from "react";
import { DetailDiv, ModalDiv } from "../../css/CommunityDetailElement.js";
import Avatar from "react-avatar";

function PostDetailContent(props) {
  const [postInfo, setpostInfo] = useState(props.postInfo);
  const [userInfo, setuserInfo] = useState(props.user);
  const [hambucControl, sethambucControl] = useState(false);
  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });
  useEffect(() => {
    console.log("userInfo", userInfo.userData._id);
  }, []);
  return (
    <>
      <DetailDiv>
        <div className="content">
          <div className="avatar">
            <Avatar
              src={postInfo.auther.avatar}
              size="50"
              round={true}
              style={{ border: "1px solid #c6c6c6" }}
            />
          </div>
          <p className="author">{postInfo.auther.name}</p>
          {userInfo.userData._id === postInfo.auther._id ? (
            <div
              className="hambuc"
              onClick={() => sethambucControl(true)}
              ref={innerRef}
            >
              <i
                className="bi bi-three-dots"
                onClick={() => sethambucControl(true)}
              ></i>
              {hambucControl ? <Modal /> : null}
            </div>
          ) : null}

          <p className="date">{postInfo.realTime}</p>
          <p className="title">{postInfo.title}</p>
          <p className="desc">{postInfo.content}</p>
        </div>
      </DetailDiv>
    </>
  );
}

function useOuterClick(callback) {
  const callbackRef = useRef();
  const innerRef = useRef();
  useEffect(() => {
    callbackRef.current = callback;
  });
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      )
        callbackRef.current(e);
    }
  }, []);
  return innerRef;
}

function Modal() {
  return (
    <ModalDiv>
      <div className="edit">
        <i className="bi bi-pencil-square"></i>수정
      </div>
      <div className="delete">
        <i className="bi bi-trash"></i>삭제
      </div>
    </ModalDiv>
  );
}

export default PostDetailContent;
