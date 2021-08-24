import React from "react";
import axios from "axios";

import { ImageArea } from "../../../../css/CommunityFormCSS.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function FileShowArea(props) {
  const deleteHandler = (image) => {
    axios
      .post("/api/community/image/delete", {
        key: image.key,
      })
      .then((response) => {
        if (response.data.success) {
          const currentIndex = props.Images.indexOf(image);
          let newImages = [...props.Images];
          newImages.splice(currentIndex, 1);
          props.setImages(newImages);
        } else {
          alert("파일을 삭제하는 데 실패하였습니다.");
        }
      });
  };
  return (
    <div css={ImageArea}>
      {props.Images.map((image, idx) => (
        <figure key={idx}>
          <img
            src={image.path}
            alt={image.key}
            style={{ marginLeft: "10px" }}
          />
          <figcaption onClick={() => deleteHandler(image)}>X</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default FileShowArea;
