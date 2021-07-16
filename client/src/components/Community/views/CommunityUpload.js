import React, { useState, useEffect } from "react";
import { UploadDiv } from "../css/CommunityElement.js";
import UploadForm from "./upload/UploadForm.js";
import { LabelDiv, UploadLavelDiv } from "./main/GNB/GNBContent.js";
import { withRouter } from "react-router-dom";

function CommunityUpload(props) {
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
      <LabelDiv
        style={{
          backgroundColor: "#FAF6F6",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <UploadLavelDiv>
          <p>
            <span
              onClick={() => BackHandler()}
              style={{ marginRight: "10px", cursor: "pointer" }}
            >
              &lt;
            </span>
            {category}
          </p>
        </UploadLavelDiv>
      </LabelDiv>

      <UploadDiv>
        <UploadForm category={category} />
      </UploadDiv>
    </>
  );
}

export default withRouter(CommunityUpload);
