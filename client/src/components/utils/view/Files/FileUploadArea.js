import React from "react";
import Dropzone from "react-dropzone";
import { DropZoneContent } from "./FileCSS.js";
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

    axios.post("/api/util/image/upload", formData, config).then((response) => {
      if (response.data.success) {
        //console.log(response.data);
        if (props.type === "thumbnail") {
          props.setImages([
            { path: response.data.filePath, key: response.data.key },
          ]);
        } else {
          props.setImages([
            ...props.Images,
            { path: response.data.filePath, key: response.data.key },
          ]);
        }
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
            <i className="bi bi-camera" style={{ cursor: "pointer" }}></i>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default FileUploadArea;
