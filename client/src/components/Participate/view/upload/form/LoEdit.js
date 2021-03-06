import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Title from "../content/Title.js";
import Content from "../content/Content.js";
import BtnDiv from "../content/BtnDiv.js";
import LoUploadFilter from "../content/filter/LoUploadFilter.js";

import FileShowArea from "../../../../utils/view/Files/FileShowArea.js";
import FileUploadArea from "../../../../utils/view/Files/FileUploadArea.js";
import {
  UploadDiv,
  UploadForm,
  ThumbnailArea,
} from "../../../css/ParticipateUploadCSS.js";
import { PartFilter } from "../../../css/ParticipateUploadCSS.js";

import axios from "axios";

function LoEdit(props) {
  const [Category, setCategory] = useState("");
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [Thumbnail, setThumbnail] = useState([]);
  const [DeleteThumbnail, setDeleteThumbnail] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!Thumbnail) {
      alert("썸네일을 등록하세요.");
      return;
    }
    if (!Category) {
      alert("카테고리를 선택하세요.");
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
      subCategory: Category,
      thumbnail: Thumbnail,
      deleteThumbnail: DeleteThumbnail,
      url: props.postInfo.url,
      type: "Lo",
    };

    axios.post("/api/participate/post/Edit", body).then((response) => {
      if (response.data.success) {
        alert("게시글 수정 성공");
        props.history.push("/participate/post/"+props.postInfo.url);
      } else {
        alert("게시글 수정 실패");
        console.log(response.data.err);
      }
    });
  };

  useEffect(() => {
    let postInfo = props.postInfo;

    setCategory(postInfo.subCategory);
    settitle(postInfo.title);
    setcontent(postInfo.content);
    setThumbnail([...postInfo.thumbnail]);
    setDeleteThumbnail([...postInfo.thumbnail]);
}, []);

  return (
    <UploadDiv>
      <UploadForm>
        <Title title={title} settitle={settitle} />
        <ThumbnailArea>
          <p>
            썸네일등록(필수)
            <span>
              <span className="curentLength">{Thumbnail.length}</span>/1
            </span>
          </p>
          <div className="upload">
            <FileUploadArea
              Images={Thumbnail}
              setImages={setThumbnail}
              type="thumbnail"
              dirURL="participate"
            />
            {Thumbnail[0] ? (
              <FileShowArea
                Images={Thumbnail}
                setImages={setThumbnail}
                type="PUThumbnail"
                dirURL="participate"
              />
            ) : null}
          </div>
        </ThumbnailArea>

        <PartFilter>
          { Category && <LoUploadFilter Category={Category} setCategory={setCategory} /> }
        </PartFilter>
        <Content content={content} setcontent={setcontent} />
        <BtnDiv submitHandler={submitHandler} />
      </UploadForm>
    </UploadDiv>
  );
}

export default withRouter(LoEdit);
