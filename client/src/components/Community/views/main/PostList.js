import React, { useState, useEffect } from "react";
import { PostListDiv, PostCard } from "../../css/CommunityMainElement.js";
import PostLabel from "./PostLabel.js";
import axios from "axios";
import TextEllipsis from "react-text-ellipsis";
import Avatar from "react-avatar";

function PostList(props) {
  const [category, setcategory] = useState(props.category);
  const [sortPost, setsortPost] = useState("최신순");
  const [posts, setposts] = useState([]);

  useEffect(() => {
    setcategory(props.category);
  }, [props.category]);

  useEffect(() => {
    let body = {
      category: category,
      sortPost: sortPost,
    };

    axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        let tempArray = [...response.data.postInfo];
        setposts(tempArray);
      } else {
        alert("게시글을 불러오는 데 실패했습니다.");
      }
    });
  }, [category, sortPost]);

  return (
    <>
      <PostLabel
        category={category}
        sortPost={sortPost}
        setsortPost={setsortPost}
      />
      <PostListDiv>
        {posts.map((post, idx) => {
          console.log("post", post);
          return (
            <PostCard key={idx}>
              <Avatar
                src={post.auther.avatar}
                size="50"
                round={true}
                style={{ border: "1px solid #c6c6c6" }}
              />

              <p className="author">{post.auther.name}</p>
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
          );
        })}
      </PostListDiv>
    </>
  );
}

export default PostList;
