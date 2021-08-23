/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const RepleUploadDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  form {
    width: 100%;
    input {
      width: 100%;
      background: #ffffff;
      border: none;
      box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
        0px 9px 30px rgba(163, 1, 79, 0.05);
      border-radius: 15px;
      padding: 20px;
      margin-bottom: 15px;
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
    div {
      width: 100%;
      text-align: right;
      button {
        background: #935ea5;
        padding: 5px 10px 5px 10px;
        border: none;
        color: white;
        border-radius: 10px;
        font-weight: bold;
        i {
          margin-left: 10px;
        }
      }
    }
  }
  ${mq[1]} {
    width: 90%;
    padding: 20px;
  }
`;

const RerepleUploadDiv = styled.div`
  width: 95%;
  margin-left: 5%;
  padding: 20px;
  background: #fbf7fb;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  form {
    width: 100%;
    height: auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 50px 100px 1fr 70px 70px;
    grid-template-rows: 25px 25px auto auto;
    grid-template-areas:
      "avatar name . . ."
      "avatar inputContent inputContent inputContent inputContent"
      ". inputContent inputContent inputContent inputContent"
      ". . . cancel submit";
    .avatar {
      grid-area: avatar;
    }
    .name {
      grid-area: name;
    }
    .inputContent {
      grid-area: inputContent;
      width: 100%;
      background: #ffffff;
      border: 1.5px solid #dfdfdf;
      box-sizing: border-box;
      border-radius: 7px;
      padding: 15px;
      &:focus {
        outline: none;
      }
    }
    .cancel {
      grid-area: cancel;
      background: #ffffff;
      border: 1px solid #935ea5;
      box-sizing: border-box;
      border-radius: 10px;
      color: black;
    }
    .submit {
      grid-area: submit;
      background: #935ea5;
      border: 1px solid #935ea5;
      border-radius: 10px;
      color: white;
    }
    ${mq[1]} {
      grid-template-columns: 50px auto 1fr 50px 5px 50px;
      grid-template-rows: 50px auto auto;
      grid-gap: 0px;
      grid-template-areas:
        "avatar name . . . ."
        "inputContent inputContent inputContent inputContent inputContent inputContent"
        ". . . cancel . submit";
      .name {
        grid-area: name;
        align-self: center;
        display: flex;
        margin-bottom: 0px;
        margin-left: 10px;
      }
      .inputContent {
        padding: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .cancel {
        font-size: 12px;
      }
      .submit {
        font-size: 12px;
      }
    }
  }

  ${mq[1]} {
    width: 90%;
    padding: 10px;
  }
`;
export { RepleUploadDiv, RerepleUploadDiv };
