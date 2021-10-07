/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ShareVideoContentDiv = styled.div`
  margin-bottom: 1rem;
  .setShareOpt {
    display: flex;
    input {
      margin-left: 1rem;
      margin-right: 0.5rem;
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
  }
`;

const PublicArea = styled.div`
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
    height: 300px;
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
`;

const PrivateArea = styled.div`
  display: grid;
  grid-tempalte-rows: auto auto auto;
  grid-template-columns: 2fr 8fr;
  grid-template-areas:
    " urlLabel urlInput "
    " imgLabel imgUpload "
    " . imgShow ";
  grid-gap: 1rem;
  .urlLabel {
    grid-area: urlLabel;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-bottom: 0px;
  }
  .urlInput {
    display: flex;
    align-items: center;
    grid-area: urlInput;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 1px 5px rgba(178, 3, 108, 0.03),
      0px 4px 15px rgba(163, 1, 79, 0.05);
    border-radius: 15px;
    border: none;
    outline: none;
    padding: 10px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      text-align: center;
    }
  }
  .imgLabel {
    grid-area: imgLabel;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-bottom: 0px;
    span {
      font-size: 10px;
    }
  }
  .imgUpload {
    grid-area: imgUpload;
  }
  .imgShow {
    grid-area: imgShow;
    img {
      width: 100%;
      height: auto;
    }
    margin-bottom: 1rem;
  }
`;

export { ShareVideoContentDiv, PublicArea, PrivateArea };
