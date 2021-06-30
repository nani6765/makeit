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
  overflow-x: scroll;
  overflow-y: hidden;
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
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
    margin-right: 30px;
    img {
      max-width: 300px;
      width: 100%;
      height: auto;
      margin-bottom: 10px;
      margin-left: 10px;
    }
    figcaption {
      background-color: black;
      padding: 10px;
      border-radius: 100%;
      color: white;
      position: absolute;
      top: 5%;
      right: 5%;
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
    width: 80%;
    margin-left: 10px;
    flex-direction: column;
    height: auto;
    figure {
      position: relative;
      margin-right: 0px;
      img {
        height: 100%;
        margin: 0px;
      }
      figcaption {
        background-color: black;
        padding: 10px;
        border-radius: 100%;
        color: white;
        position: absolute;
        top: 5%;
        right: 5%;
        cursor: pointer;
      }
    }
  }
`;

export { DropZoneDiv, DropZoneContent, ImageArea };
