import React, { useState, useEffect } from "react";
import { PostListDiv } from "../../css/CommunityMainElement.js";
import PostLabel from "./PostLabel.js";

function PostList(props) {
  const [cateGory, setcateGory] = useState(props.category);
  const [alignPost, setalignPost] = useState("최신순");
  const [posts, setposts] = useState([]);

  useEffect(() => {
    setcateGory(props.category);
  });
  return (
    <>
      <PostLabel
        category={cateGory}
        alignPost={alignPost}
        setalignPost={setalignPost}
      />
      <PostListDiv>test!</PostListDiv>
    </>
  );
}

export default PostList;
