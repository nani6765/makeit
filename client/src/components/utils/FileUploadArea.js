import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { DropZoneDiv, DropZoneContent } from "./FileUploadContent.js";
import axios from "axios";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function FileUploadArea(props) {
  const dropHandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart.form-data" },
    };
    formData.append("file", files[0]);

    axios.post("/api/community/image", formData, config).then((response) => {
      if (response.data.success) {
        //console.log(response.data);
        props.setImages([
          ...props.Images,
          { path: response.data.filePath, key: response.data.key },
        ]);
      } else {
        alert("파일을 저장하는 데 실패하였습니다.");
      }
    });
  };

  return (
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
  );
}

export default FileUploadArea;