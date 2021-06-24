import React, { useState, useEffect } from "react";
import axios from "axios";
import PostDetailContent from "./detail/PostDetailContent.js";

function PostDetail(props) {
  const [postInfo, setpostInfo] = useState({ _id: null });

  useEffect(() => {
    let body = {
      postNum: props.match.params.postId,
    };
    axios.post("/api/community/postDetail", body).then((response) => {
      if (response.data.success) {
        if (response.data.postInfo === null) {
          props.history.push("/community");
        } else {
          setpostInfo(response.data.postInfo);
        }
      } else {
        props.history.push("/community");
      }
    });
  }, []);

  return (
    <>
      {postInfo._id != null ? (
        <PostDetailContent postInfo={postInfo} user={props.user} />
      ) : null}
    </>
  );
}

export default PostDetail;
