import React, { useState, useEffect } from "react";
import FAUploadFilter from "../content/FAUploadFilter.js";
import Title from "../content/Title.js";
import Content from "../content/Content.js";
import BtnDiv from "../content/BtnDiv.js";

import {
  UploadHeader,
  UploadDiv,
  UploadForm,
  UploadFilter,
} from "../../../css/ParticipateUploadCSS.js";

function FAUpload(props) {
  const [Gender, setGender] = useState([]);
  const [FilmType, setFilmType] = useState([]);
  const [Classification, setClassification] = useState([]);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!Gender.length) {
      alert("성별을 선택하세요.");
      return;
    }
    if (!FilmType.length) {
      alert("촬영 형태를 선택하세요.");
      return;
    }
    if (!Classification.length) {
      alert("분류를 선택하세요.");
      return;
    }
    if (!content) {
      alert("내용을 입력하세요.");
      return;
    }

    let body = {
      uid: props.user.uid,
      email: props.user.email,
      title: title,
      content: content,
      gender: Gender,
      filmType: FilmType,
      classification: Classification,
    };
  };

  return (
    <>
      <UploadHeader>
        <div>
          <h1>
            <span onClick={() => props.history.goBack()}>&lt;</span>
            배우 찾기
          </h1>
        </div>
      </UploadHeader>
      <UploadDiv>
        <UploadForm>
          <Title title={title} settitle={settitle} />
          <UploadFilter>
            <FAUploadFilter
              Gender={Gender}
              setGender={setGender}
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
    </>
  );
}

export default FAUpload;