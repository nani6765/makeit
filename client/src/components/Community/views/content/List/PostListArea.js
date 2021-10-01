import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import TextEllipsis from "react-text-ellipsis";
import Avatar from "react-avatar";
import { PostCard } from "../../../css/CommunityListCSS.js";
import axios from "axios";

function PostListArea(props) {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    setposts([...props.PostList]);
  }, [props.PostList]);

  const ScrollFunction = (e) => {
    e.preventDefault();
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;
    // console.log("scrollHeight ", scrollHeight)
    // console.log("scrollTop ", scrollTop)
    // console.log("clientHeight ", clientHeight)
    if(scrollTop + clientHeight >= scrollHeight) {
      props.getPostList();
      //setPostSkip(PostSkip => PostSkip + PostLimit);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', ScrollFunction, true);
    return () => {
      window.removeEventListener('scroll', ScrollFunction, true);
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ gridArea: "content" }} id="PostList" onScroll={ScrollFunction}>
      {posts.map((post, idx) => {
        return (
          <Link
            to={"/community/post/" + post.postNum}
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
              {post.images.length != 0 ? (
                <p className="image">
                  <i className="bi bi-card-image"></i>
                  첨부({post.images.length})
                </p>
              ) : null}
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
        );
      })}
    </div>
  );
}

export default withRouter(PostListArea);
