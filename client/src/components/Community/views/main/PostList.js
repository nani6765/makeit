import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { PostListDiv, PostCard } from "../../css/CommunityMainElement.js";
import axios from "axios";
import TextEllipsis from "react-text-ellipsis";
import Avatar from "react-avatar";

function PostList(props) {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    let body = {
      category: props.category,
      sortPost: props.sortPost,
      pageSkip: props.pageSkip,
    };

    axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        setposts([...response.data.postInfo]);
      } else {
        alert("게시글을 불러오는 데 실패했습니다.");
      }
    });
  }, [props.category, props.sortPost, props.pageSkip]);

  return (
    <>
      <PostListDiv>
        {posts.map((post, idx) => {
          return (
            <Link
              to={"/community/post/" + post.postNum}
              style={{ textDecorationLine: "none", color: "black" }}
              key={idx}
            >
              <PostCard>
                <Avatar
                  src={post.auther.avatar}
                  size="50"
                  round={true}
                  style={{ border: "1px solid #c6c6c6" }}
                />
                <p className="author">{post.auther.name}</p>
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
      </PostListDiv>
    </>
  );
}

export default withRouter(PostList);
