/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const UploadHead = styled.div`
  width: 100%;
  height: auto;
  background: #faf6f6;
  div {
    width: 70%;
    margin: 0 auto;
    padding: 10px 0;
    h1 {
      font-weight: bold;
      font-size: 32px;
      line-height: 44px;
      color: #702c8a;
      span {
        margin-right: 1.5rem;
        cursor: pointer;
      }
    }
    ${mq[1]} {
      width: 90%;
    }
  }
`;

const UploadForm = styled.div`
  width: 70%;
  margin: 30px auto 10% auto;
  ${mq[1]} {
    width: 90%;
  }
  .path {
    color: #a7a5a8;
  }
  .OneLineIntroduce {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 15px;
    border: none;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    outline: none;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      text-align: center;
    }
  }
  .BtnDiv {
    display: flex;
    justify-content: flex-end;
    button {
      border-radius: 8px;
      width: 10%;
      padding: 3px;
    }
    .cancel {
      color: #935ea5;
      background: #fff;
      border: 1px solid #dedede;
    }
    .submit {
      color: #fff;
      background: #935ea5;
      margin-left: 10px;
      border: none;
    }
  }
`;

const UploadContent = styled.div`
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  .body {
    width: 100%;
    border-radius: 0px 0px 15px 15px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: column;
    textarea {
      min-height: 350px;
      border: none;
      width: 100%;
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
        padding-top: 100px;
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
    div {
      span {
        font-weight: bold;
        border-right: 1px solid black;
        padding-right: 1rem;
        margin-right: 1rem;
      }
      margin-top: 1rem;
      input {
        padding: 5px;
        border-radius: 16px;
        max-width: 100px;
        border: 1px solid rgba(117, 117, 117, 1);
        margin-bottom: 5px;
        &:focus,
        &:active {
          outline: none;
        }
      }
      p:not(.reference) {
        display: inline-block;
        background: #f7efff;
        border-radius: 16px;
        padding: 5px 10px 5px 10px;
        margin-right: 1rem;
        color: rgba(117, 117, 117, 1);
        margin-bottom: 5px;
      }
    }
  }
`;

export { UploadHead, UploadForm, UploadContent };
