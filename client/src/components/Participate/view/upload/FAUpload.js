import React, { useState, useEffect } from "react";
import Title from "./content/Title.js";
import Content from "./content/Content.js";
import BtnDiv from "./content/BtnDiv.js";

import {
  UploadDiv,
  UploadForm,
  UploadFilter,
} from "../../css/ParticipateUploadCSS.js";

function FAUpload(props) {
  return (
    <UploadDiv>
      <UploadForm>
        <Title />
        <UploadFilter></UploadFilter>
        <Content />
        <BtnDiv />
      </UploadForm>
    </UploadDiv>
  );
}

export default FAUpload;
