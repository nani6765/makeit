import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextEllipsis from "react-text-ellipsis";
import Avatar from "react-avatar";

import { PostCard, IPLoPostCard, CardDiv } from "../../css/ParticipateCSS.js";

import { ReactComponent as CGIcon } from "../../../MakingMedia/css/Img/CommentGray.svg";
import { ReactComponent as CYIcon } from "../../../MakingMedia/css/Img/CommentYellow.svg";
import { ReactComponent as LGIcon } from "../../../MakingMedia/css/Img/LikeGrey.svg";
import { ReactComponent as LPIcon } from "../../../MakingMedia/css/Img/LikePurple.svg";

function PostListDiv(props) {
  useEffect(() => {
    console.log("PostListDiv : ", props.type);
  }, [props]);

  return (
    <>
      {props.type === "FP" || props.type === "FA"
        ? props.PostList &&
          props.PostList.map((post, idx) => {
            if (post.type === "FP" || post.type === "FA") {
              return (
                <>
                  <Link
                    to={"/participate/post/" + post.url}
                    style={{ textDecorationLine: "none", color: "black" }}
                    key={idx}
                  >
                    <PostCard>
                      <Avatar
                        src={post.auther.photoURL}
                        size="50"
                        round={true}
                        style={{ border: "1px solid #c6c6c6" }}
                      />
                      <p className="author">{post.auther.displayName}</p>
                      <p className="view">조회수 {post.views}</p>
                      <p className="date">{post.realTime}</p>
                      <p className="title">{post.title}</p>
                      <TextEllipsis lines={2} tag={"p"} tagClass={"desc"}>
                        {post.content}
                      </TextEllipsis>
                      {post.images
                        ? post.images[0] && (
                            <p className="image">
                              <i className="bi bi-card-image"></i>
                              첨부({post.images.length})
                            </p>
                          )
                        : null}
                      <p className="like">
                        <i className="bi bi-emoji-smile"></i>
                        공감({post.likeNum})
                      </p>
                      <p className="reple">
                        <i className="bi bi-chat-square-dots"></i>
                        댓글({post.repleNum})
                      </p>
                    </PostCard>
                  </Link>
                </>
              );
            }
          })
        : props.PostList && (
            <CardDiv>
              {props.PostList.map((post, idx) => {
                if (post.type === "IP" || post.type === "Lo") {
                  return (
                    <Link
                      className="IPLoPostCard"
                      to={"/participate/post/" + post.url}
                      key={idx}
                    >
                      <IPLoPostCard>
                        <img
                          src={post.thumbnail[0].path}
                          className="thumbnail"
                        />
                        <p className="author">{post.auther.displayName}</p>
                        <p className="intro">{post.title}</p>
                        <div className="like">
                          {props.user &&
                          post.likeArray.includes(props.user.uid) ? (
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
                      </IPLoPostCard>
                    </Link>
                  );
                }
              })}
            </CardDiv>
          )}
    </>
  );
}

export default PostListDiv;
