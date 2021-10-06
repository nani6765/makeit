/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const DetailDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
  ${mq[1]} {
    width: 90%;
  }
`;

const DetailContentDiv = styled.div`
  .path {
    margin-top: 30px;
    color: #a7a5a8;
  }
  .container {
    width: 100%;
    padding: 20px 30px;
    margin: 0px;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    
    .profile {
      display: flex;
      div {
        display: inline-block;
        margin-right: 5px;
        p {
          margin-bottom: 0px;
        }
      }
    }
    .hambuc {
      grid-area: hambuc;
      color: #c4c4c4;
      float: right;
      margin-top: -45px;
      position: relative;
      text-align: center;
      i {
        cursor: pointer;
      }
    }
    .content {
      margin: 50px 0;
      padding: 10px;
      white-space: pre;
    }
  }
`;

const ModalDiv = styled.div`
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  position: absolute;
  right: -10px;
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

const DetailFilterDiv = styled.div`
  background: #EDE7F6;
  padding: 20px;
  margin-top: 15px;
  border-radius: 18px;
  .filterTitle {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    width: 10%;
    text-align: center;
  }
  .filterContent {
    display: inline-block;
    padding: 0.5rem;
    background: #fff;
    text-align: center;
    border: 1px solid #D8D8D8;
    border-radius: 8px;
  }
  .line {
    width: 90%;
  }
  .halfLine {
    width: 37.5%;
    margin-right: 2.5%;
  }
  .bold {
    font-weight: bold;
    font-size: 18px;
  }
  .price {
    display: inline-block;
    width: 40%;
    div {
      width: 35%;
      margin: 0px 2.5%;
    }
    p {
      display: inline-block;
      width: 10%;
      text-align: center;
    }
  }
  .checkbox {
    display: inline-block;
    width: 40%;
    div {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      background: rgba(179, 82, 255, 0.12);
      border: 2px solid rgba(179, 82, 255, 0.24);
      border-radius: 4px;
      margin-left: 2.5%;
    }
    .checked {
      background: #9B51E0;
    }
    p {
      display: inline-block;
    }
  }
`;

const NoQuotationDiv = styled.div`
  margin-top: 50px;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    p {
      color: #6F6767;
    }
    button {
      background: #935EA5;
      color: #fff;
      border-radius: 10px;
      border: none;
      padding: 10px 15px;
    }
  }
`;

export { DetailDiv, DetailContentDiv, ModalDiv, DeleteModalDiv, DetailFilterDiv, NoQuotationDiv };