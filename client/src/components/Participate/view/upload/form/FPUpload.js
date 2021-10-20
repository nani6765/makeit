import React, { useState, useEffect } from "react";
import Title from "../content/Title.js";
import Content from "../content/Content.js";
import BtnDiv from "../content/BtnDiv.js";
import FPUploadFilter from "../content/FPUploadFilter.js";
import {
  UploadDiv,
  UploadForm,
  UploadFilter,
} from "../../../css/ParticipateUploadCSS.js";

function FPUpload() {
  const [FilmType, setFilmType] = useState([]);
  const [Classification, setClassification] = useState([]);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <UploadDiv>
      <UploadForm>
        <Title title={title} settitle={settitle} />
        <UploadFilter>
          <FPUploadFilter
            FilmType={FilmType}
            setFilmType={setFilmType}
            Classification={Classification}
            setClassification={setClassification}
          />
        </UploadFilter>
        <Content content={content} setcontent={setcontent} />
        <BtnDiv submitHandler={submitHandler} />
      </UploadForm>
    </UploadDiv>
  );
}

export default FPUpload;
