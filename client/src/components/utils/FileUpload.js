import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

function FileUpload(props) {
  const DropZoneDiv = css`
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: 10px;
  `;

  const DropZoneContent = css`
    display: flex;
    font-size: 26px;
  `;

  const ImageArea = css`
    display: flex;
    width: 100%;
    max-width: 900px;
    height: 310px;
    overflow-x: scroll;
    overflow-y: hidden;
    align-self: center;
    margin-left: 30px;
    div {
      img {
        width: 300px;
        height: 300px;
        minwidth: 300px;
        margin-bottom: 10px;
      }
    }
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 15px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
    ${mq[0]} {
      height: 210px;
      margin-left: 20px;
      div {
        img {
          width: 200px;
          height: 200px;
          minwidth: 200px;
          margin-bottom: 10px;
        }
      }
    }
    ${mq[1]} {
      height: 110px;
      margin-left: 10px;
      div {
        img {
          width: 100px;
          height: 100px;
          minwidth: 100px;
          margin-bottom: 10px;
        }
      }
    }
  `;

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
        props.updateImages([
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
            <div key={idx} onClick={() => deleteHandler(image)}>
              <img src={image.path} alt={image.key} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default FileUpload;
