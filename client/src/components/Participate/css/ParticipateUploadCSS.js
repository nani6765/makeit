/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const UploadHeader = styled.div`
  width: 100%;
  height: auto;
  background: #faf6f6;
  div {
    width: 60%;
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

const UploadDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
  ${mq[1]} {
    width: 90%;
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
`;

const UploadForm = styled.div`
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
  .btnDiv {
    margin-top: 1rem;
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
    .cancel {
      background: #ffffff;
      color: #935ea5;
      border: 1px solid #dedede;
    }
    .submit {
      color: #ffffff;
      box-sizing: border-box;
      background: #935ea5;
      border: 1px solid #935ea5;
    }
  }
`;

const UploadFilter = styled.div`
  border-radius: 15px 15px 0px 0px;
  margin-top: 30px;
  background: #ede7f6;
  border: none;
  height: auto;
  padding: 20px 20px 10px 20px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .select {
    display: flex;
    .labelArea {
      width: 20%;
      display: flex;
      align-content: center;
      justify-content: space-evenly;
      align-items: flex-start;
      user-select: none;
      span {
        font-weight: bold;
        margin: 0px;
      }
    }
    .contentArea {
      display: flex;
      width: 80%;
      flex-wrap: wrap;
      div {
        width: auto;
        margin-bottom: 10px;
        input {
          display: none;
        }
        label {
          margin: 0px;
          user-select: none;
        }
        input + label:before {
          content: "";
          display: inline-flex;
          width: 1rem;
          height: 1rem;
          background: rgba(179, 82, 255, 0.12);
          border: 2px solid rgba(179, 82, 255, 0.24);
          border-radius: 4px;
          margin: 0 0.5rem 0 1.5rem;
          cursor: pointer;
        }
        input:checked + label:before {
          content: "✓";
          color: white;
          background: #9b51e0;
          align-items: center;
          align-content: center;
          justify-content: center;
        }
      }
    }
    &:nth-last-of-type(1) {
      margin-bottom: 0px;
    }
  }
`;

const ThumbnailArea = styled.div`
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  p {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    .curentLength {
      color: red;
      font-weight: bold;
    }
  }
  .upload {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: 10px;
  }
`;

export { UploadHeader, UploadDiv, UploadForm, UploadFilter, ThumbnailArea };
