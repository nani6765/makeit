import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router";
import Avatar from "react-avatar";
import axios from "axios";

import UserModal from "../../../../utils/view/Modal/UserModal.js";
import GuestModal from "../../../../utils/view/Modal/GuestModal.js";
import PostImages from "./PostImages.js";

import DetailDiv from "../../../css/CommunutyDetailCSS.js";

function PostDetailContent(props) {
  const [postInfo, setpostInfo] = useState(props.postInfo);
  const [hambucControl, sethambucControl] = useState(false);
  const [likeFlag, setlikeFlag] = useState(false);
  const [LikeLoading, setLikeLoading] = useState(false);
  const user = useSelector((state) => state.user);
  let history = useHistory();

  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

  useEffect(() => {
    if (user.userData && postInfo.likeArray.includes(user.userData.uid)) {
      setlikeFlag(true);
    } else {
      setlikeFlag(false);
    }
  }, []);

  const LikeHandler = async (e) => {
    setLikeLoading(true);
    if (e.detail > 1) {
      return window.location.reload();
    }

    if (user.userData === null) {
      alert("로그인한 회원만 좋아요를 누를 수 있습니다.");
      return history.push("/login");
    }
    if (postInfo.auther.uid === user.userData.uid) {
      return alert("본인 글에는 좋아요를 누를 수 없습니다!");
    }
    let body = {
      _id: postInfo._id,
      likeFlag: likeFlag,
      userId: user.userData.uid,
      url: postInfo.url,
      type: "CoPost",
      category: "community/post",
    };
    try {
      await axios.post("/api/util/like", body).then((response) => {
        if (response.data.success) {
          window.location.reload();
        } else {
          window.location.reload();
        }
      });
    } finally {
      setLikeLoading(false);
    }
  };

  return (
    <>
      <DetailDiv>
        <div className="content">
          <div className="avatar">
            <Avatar
              src={postInfo.auther.photoURL}
              size="50"
              round={true}
              style={{ border: "1px solid #c6c6c6" }}
            />
          </div>
          <p className="author">{postInfo.auther.displayName}</p>
          {user.userData && (
            <div
              className="hambuc"
              onClick={() => sethambucControl(true)}
              ref={innerRef}
            >
              <i
                className="bi bi-three-dots"
                onClick={() => sethambucControl(true)}
              ></i>
              {hambucControl &&
                (user.userData.uid === postInfo.auther.uid ? (
                  <UserModal Info={postInfo} modalType="post" />
                ) : (
                  <GuestModal postInfo={postInfo} modalType="post" />
                ))}
            </div>
          )}
          <p className="date">{postInfo.realTime}</p>
          <p className="title">{postInfo.title}</p>
          <p className="desc">{postInfo.content}</p>
          {postInfo.images.length > 0 ? (
            <>
              <PostImages images={postInfo.images} />
            </>
          ) : null}
          <div className="like">
            <button
              className={likeFlag ? "active" : null}
              id="likeArea"
              disabled={LikeLoading}
              onClick={(e) => {
                LikeHandler(e);
              }}
              type="button"
            >
              {likeFlag ? (
                <i className="bi bi-emoji-smile-fill"></i>
              ) : (
                <i className="bi bi-emoji-smile"></i>
              )}
              공감({postInfo.likeNum})
            </button>
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

export default withRouter(PostDetailContent);
