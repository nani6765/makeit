/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

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

const ProtFolioDiv = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 1rem;
  p {
    margin-bottom: 0px;
  }
  span {
    margin-left: 1rem;
    font-weight: bold;
    .curentLength {
      margin-left: 0rem;
      color: red;
    }
  }
  .upload {
    display: flex;
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: 10px;
  }
  .notice {
    background: #faf5f5;
    border: 1px solid rgba(163, 136, 240, 0.44);
    box-sizing: border-box;
    border-radius: 12px;
    width: 100%;
    padding: 10px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    h3 {
      font-weight: 500;
      font-size: 25px;
      line-height: 34px;
      color: #935ea5;
      margin-bottom: 0px;
    }
    ul {
      margin-bottom: 0px;
      font-size: 12px;
    }
  }

  .videoSearch {
    display: flex;
    align-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    button {
      margin-left: 1rem;
      border-radius: 14px;
      font-weight: bold;
      display: inline-box;
      padding: 5px 10px 5px 10px;
      &.search {
        border: 1px solid #935ea5;
        background-color: #935ea5;
        color: white;
      }
    }
  }

  .showSelectedVideo {
    height: 100%;
    list-style: none;
    padding: 0px;
    li {
      display: flex;
      align-content: center;
      align-items: center;
      margin-bottom: 1rem;
      height: 100%;
      .deleteArea {
        height: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {
          color: red;
          margin-bottom: 0.5rem;
        }
      }
      img {
        width: 120px;
        height: 80px;
        margin-left: 1rem;
        margin-right: 1rem;
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
`;

const PriceDiv = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
  .inputArea {
    display: flex;
    margin-bottom: 1rem;
    align-content: center;
    align-items: center;
    label {
      margin-right: 0.5rem;
    }
    button {
      background-color: #ffffff;
      color: black;
      font-weight: bold;
      border: 1.5px solid #eaeaea;
      border-radius: 16px;
      margin-right: 1rem;
      &.btn-primary:not(:disabled):not(.disabled):active:focus,
      &.btn-primary.dropdown-toggle:focus,
      &.btn-primary.dropdown-toggle {
        background-color: #ffffff;
        color: black;
        font-weight: bold;
        border: 1.5px solid #eaeaea;
        border-radius: 16px;
        box-shadow: none;
      }
    }
    input {
      &[type="radio"] {
        margin-right: 0.5rem;
      }
      &[name="priceInput"] {
        padding: 5px;
        border-radius: 14px;
        border: 1px solid #c6c6c6;
      }
    }
    a:focus,
    a:active {
      background-color: white;
    }
  }
`;

const ConfirmDiv = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  width: 100%;
  height: auto;
  padding: 20px;
  margin-bottom: 1rem;
  .confirm {
    textarea {
      min-height: 200px;
      border-radius: 8px;
      border: 1px solid #d8d8d8;
      padding: 10px;
      width: 100%;
      resize: none;
      &:focus {
        outline: none;
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
        min-height: 200px;
        &::placeholder {
          padding-top: 100px;
        }
      }
      ${mq[1]} {
        min-height: 150px;
        &::placeholder {
          padding-top: 15px;
        }
      }
    }
  }
  .cancel {
    margin-top: 1rem;
    .content {
      text-align: center;
      background: #ffffff;
      border-radius: 8px;
      border: 1px solid #d8d8d8;
      padding: 20px;
      p {
        word-break: keep-all;
        margin-bottom: 0px;
        -ms-user-select: none;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        i {
          margin-left: 0.5rem;
          cursor: pointer;
        }
      }
    }
  }
  .FAQ {
    margin-top: 1rem;
    .btnArea {
      text-align: center;
      button {
        background: #f8f5fb;
        border: 1px solid #d8d8d8;
        border-radius: 8px;
        padding: 5px 10px 5px 10px;
      }
    }
  }
`;

export { DetailDiv, ProtFolioDiv, PriceDiv, ConfirmDiv };
