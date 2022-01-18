import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import PostUploadFrom from "./content/Upload/PostUploadForm.js";

import { PostUploadDiv } from "../css/CommunityFormCSS.js";

function PostUpload(props) {
  const [category, setcategory] = useState(
    props.history.location.state.category || ""
  );
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.userData === null) {
      props.history.push("/login");
    }
  }, []);

  return (
    <>
      <PostUploadDiv>
        <PostUploadFrom category={category} />
      </PostUploadDiv>
    </>
  );
}

export default withRouter(PostUpload);
