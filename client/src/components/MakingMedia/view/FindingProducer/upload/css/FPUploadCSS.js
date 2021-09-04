/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const UploadForm = styled.div`
  width: 70%;
  margin: 0 auto;
  ${mq[1]} {
    width: 90%;
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
`;

const UploadHead = styled.div`
  width: 100%;
  height: auto;
  background: #faf6f6;
  div {
    width: 70%;
    margin: 0 auto;
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

const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: auto;
  grid-template-areas: "leftContent rightContent";
  grid-gap: 1rem;
  .leftContent {
    grid-area: leftContent;
  }
  .rightContent {
    grid-area: rightContent;
  }
`;

const LeftContent = styled.div`
  grid-area: leftContent;
  div {
    width: 100%;
    height: auto;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 15px;
    padding: 10px;
    h1 {
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      line-height: 33px;
      color: #702c8a;
    }
    ul {
      list-style: none;
      padding-left: 1rem;
      margin-bottom: 0px;
      li {
        margin-bottom: 0.5rem;
        cursor: pointer;
        &.active {
          font-weight: bold;
        }
      }
    }
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

const DetailDiv = styled.div`
  .categoryDiv {
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 15px;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 18px;
      margin-right: 1rem;
    }
    .dropdown {
      display: inline;
      button {
        background-color: #ffffff;
        border: 1px solid #d8d8d8;
        color: black;
        border-radius: 8px;
        &::after {
          color: #702c8a;
        }
        &:focus {
          box-shadow: none;
        }
      }
    }
  }
  .descriptionDiv {
    margin-top: 1rem;
    width: 100%;
    height: auto;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 15px;
    padding: 20px;
    .heading {
      h1 {
        font-weight: bold;
        font-size: 18px;
        margin-right: 1rem;
      }
      hr {
        margin-top: 0.5rem;
        margin-botton: 0.5rem;
      }
    }
    .body {
      width: 100%;
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

export {
  UploadForm,
  UploadHead,
  ContentDiv,
  LeftContent,
  FooterBtnDiv,
  DetailDiv,
};
