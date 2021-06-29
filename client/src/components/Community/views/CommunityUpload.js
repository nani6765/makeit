import React, { useState, useEffect } from "react";
import { UploadDiv } from "../css/CommunityElement.js";
import UploadForm from "./upload/UploadForm.js";

function CommunityUpload(props) {
  const [category, setcategory] = useState("");

  useEffect(() => {
    if (props.location.params === undefined) {
      props.history.push("/community");
    } else {
      setcategory(props.location.params.category);
    }
  }, []);

  return (
    <>
      <UploadDiv>
        <UploadForm user={props.user.userData} category={category} />
      </UploadDiv>
    </>
  );
}

export default CommunityUpload;
