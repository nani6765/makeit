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
} from "../../../css/ParticipateUploadCSS.js";
import { PartFilter } from "../../../css/ParticipateCSS.js";

import axios from "axios";

function FPEdit(props) {
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
      filmType: FilmType,
      classification: Classification,
      images: Images,
      url: props.postInfo.url,
      type: "FP",
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
            파트너 찾기
          </h1>
        </div>
      </UploadHeader>
      <UploadDiv>
        <UploadForm>
          <Title title={title} settitle={settitle} />
          <PartFilter>
            {Classification[0] && (
              <FPUploadFilter
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

export default withRouter(FPEdit);
