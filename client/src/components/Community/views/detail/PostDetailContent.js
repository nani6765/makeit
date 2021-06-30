import React, { useState, useEffect, useRef } from "react";
import PostImages from "./PostImages.js";
import { DetailDiv } from "../../css/CommunityDetailElement.js";
import Avatar from "react-avatar";
import PostModal from "./PostModal.js";

function PostDetailContent(props) {
  const [postInfo, setpostInfo] = useState(props.postInfo);
  const [userInfo, setuserInfo] = useState(props.user);
  const [hambucControl, sethambucControl] = useState(false);
  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });
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
              {hambucControl ? <PostModal postInfo={postInfo} /> : null}
            </div>
          ) : null}
          <p className="date">{postInfo.realTime}</p>
          <p className="title">{postInfo.title}</p>
          <p className="desc">{postInfo.content}</p>
          {postInfo.images.length > 0 ? (
            <>
              <PostImages images={postInfo.images} />
            </>
          ) : null}
          <div className="like">
            <span>
              <i className="bi bi-emoji-smile"></i>
              공감({postInfo.likeNum})
            </span>
          </div>
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

export default PostDetailContent;
