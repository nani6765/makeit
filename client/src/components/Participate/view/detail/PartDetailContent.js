import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router";

import Avatar from "react-avatar";
import YouTube from "react-youtube";
import axios from "axios";

import PostImages from "./PostImages.js";
import UserModal from '../../../utils/view/Modal/UserModal.js';
import GuestModal from '../../../utils/view/Modal/GuestModal.js';
import { DetailDiv } from "../../css/ParticipateDetailCSS.js";
import { ReactComponent as LGIcon } from "../../../MakingMedia/css/Img/LikeGrey.svg";
import { ReactComponent as LPIcon } from "../../../MakingMedia/css/Img/LikePurple.svg";

function ShareVideoPost(props) {
  const user = useSelector((state) => state.user);

  const [likeFlag, setlikeFlag] = useState(false);
  const [hambucControl, sethambucControl] = useState(false);

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

  const LikeHandler = () => {
    if (user.userData === null) {
      alert("로그인한 회원만 좋아요를 누를 수 있습니다.");
      return history.push("/login");
    }
    if (props.PostInfo.auther.uid === user.userData.uid) {
      return alert("본인 글에는 좋아요를 누를 수 없습니다!");
    }

    let target = document.querySelector("#likeArea");
    target.style.disabled = "true";

    let body = {
      _id: props.PostInfo._id,
      postNum: props.PostInfo.url,
      likeFlag: likeFlag,
      userId: user.userData.uid,
      type: props.PostInfo.type,
      cateogry: "participate/post",
    };

    axios.post("/api/util/like", body).then((response) => {
      if (response.data.success) {
        target.style.disable = "false";
        window.location.reload();
      } else {
        window.location.reload();
      }
    });
  };
  
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
              (user.userData.uid === props.PostInfo.auther.uid ? (
                <UserModal modalType="/participate/post" Info={props.PostInfo} path="/participate" category={props.PostInfo.type}/>
              ) : (
                <GuestModal modalType="post" postInfo={props.PostInfo} />
              ))}
          </div>
        )}
        <div className="title">
          <p>{props.PostInfo.title}</p>
        </div>
        {/*
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
        */}
        {props.PostInfo.images && <PostImages images={props.PostInfo.images} />}
        {props.PostInfo.thumbnail && (
          <PostImages images={props.PostInfo.thumbnail} />
        )}
        <div className="desc">
          <p>{props.PostInfo.content}</p>
        </div>
        <div className="like" id="likeArea">
          {likeFlag ? (
            <LPIcon onClick={() => LikeHandler()} />
          ) : (
            <LGIcon onClick={() => LikeHandler()} />
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
