/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ContentHeading = styled.div`
  h1 {
    font-weight: bold;
    font-size: 18px;
    margin-right: 1rem;
  }
  hr {
    margin-top: 0.5rem;
    margin-botton: 0.5rem;
  }
`;

const FooterBtnDiv = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 5vh;
  margin-bottom: 5vh;
  button {
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    font-weight: bold;
    min-width: 100px;
  }
  .save {
    background: #ffffff;
    border: 1px solid #dedede;
    color: #935ea5;
    margin-right: 1rem;
  }
  .next {
    background: #935ea5;
    border: 1px solid #935ea5;
    color: white;
  }
`;

const YoutubeDiv = styled.div`
  .content {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    .background {
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      z-index: 50;
    }
    .searchDiv {
      background: #ffffff;
      box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.25);
      border-radius: 11px;
      z-index: 51;
      position: fixed;
      width: 50%;
      padding: 20px;
      .searchNotice {
        color: red;
        font-size: 10px;
        opacity: 0.8;
        margin-bottom: 0.5rem;
      }
      .inputDiv {
        display: grid;
        width: 100%;
        grid-template-columns: 8fr 2fr;
        grid-template-rows: auto;
        grid-template-areas: "input btn";
        input {
          grid-area: "input";
          &:focus,
          &:active {
            outline: none;
          }
        }
        button {
          grid-area: "btn";
          background: #935ea5;
          color: white;
          font-weight: bold;
          border: 1px solid #935ea5;
        }
      }
      .resultList {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 0px;
        li {
          margin-bottom: 1rem;
          display: flex;
          align-content: center;
          align-items: center;
          img {
            width: 60px;
            height: 60px;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
          }
          &:nth-last-of-type(1) {
            margin-bottom: 0px;
          }
          p {
            word-break: keep-all;
            font-size: 12px;
            &.channel {
              color: #c6c6c6;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
`;

export { ContentHeading, FooterBtnDiv, YoutubeDiv };
