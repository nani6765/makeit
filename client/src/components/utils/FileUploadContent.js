/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

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
  figure {
    position: relative;
    margin-right: 30px;
    img {
      max-width: 300px;
      height: 100%;
      margin-bottom: 10px;
    }
    figcaption {
      background-color: black;
      padding: 10px;
      border-radius: 100%;
      color: white;
      position: absolute;
      top: 8%;
      left: 85%;
      cursor: pointer;
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

export { DropZoneDiv, DropZoneContent, ImageArea };
