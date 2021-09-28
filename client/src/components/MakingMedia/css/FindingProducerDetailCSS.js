/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ReviewUploadDiv = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  form {
    border-radius: 8px;
    border: 1px solid #d8d8d8;
    padding: 0.5rem;
    textarea {
      resize: none;
      display: block;
      margin: 0 auto;
      border-radius: 8px 8px 0px 0px;
      border: none;
      border-left: 1px solid #d8d8d8;
      border-top: 1px solid #d8d8d8;
      border-right: 1px solid #d8d8d8;
      padding: 5px;
      padding-bottom: 10px;
      margin-bottom: 0px;
      overflow: hidden;
      background-color: white;
      &:focus {
        outline: none;
      }
    }
    .maxLength {
      display: block;
      width: 100%;
      height: auto;
      margin: 0 auto;
      text-align: right;
      margin-block-start: 0px;
      border-radius: 0px 0px 8px 8px;
      background-color: white;
      border: none;
      border-left: 1px solid #d8d8d8;
      border-bottom: 1px solid #d8d8d8;
      border-right: 1px solid #d8d8d8;
      padding-right: 10px;
      color: #d8d8d8;
      font-size: 10px;
    }
    .submit {
      text-align: left;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-between;
      div {
        p {
          margin-bottom: 0px;
          color: #d8d8d8;
        }
        i {
          margin-right: 5px;
          color: #ffe459;
        }
      }
      button {
        height: 50%;
        background: #935ea5;
        border: 1px solid #d8d8d8;
        border-radius: 8px;
        color: white;
        padding: 5px 10px 5px 10px;
      }
    }
  }
`;

const MenuItem = styled.li`
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 22px;
  color: #702c8a;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  &.active {
    background: #faf5f5;
  }
`;

export { ReviewUploadDiv, MenuItem };
