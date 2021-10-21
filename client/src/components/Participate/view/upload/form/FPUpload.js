import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Title from "../content/Title.js";
import FPUploadFilter from "../content/filter/FPUploadFilter.js";
import Content from "../content/Content.js";
import FileUploadArea from "../../../../utils/view/Files/FileUploadArea.js";
import FileShowArea from "../../../../utils/view/Files/FileShowArea.js";
import BtnDiv from "../content/BtnDiv.js";

import {
  UploadHeader,
  UploadDiv,
  UploadForm,
  UploadFilter,
} from "../../../css/ParticipateUploadCSS.js";

import axios from "axios";

function FPUpload(props) {
  const [FilmType, setFilmType] = useState([]);
  const [Classification, setClassification] = useState([]);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [Images, setImages] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if(!title) {
      alert("제목을 입력하세요.");
      return;
    }
    if(!FilmType.length) {
      alert("촬영 형태를 선택하세요.");
      return;
    }
    if(!Classification.length) {
      alert("분류를 선택하세요.");
      return;
    }
    if(!content) {
      alert("내용을 입력하세요.");
      return;
    }

    let body = {
      uid: props.user.uid,
      email: props.user.email,
      title: title,
      content: content,
      filmType: FilmType,
      classification: Classification,
      images: Images,
      type: "FP",
    };

    axios.post("/api/participate/postSubmit", body).then((response) => {
      if(response.data.success) {
        alert("게시글 등록 성공");
        props.history.push({pathname: "/participate", state: {category: "파트너찾기"}});
      }
      else {
        alert("게시글 등록 실패");
        console.log(response.data.err);
      }
    })
  };

  useEffect(() => {
    console.log(Images);
  }, [Images]);

  return (
    <>
    <UploadHeader>
      <div>
          <h1>
            <span onClick={() => props.history.goBack()}>&lt;</span>
            파트너 찾기
          </h1>
        </div>
    </UploadHeader>
    <UploadDiv>
      <UploadForm>
        <Title title={title} settitle={settitle} />
        <UploadFilter>
          <FPUploadFilter FilmType={FilmType} setFilmType={setFilmType} Classification={Classification} setClassification={setClassification} />
        </UploadFilter>
        <Content content={content} setcontent={setcontent} />
        <FileUploadArea Images={Images} setImages={setImages} />
        {
          Images[0] && <FileShowArea Images={Images} setImages={setImages} />
        }
        <BtnDiv submitHandler={submitHandler} />
      </UploadForm>
    </UploadDiv>
    </>
  );
}

export default withRouter(FPUpload);
