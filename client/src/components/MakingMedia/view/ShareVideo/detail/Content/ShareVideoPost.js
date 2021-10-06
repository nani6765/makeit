import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import YouTube from "react-youtube";
import { DetailDiv } from "../css/ShareVideoDetailCSS.js";
import { ReactComponent as LGIcon } from "../../css/LikeGrey.svg";
import { ReactComponent as LPIcon } from "../../css/LikePurple.svg";

function ShareVideoPost(props) {
  const [Post, setPost] = useState({});
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
        <LGIcon />
        추천({props.PostInfo.likeNum})
      </div>
    </DetailDiv>
  );
}

export default ShareVideoPost;
