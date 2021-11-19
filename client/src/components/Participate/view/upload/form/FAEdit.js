import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import FAUploadFilter from "../content/filter/FAUploadFilter.js";
import Title from "../content/Title.js";
import Content from "../content/Content.js";
import BtnDiv from "../content/BtnDiv.js";
import FileUploadArea from "../../../../utils/view/Files/FileUploadArea.js";
import FileShowArea from "../../../../utils/view/Files/FileShowArea.js";

import {
  UploadHeader,
  UploadDiv,
  UploadForm,
} from "../../../css/ParticipateUploadCSS.js";
import { PartFilter } from "../../../css/ParticipateCSS.js";

import axios from "axios";

function FAEdit(props) {
  const [Gender, setGender] = useState([]);
  const [FilmType, setFilmType] = useState([]);
  const [Classification, setClassification] = useState([]);
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [Images, setImages] = useState([]);

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
      images: Images,
      url: props.postInfo.url,
      type: "FA",
    };

    axios.post("/api/participate/post/edit", body).then((response) => {
      if (response.data.success) {
        alert("게시글 수정 성공");
        props.history.push("/participate/post/" + props.postInfo.url);
      } else {
        alert("게시글 수정 실패");
        console.log(response.data.err);
      }
    });
  };

  useEffect(() => {
    let postInfo = props.postInfo;

    settitle(postInfo.title);
    setcontent(postInfo.content);
    setGender([...postInfo.gender]);
    setFilmType([...postInfo.filmType]);
    setClassification([...postInfo.classification]);
    setImages([...postInfo.images]);
    
  }, []);

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
          <PartFilter>
            {Classification[0] && (
              <FAUploadFilter
                Gender={Gender}
                setGender={setGender}
                FilmType={FilmType}
                setFilmType={setFilmType}
                Classification={Classification}
                setClassification={setClassification}
              />
            )}
          </PartFilter>
          <Content content={content} setcontent={setcontent} />
          <FileUploadArea
            Images={Images}
            setImages={setImages}
            dirURL="participate"
          />
          {Images[0] && <FileShowArea Images={Images} setImages={setImages} />}
          <BtnDiv submitHandler={submitHandler} />
        </UploadForm>
      </UploadDiv>
    </>
  );
}

export default withRouter(FAEdit);
