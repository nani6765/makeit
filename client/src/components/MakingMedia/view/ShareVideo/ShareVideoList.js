import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { ShareVideoLink, ShareVideoCard } from "../../css/SVCSS.js";
import { ReactComponent as CGIcon } from "../../css/Img/CommentGray.svg";
import { ReactComponent as CYIcon } from "../../css/Img/CommentYellow.svg";
import { ReactComponent as LGIcon } from "../../css/Img/LikeGrey.svg";
import { ReactComponent as LPIcon } from "../../css/Img/LikePurple.svg";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function ShareVideoList(props) {
  const [PostList, setPostList] = useState([]);

  useEffect(() => {
    let body = {
      sort: props.URL.sort,
      skip: props.URL.pIdx * 9,
    };

    if (props.URL.searchTerm) {
      body.searchTerm = props.URL.searchTerm;
    }

    axios.post("/api/making/shareVideo", body).then((response) => {
      if (response.data.success) {
        setPostList([...response.data.post]);
      } else {
        console.log(response.data.err);
      }
    });
  }, [props.URL]);

  return (
    <>
      {PostList.map((post, idx) => {
        return (
          <Link
            to={"/making/shareVideo/" + post.url}
            key={idx}
            css={ShareVideoLink}
          >
            <ShareVideoCard>
              <img src={post.thumbnailUrl} className="thumbnail" />
              <p className="author">{post.auther.displayName}</p>
              <p className="intro">{post.oneLineIntroduce}</p>
              <div className="like">
                {props.user && post.likeArray.includes(props.user.uid) ? (
                  <LPIcon />
                ) : (
                  <LGIcon />
                )}
                추천
                {post.likeNum != 0 && <span>({post.likeNum})</span>}
              </div>
              <div className="comment">
                {post.repleNum ? <CGIcon /> : <CYIcon />}
                의견
                {post.repleNum != 0 && <span>({post.repleNum})</span>}
              </div>
            </ShareVideoCard>
          </Link>
        );
      })}
    </>
  );
}

export default ShareVideoList;
