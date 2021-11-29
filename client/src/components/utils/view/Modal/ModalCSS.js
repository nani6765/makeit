/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ModalDiv = styled.div`
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  position: absolute;
  right: 10px;
  top: 20px;
  min-width: 150px;
  min-height: 70px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  div {
    button {
      width: 100%;
      margin: 0;
      padding: 0;
      border: none;
      text-aling: center;
      background-color: rgba(255, 255, 255, 1);
    }
    .edit {
      i {
        margin-right: 1rem;
      }
    }
    .delete {
      margin-top: 10px;
      display: inline;
      color: #d70000;
      i {
        margin-right: 1rem;
      }
    }
  }
`;

const DeleteModalDiv = styled.div`
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
    .gridDiv {
      background: #ffffff;
      box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.25);
      border-radius: 11px;
      display: grid;
      grid-template-columns: 1fr 8fr 1fr;
      grid-gap: 5px;
      grid-template-rows: auto auto auto;
      padding: 20px;
      grid-template-areas:
        ". title delete"
        ". desc ."
        ". buttonDiv .";
      z-index: 51;
      position: fixed;
      .title {
        grid-area: title;
        text-align: center;
        color: #000000;
        font-weight: bold;
      }
      .delete {
        grid-area: delete;
        text-align: center;
        color: #000000;
        padding: 5px;
        cursor: pointer;
      }
      .desc {
        grid-area: desc;
        color: #000000;
        line-height: 25px;
      }
      .buttonDiv {
        margin-top: 20px;
        grid-area: buttonDiv;
        text-align: center;
        button {
          box-sizing: border-box;
          border-radius: 16px;
          padding: 5px 10px 5px 10px;
          width: auto;
          &.cancel {
            background: #ffffff;
            border: 1.5px solid #000000;
            color: black;
            margin-right: 20px;
          }
          &.delete {
            background: #d70000;
            border: 1.5px solid #d70000;
            color: white;
          }
        }
      }
    }
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
    .linkDiv {
      background: #ffffff;
      box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.25);
      border-radius: 11px;
      z-index: 51;
      position: fixed;
      width: 50%;
      padding: 20px;

      display: grid;
      grid-template-rows: auto auto auto auto;
      grid-template-columns: 2fr 3fr 3fr 2fr;
      grid-template-areas:
        " urlLabel urlInput urlInput urlInput "
        " imgLabel imgUpload imgUpload imgUpload "
        " . imgShow imgShow . "
        " . . . btnDiv ";
      
      ${mq[0]} {
        width: 70%;
        grid-template-columns: 2fr 3fr 2fr 3fr;
        grid-template-areas:
          " urlLabel urlInput urlInput urlInput "
          " imgLabel imgUpload imgUpload imgUpload "
          " . imgShow imgShow . "
          " . . . btnDiv ";

      }
      ${mq[0]} {
        width: 90%;
        grid-template-rows: auto auto auto auto auto;
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
        grid-template-areas:
          " urlLabel urlLabel . . ."
          " urlInput urlInput urlInput urlInput urlInput "
          " imgLabel imgLabel imgUpload imgUpload imgUpload "
          " . imgShow imgShow imgShow . "
          " . . btnDiv btnDiv btnDiv ";
        font-size: 12px;

      }
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
          max-height: 100%;
        }
        max-height: 50vh;
        margin-bottom: 1rem;
      }
      .btnDiv {
        grid-area: btnDiv;
        button {
          background: #935ea5;
          color: white;
          font-weight: bold;
          border: 1px solid #935ea5;
          padding: 0.5rem 1rem;
          margin-left: 0.5rem;
          border-radius: 12px;
        }
      }
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
          span {
            width: auto;
            color: #c6c6c6;
            font-size: 6px;
            white-space: nowrap;
            cursor: pointer;
            &:hover,
            &:active {
              color: black;
            }
          }
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

export { ModalDiv, DeleteModalDiv, YoutubeDiv };
