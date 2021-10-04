/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ShareVideoContentDiv = styled.div`
  margin-bottom: 1rem;
  .videoArea {
    width: 50%;
    .heading {
      width: 100%;
      display: flex;
      align-content: center;
      justify-content: space-between;
      align-items: center;
      p {
        margin-bottom: 0px;
        span {
          margin-left: 1rem;
          .curentLength {
            margin-left: 0rem;
            color: red;
          }
        }
      }
      button {
        background: #935ea5;
        border-radius: 10px;
        color: white;
        border: none;
        padding: 5px;
      }
    }
    .upload {
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: 100%;
      height: 200px;
      background: #f0f0f0;
      border: 1px solid #b9b9b9;
      box-sizing: border-box;
      border-radius: 15px;
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      i {
        color: #6b6c6c;
      }
    }
    .thumbnail {
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: 100%;
      height: 200px;
    }
  }
  .contentArea {
    width: 100%;
    height: auto;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 19px;
    padding: 20px;
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
    .tagArea {
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
      p {
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

export default ShareVideoContentDiv;
