/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled/macro";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const DropZoneDiv = css`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  margin-left: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const DropZoneContent = css`
  display: flex;
  font-size: 26px;
`;

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

export { DropZoneDiv, DropZoneContent, CommunityImageArea, PUThumbnail };
