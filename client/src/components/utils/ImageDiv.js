import React, { useEffect } from "react";
import { ImageArea } from "./FileUploadContent.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function ImageDiv(props) {
  useEffect(() => {
    console.log("Img Div: ", props);
  }, []);

  return (
    <div css={ImageArea}>
      {props.Images.map((image, idx) => (
        <figure key={idx}>
          <img
            src={image.path}
            alt={image.key}
            style={{ marginLeft: "10px" }}
          />
          <figcaption onClick={() => props.deleteHandler(image)}>X</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default ImageDiv;
