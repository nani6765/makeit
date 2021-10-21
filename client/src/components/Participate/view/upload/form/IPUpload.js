import React, { useState, useEffect } from "react";
import Title from "../content/Title.js";
import Content from "../content/Content.js";
import BtnDiv from "../content/BtnDiv.js";
import IPUploadFilter from "../content/IPUploadFilter.js";

import FileShowArea from "../../../../utils/view/Files/FileShowArea.js";
import FileUploadArea from "../../../../utils/view/Files/FileUploadArea.js";
import {
  UploadDiv,
  UploadForm,
  UploadFilter,
  ThumbnailArea,
} from "../../../css/ParticipateUploadCSS.js";

function IPUpload() {
  const [Category, setCategory] = useState("");
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [Thumbnail, setThumbnail] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

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
            />
            {Thumbnail[0] ? (
              <FileShowArea
                Images={Thumbnail}
                setImages={setThumbnail}
                type="PUThumbnail"
              />
            ) : null}
          </div>
        </ThumbnailArea>

        <UploadFilter>
          <IPUploadFilter Category={Category} setCategory={setCategory} />
        </UploadFilter>
        <Content content={content} setcontent={setcontent} />
        <BtnDiv submitHandler={submitHandler} />
      </UploadForm>
    </UploadDiv>
  );
}

export default IPUpload;
