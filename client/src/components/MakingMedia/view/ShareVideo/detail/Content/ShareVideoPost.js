import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router";

import Avatar from "react-avatar";
import YouTube from "react-youtube";
import axios from "axios";

import UserModal from "../../../../../utils/view/Modal/UserModal.js";
import GuestModal from "../../../../../utils/view/Modal/GuestModal.js";
import { DetailDiv } from "../../../../css/SVDCSS.js";
import { ReactComponent as LGIcon } from "../../../../css/Img/LikeGrey.svg";
import { ReactComponent as LPIcon } from "../../../../css/Img/LikePurple.svg";

function ShareVideoPost(props) {
  const [likeFlag, setlikeFlag] = useState(false);
  const [LikeLoading, setLikeLoading] = useState(false);
  const [hambucControl, sethambucControl] = useState(false);

  const user = useSelector((state) => state.user);
  let history = useHistory();

  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

  useEffect(() => {
    if (user.userData && props.PostInfo.likeArray.includes(user.userData.uid)) {
      setlikeFlag(true);
    } else {
      setlikeFlag(false);
    }
  }, []);

  const PCOpts = {
    width: "100%",
    height: "720px",
  };

  const MobOpts = {
    width: "100%",
    height: "360px",
  };

  const LikeHandler = async (e) => {
    setLikeLoading(true);
    if (props.PostInfo.auther.uid === user.userData.uid) {
      return alert("본인 글에는 좋아요를 누를 수 없습니다!");
    }
    if (user.userData === null) {
      alert("로그인한 회원만 좋아요를 누를 수 있습니다.");
      return history.push("/login");
    }
    if (e.detail > 1) {
      return window.location.reload();
    }

    let body = {
      _id: props.PostInfo._id,
      url: props.PostInfo.url,
      likeFlag: likeFlag,
      userId: user.userData.uid,
      type: "ShareVideo",
      category: "Making/shareVideo",
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

  useEffect(() => {
    console.log(props.PostInfo);
  }, []);

  return (
    <>
      <DetailDiv>
        <div className="avatar">
          <Avatar
            src={props.PostInfo.auther.photoURL}
            size="40"
            round={true}
            style={{ border: "1px solid #c6c6c6" }}
          />
        </div>
        <div className="author">
          <p>{props.PostInfo.auther.displayName}</p>
        </div>
        <div className="date">
          <p>{props.PostInfo.realTime}</p>
        </div>
        {user.userData && (
          <div className="hambuc" ref={innerRef}>
            <i
              className="bi bi-three-dots"
              onClick={() => sethambucControl(!hambucControl)}
            ></i>
            {hambucControl &&
              (user.userData.uid === props.PostInfo.auther.uid ? (
                <UserModal
                  Info={props.PostInfo}
                  modalType="/making/ShareVideo"
                  path="/making"
                  category="제작 영상 알리기"
                />
              ) : (
                <GuestModal modalType="post" postInfo={props.PostInfo} />
              ))}
          </div>
        )}
        <div className="title">
          <p>{props.PostInfo.oneLineIntroduce}</p>
        </div>
        <div className="video">
          <YouTube
            videoId={props.PostInfo.videoUrl}
            opts={PCOpts}
            id="PCView"
          />
          <YouTube
            videoId={props.PostInfo.videoUrl}
            opts={MobOpts}
            id="MobView"
          />
        </div>
        <div className="desc">
          <p>{props.PostInfo.content}</p>
        </div>
        <div className="like" disabled={LikeLoading}>
          {likeFlag ? (
            <LPIcon onClick={(e) => LikeHandler(e)} />
          ) : (
            <LGIcon onClick={(e) => LikeHandler(e)} />
          )}
          추천({props.PostInfo.likeNum})
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

export default withRouter(ShareVideoPost);
