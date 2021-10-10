import React from "react";
import axios from "axios";
import { CommunityImageArea, PUThumbnail } from "./FileCSS.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function FileShow(props) {
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

  const CSSSelector = () => {
    switch (props.type) {
      case "Community":
        return CommunityImageArea;
      case "PUThumbnail":
        return PUThumbnail;
      default:
        return CommunityImageArea;
    }
  };

  return (
    <div css={CSSSelector}>
      {props.Images.map((image, idx) => (
        <div key={idx}>
          <img src={image.path} alt={image.key} />
          <span onClick={() => deleteHandler(image)}>삭제</span>
        </div>
      ))}
    </div>
  );
}

export default FileShow;
