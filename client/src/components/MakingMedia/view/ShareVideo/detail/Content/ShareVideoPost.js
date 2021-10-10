import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router";

import Avatar from "react-avatar";
import YouTube from "react-youtube";
import axios from "axios";

import { DetailDiv } from "../css/ShareVideoDetailCSS.js";
import { ReactComponent as LGIcon } from "../../css/LikeGrey.svg";
import { ReactComponent as LPIcon } from "../../css/LikePurple.svg";

function ShareVideoPost(props) {
  const [likeFlag, setlikeFlag] = useState(false);

  const user = useSelector((state) => state.user);
  let history = useHistory();

  useEffect(() => {
    console.log(props);
  }, [props]);

  const PCOpts = {
    width: "100%",
    height: "720px",
  };

  const MobOpts = {
    width: "100%",
    height: "360px",
  };

  const LikeHandler = () => {
    if (props.postInfo.auther.uid === user.userData.uid) {
      return alert("본인 글에는 좋아요를 누를 수 없습니다!");
    }
    if (user.userData === null) {
      alert("로그인한 회원만 좋아요를 누를 수 있습니다.");
      return history.push("/login");
    }
    let target = document.querySelector("#likeArea");
    target.style.disable = "true";

    let body = {
      postNum: props.postInfo.postNum,
      likeFlag: likeFlag,
      userId: user.userData.uid,
      type: "ShareVideo",
      cateogry: "Making/shareVideo",
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
      <div className="title">
        <p>{props.PostInfo.oneLineIntroduce}</p>
      </div>
      <div className="video">
        <YouTube videoId={props.PostInfo.videoUrl} opts={PCOpts} id="PCView" />
        <YouTube
          videoId={props.PostInfo.videoUrl}
          opts={MobOpts}
          id="MobView"
        />
      </div>
      <div className="desc">
        <p>{props.PostInfo.oneLineIntroduce}</p>
      </div>
      <div className="like">
        <LGIcon onClick={() => LikeHandler()} />
        추천({props.PostInfo.likeNum})
      </div>
    </DetailDiv>
  );
}

export default withRouter(ShareVideoPost);
