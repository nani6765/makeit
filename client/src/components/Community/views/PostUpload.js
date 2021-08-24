import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import MobileFooter from "../../HeaderAndFooter/Footer/MobileFooter.js";
import PostUploadFrom from "./content/Upload/PostUploadForm.js";

import { PostUploadDiv } from "../css/CommunityUploadCSS.js";

function PostUpload(props) {
  const [category, setcategory] = useState("");

  useEffect(() => {
    if (props.location.params === undefined) {
      props.history.push("/community");
    } else {
      setcategory(props.location.params.category);
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
        <PostUploadFrom category={category} />
      </PostUploadDiv>

      <MobileFooter />
    </>
  );
}

export default withRouter(PostUpload);
