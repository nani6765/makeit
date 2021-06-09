import React from "react";
import { UploadDiv } from "../css/CommunityElement.js";
import UploadForm from "./UploadForm.js";

function CommunityUpload(props) {
  return (
    <>
      <UploadDiv>
        <UploadForm user={props.user.userData} />
      </UploadDiv>
    </>
  );
}

export default CommunityUpload;
