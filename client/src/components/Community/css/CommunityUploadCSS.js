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

const Empty = styled.div``;
export { RepleUploadDiv, Empty };
