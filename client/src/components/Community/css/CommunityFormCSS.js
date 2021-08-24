/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const FormDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  input {
    width: 100%;
    resize: none;
    border-radius: 15px;
    border: none;
    padding: 10px 20px 10px 20px;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    &::placeholder {
      font-weight: 300;
      font-size: 12px;
      text-align: center;
      color: #9f9f9f;
    }
    &:focus {
      outline: none;
    }
  }
  .filterDiv {
    border-radius: 15px 15px 0px 0px;
    margin-top: 30px;
    background: #ede7f6;
    padding: 20px;
    border: none;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    height: auto;
  }
  .content {
    min-height: 500px;
    padding: 20px;
    border: none;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 0px 0px 15px 15px;
    resize: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      word-break: keep-all;
      font-weight: 300;
      font-size: 12px;
      color: #9f9f9f;
      text-align: center;
      padding-top: 150px;
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 15px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: #c6c6c6;
      border-radius: 15px;
      box-shadow: inset 0px 0px 5px white;
    }
    ${mq[0]} {
      min-height: 400px;
      &::placeholder {
        padding-top: 100px;
      }
    }
    ${mq[1]} {
      min-height: 300px;
      &::placeholder {
        padding-top: 15px;
      }
    }
  }
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  button {
    margin-left: 20px;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
  }
`;

const SubmitBtn = css`
  color: #ffffff;
  box-sizing: border-box;
  background: #935ea5;
  border: 1px solid #935ea5;
`;

const CancelBtn = styled.button`
  background: #ffffff;
  color: #935ea5;
  border: 1px solid #dedede;
`;

const DropZoneDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  margin-left: 10px;
`;

const DropZoneInnerDiv = styled.div`
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

export {
  FormDiv,
  BtnDiv,
  SubmitBtn,
  CancelBtn,
  DropZoneDiv,
  DropZoneInnerDiv,
  DropZoneContent,
  ImageArea,
};
