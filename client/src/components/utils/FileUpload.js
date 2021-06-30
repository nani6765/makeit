import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import {
  DropZoneDiv,
  DropZoneContent,
  ImageArea,
} from "./FileUploadContent.js";
import axios from "axios";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function FileUpload(props) {
  const [Images, setImages] = useState([]);

  const dropHandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart.form-data" },
    };
    formData.append("file", files[0]);

    axios.post("/api/community/image", formData, config).then((response) => {
      if (response.data.success) {
        //console.log(response.data);
        setImages([
          ...Images,
          { path: response.data.filePath, key: response.data.key },
        ]);
        props.setImage([
          ...Images,
          { path: response.data.filePath, key: response.data.key },
        ]);
      } else {
        alert("파일을 저장하는 데 실패하였습니다.");
      }
    });
  };

  const deleteHandler = (image) => {
    axios
      .post("/api/community/image/delete", {
        key: image.key,
      })
      .then((response) => {
        if (response.data.success) {
          const currentIndex = Images.indexOf(image);
          let newImages = [...Images];
          newImages.splice(currentIndex, 1);
          setImages(newImages);
          props.updateImages(newImages);
        } else {
          alert("파일을 삭제하는 데 실패하였습니다.");
        }
      });
  };

  return (
    <div css={DropZoneDiv}>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()} css={DropZoneContent}>
              <input {...getInputProps()} />
              <i className="bi bi-camera"></i>
            </div>
          </section>
        )}
      </Dropzone>
      {Images[0] ? (
        <div css={ImageArea}>
          {Images.map((image, idx) => (
            <figure key={idx}>
              <img src={image.path} alt={image.key} />
              <figcaption onClick={() => deleteHandler(image)}>X</figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default FileUpload;
