import React, { useState, useEffect, useRef } from "react";
import Avatar from "react-avatar";
import PostModal from "./Modal/PostModal.js";
import RequestDetailFilter from "./RequestDetailFilter.js";
import { DetailContentDiv } from "../../../../css/RVDCSS.js";

function RequestDatailContent(props) {
  const [ModalFlag, setModalFlag] = useState(false);

  const innerRef = useOuterClick((e) => {
    setModalFlag(false);
  });

  return (
    <DetailContentDiv>
      <p className="path">
        홈 &gt; 영상제작 &gt; 의뢰하기 &gt; {props.PostInfo.category}
      </p>
      <div className="container">
        <div className="profile">
          <Avatar
            src={props.PostInfo.auther.photoURL}
            size="45"
            round={true}
            style={{ border: "1px solid #c6c6c6" }}
          />
          <div>
            <p style={{ fontWeight: "bold" }}>
              {props.PostInfo.auther.displayName}
            </p>
            <p>{props.PostInfo.realTime}</p>
          </div>
        </div>
        {props.user
          ? props.user.uid === props.PostInfo.uid && (
              <div className="hambuc" ref={innerRef}>
                <i
                  className="bi bi-three-dots"
                  onClick={() => setModalFlag(!ModalFlag)}
                ></i>
                {ModalFlag && (
                  <PostModal _id={props.PostInfo._id} type="post" />
                )}
              </div>
            )
          : null}
        <RequestDetailFilter PostInfo={props.PostInfo} />
        <div className="content">{props.PostInfo.content}</div>
      </div>
    </DetailContentDiv>
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

export default RequestDatailContent;
