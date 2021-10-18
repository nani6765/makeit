import React, { useState, useEffect } from "react";
import Title from "../content/Title.js";
import Content from "../content/Content.js";
import BtnDiv from "../content/BtnDiv.js";

import {
  UploadDiv,
  UploadForm,
  UploadFilter,
} from "../../../css/ParticipateUploadCSS.js";

function LoUpload() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <UploadDiv>
      <UploadForm>
        <Title title={title} settitle={settitle} />
        <UploadFilter></UploadFilter>
        <Content content={content} setcontent={setcontent} />
        <BtnDiv submitHandler={submitHandler} />
      </UploadForm>
    </UploadDiv>
  );
}

export default LoUpload;
