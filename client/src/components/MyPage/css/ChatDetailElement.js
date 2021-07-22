/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ChatDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  margin-top: 10vh;
  margin-bottom: 10vh;
  ${mq[0]} {
    width: 80%;
  }
  ${mq[1]} {
    width: 100%;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
`;

const ChatGNBDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  grid-template-areas: "back profile delete";
  margin-bottom: 1rem;
  .back {
    grid-area: back;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      margin-bottom: 0.5rem;
    }
    span {
      font-size: 9px;
      font-weight: bold;
    }
  }
  .profile {
    grid-area: profile;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin-left: 0.5rem;
      margin-bottom: 0px;
    }
  }
  .delete {
    grid-area: delete;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      margin-bottom: 0.5rem;
    }
    span {
      font-size: 9px;
      font-weight: bold;
      color: #7163f7;
    }
  }
`;

const ChatContentDiv = styled.div`
  background: #f7f9fe;
  border-radius: 11px;
`;

const ChatContentDate = styled.p`
  text-align: center;
  color: #c4c4c4;
`;

const ChatForContentDiv = styled.div`
  max-height: 70vh;
  height: 70vh;
  overflow-y: auto;
  padding: 5px;
`;

const ChatMeContentGrid = css`
  max-width: 70%;
  margin-left: 30%;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto;
  grid-template-areas: ". date content";
  grid-gap: 1rem;
  margin-bottom: 1rem;
  .date {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 50px;
    margin-bottom: 0px;
    font-size: 10px;
  }
  .content {
    text-align: right;
    p {
      display: inline-block;
      background: #ffffff;
      border-radius: 30px;
      padding: 10px 15px 10px 15px;
      margin-bottom: 0px;
      white-space: pre-line;
      line-break: anywhere;
      word-break: keep-all;
      text-align: left;
    }
  }
`;

const ChatYouContentGrid = css`
  max-width: 70%;
  margin-right: 30%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: "content date .";
  grid-gap: 1rem;
  margin-bottom: 1rem;
  .date {
    grid-area: date;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    min-width: 50px;
    margin-bottom: 0px;
    font-size: 10px;
  }
  .content {
    grid-area: content;
    text-align: left;
    margin-left: 1rem;
    p {
      display: inline-block;
      background: #ffffff;
      border-radius: 30px;
      padding: 10px 15px 10px 15px;
      margin-bottom: 0px;
      white-space: pre-line;
      line-break: anywhere;
      word-break: keep-all;
      text-align: left;
    }
  }
`;

const UploadDiv = styled.div`
  background-color: #f6f2ff;
  border-radius: 0px 0px 15px 15px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "progress progress"
    "file form";
  grid-gap: 0.5rem;
  padding: 5px;
  #progress {
    grid-area: progress;
  }
  .file {
    grid-area: file;
    height: 30px;
    background-color: transparent !important;
    border: none;
    display: flex;
    height: 100%;
    align-items: center;
    i {
      color: #7163f7;
      font-weight: 900;
    }
  }
  .form {
    grid-area: form;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
    grid-template-areas: "text btn";
    grid-gap: 0.5rem;
    .text {
      grid-area: text;
      resize: none;
      border: none;
      overflow: auto;
      &:active,
      &:focus {
        border: none;
        outline: none;
      }
    }
    .btn {
      grid-area: btn;
      display: flex;
      flex-direction: column;
      padding: 0px;
      border: none;
      background-color: transparent !important;
      align-items: center;
      color: #7163f7;
      font-weight: 900;
      font-size: 12px;
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
`;
export {
  ChatDiv,
  ChatGNBDiv,
  ChatContentDiv,
  ChatContentDate,
  ChatForContentDiv,
  ChatMeContentGrid,
  ChatYouContentGrid,
  UploadDiv,
};
