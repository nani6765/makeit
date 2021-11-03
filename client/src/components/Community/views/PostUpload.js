import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import PostUploadFrom from "./content/Upload/PostUploadForm.js";

import { PostUploadDiv } from "../css/CommunityFormCSS.js";

function PostUpload(props) {
  const [category, setcategory] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.userData === null) {
      props.history.push("/login");
    }
  }, []);

  function BackHandler() {
    props.history.push({
      pathname: "/community",
      state: { category: category },
    });
  }

  return (
    <>
      <PostUploadDiv>
        <PostUploadFrom />
      </PostUploadDiv>
    </>
  );
}

export default withRouter(PostUpload);
