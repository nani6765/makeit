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
