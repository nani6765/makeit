/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const CommunityDiv = styled.div``;

const UploadDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
  ${mq[1]} {
    width: 90%;
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
`;

const FormDiv = styled.form`
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
    margin-top: 30px;
    padding: 20px;
    border: none;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 15px;
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

const GNBDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
  ${mq[1]} {
    width: 90%;
  }
`;

const GNBBtnDiv = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: space-evenly;
  ${mq[1]} {
    display: none;
  }
`;

const GNBMobileDiv = styled.div`
  display: none;
  ${mq[1]} {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
  }
`;

const GNBMobileContentDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const GNBCategoryBtn = styled.button`
  padding: 5px 10px 5px 10px;
  background: #ffffff;
  color: #702c8a;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 22px;
  font-size: 14px;
  ${mq[0]} {
    padding: 5px 10px 5px 10px;
    font-size: 12px;
  }
  ${mq[1]} {
    padding: 2px 5px 2px 5px;
    font-size: 10px;
  }
`;

const DropZoneDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  margin-left: 10px;
`;

export {
  CommunityDiv,
  UploadDiv,
  FormDiv,
  BtnDiv,
  SubmitBtn,
  CancelBtn,
  GNBDiv,
  GNBBtnDiv,
  GNBMobileDiv,
  GNBMobileContentDiv,
  GNBCategoryBtn,
  DropZoneDiv,
};
