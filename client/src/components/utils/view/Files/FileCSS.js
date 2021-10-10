/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const CommunityImageArea = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  div {
    width: 25%;
    margin: 20px;
    img {
      margin: 0px;
      width: 100%;
      height: 100%;
    }
    span {
      color: red;
      cursor: pointer;
      font-size: 10px;
      font-weight: bold;
    }
  }
`;

const PUThumbnail = css`
  width: 100%;
  div {
    margin: 10px;
    width: 100%;
    img {
      width: 100%;
    }
    span {
      display: none;
    }
  }
`;

const DropZoneContent = css`
  display: flex;
  font-size: 26px;
`;

export { CommunityImageArea, PUThumbnail, DropZoneContent };
