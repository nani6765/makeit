import React, { useState, useEffect, useRef } from "react";
import PostImages from "./PostImages.js";
import { DetailDiv } from "../../../css/CommunityDetailElement.js";
import Avatar from "react-avatar";
import PostModal from "../Modal/PostModal";
import PostGuestModal from "../Modal/PostGuestModal";
import { withRouter } from "react-router";
import axios from "axios";

function PostDetailContent(props) {
  const [postInfo, setpostInfo] = useState(props.postInfo);
  const [userInfo, setuserInfo] = useState(props.user);
  const [hambucControl, sethambucControl] = useState(false);
  const [likeFlag, setlikeFlag] = useState(false);

  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

  useEffect(() => {
    console.log("likeFlag", likeFlag);
  }, [likeFlag]);

  useEffect(() => {
    if (postInfo.likeArray.includes(userInfo.userData._id)) {
      setlikeFlag(true);
    } else {
      setlikeFlag(false);
    }
  }, []);

  function LikeHandler() {
    if (postInfo.auther._id === userInfo.userData._id) {
      return alert("본인 글에는 좋아요를 누를 수 없습니다!");
    }
    if (props.user.userData.error === true) {
      alert("로그인한 회원만 좋아요를 누를 수 있습니다.");
      return props.history.push("/login");
    }
    let target = document.querySelector("#likeArea");
    target.style.disable = "true";

    let body = {
      postNum: postInfo.postNum,
      likeFlag: likeFlag,
      userId: userInfo.userData._id,
    };

    axios.post("/api/community/like", body).then((response) => {
      if (response.data.success) {
        target.style.disable = "false";
        window.location.reload();
      } else {
        window.location.reload();
      }
    });
  }

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
          {props.user.userData.error === true ? null : (
            <div
              className="hambuc"
              onClick={() => sethambucControl(true)}
              ref={innerRef}
            >
              <i
                className="bi bi-three-dots"
                onClick={() => sethambucControl(true)}
              ></i>
              {hambucControl ? (
                userInfo.userData._id === postInfo.auther._id ? (
                  <PostModal postInfo={postInfo} />
                ) : (
                  <PostGuestModal userId={userInfo.userData._id} postInfo={postInfo}/>
                )
              ) : null}
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
              onClick={LikeHandler}
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
