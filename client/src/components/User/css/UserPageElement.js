/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

//const breakpoints = [1200, 576];
const breakpoints = [1920, 1440, 1024, 960, 576, 480, 360, 320];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const DivCSS = css`
  text-align: center;
`;

const BoxDivCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: auto;
  min-height: 500px;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
  ${mq[1]} {
    width: 60%;
  }
  ${mq[2]} {
    width: 70%;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
  ${mq[4]} {
    width: 95%;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
`;

const Logo = css`
  width: inherit;
  text-align: center;
  p {
    margin-left: 10px;
    font-weight: bold;
    font-style: normal;
    font-size: 2rem;
    color: #2e2e2e;
    line-height: 1.5rem;
    ${mq[2]} {
      font-size: 1.5rem;
    }
  }
`;

const FormDivCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin-top: 2rem;
  input {
    margin-top: 1rem;
    width: 100%;
    padding: 15px 10px;
    background-color: transparent;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 5px;
    &::placeholder {
      color: #c4c4c4;
      ${mq[4]} {
        font-size: 14px;
      }
    }
  }
  button {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    background: #5a278b;
    border: 1px solid #5a278b;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    padding: 15px 10px;
    &:disabled {
      opacity: 0.5;
    }
  }
  ${mq[4]} {
    width: 70%;
  }
`;

const RegisterFormDiv = css`
  display: grid;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas:
    "name nameInput ."
    "email emailInput emailBtn"
    "checkEmail checkEmail checkEmail"
    "nickname nicknameInput nicknameBtn"
    "pw pwInput ."
    "checkPW checkPWInput ."
    "footer footer footer"
    ". submitBtn .";
  width: 70%;
  margin: 0 auto;
  margin-top: 3rem !important;

  label {
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2rem;
    word-break: keep-all;
    text-align: left;
  }
  input {
    border: 1.5px solid #b1b1b1;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      outline: 1px solid #61057d;
    }
  }
  button {
    border: 1.5px solid #61057d;
    box-sizing: border-box;
    border-radius: 5px;
    background: #fff;
    color: #61057d;
    font-weight: bold;
    margin-bottom: 2rem !important;
    margin: 0 auto;
    width: 70%;
    ${mq[2]} {
      width: 80%;
      font-size: 12px;
    }
    ${mq[4]} {
      font-size: 10px;
      width: 90%;
      mar4in-left: 10%;
      margin-right: 0;
      word-break: keep-all;
    }
  }
  .name {
    grid-area: name;
  }
  .nameInput {
    grid-area: nameInput;
  }
  .email {
    grid-area: email;
  }
  .emailInput {
    grid-area: emailInput;
  }
  .emailBtn {
    grid-area: emailBtn;
    &:disabled {
      border: 1.5px solid #c4c4c4;
      color: #c4c4c4;
    }
  }
  .checkEmail {
    grid-area: checkEmail;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: ". checkEmailInput checkEmailBtn";
    .checkEmailInput {
      grid-area: checkEmailInput;
      border: 1.5px solid #b1b1b1;
      box-sizing: border-box;
      border-radius: 5px;
      margin-bottom: 2rem;
      &:focus-within,
      &:active {
        outline: 1px solid #61057d;
      }
      input {
        border: none;
        margin: 0;
        width: 80%;
        &:focus,
        &:active {
          outline: none;
        }
      }
    }
    .checkEmailBtn {
      grid-area: checkEmailBtn;
    }
  }

  .nickname {
    grid-area: nickname;
  }
  .nicknameInput {
    grid-area: nicknameInput;
  }
  .nicknameBtn {
    grid-area: nicknameBtn;
  }
  .pw {
    grid-area: pw;
  }
  .pwInput {
    grid-area: pwInput;
  }
  .checkPW {
    grid-area: checkPW;
  }
  .checkPWInput {
    grid-area: checkPWInput;
    display: flex;
    justify-content: flex-start;
  }
  .footer {
    border-top: 1px solid #b1b1b1;
    border-bottom: 1px solid #b1b1b1;
    padding: 3rem 0;
    grid-area: footer;
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 1rem 0;
    grid-template-areas:
      "label agree ."
      "label service1 more1"
      "label service2 ."
      "label service3 more3"
      "label service4 more4";
    ${mq[6]} {
      grid-template-columns: 1fr 2.5fr 1.5fr;
    }
    label {
      margin-bottom: 0px;
    }
    .service {
      text-align: left;
      p {
        display: flex;
        align-content: center;
        align-items: center;
        cursor: pointer;
        i {
          margin-right: 0.5rem;
          color: #b1b1b1;
          font-size: 1.5rem;
        }
        .fill {
          color: #61057d;
        }
      }
      &:nth-of-type(1) {
        grid-area: agree;
      }

      &:nth-of-type(2) {
        grid-area: service1;
      }

      &:nth-of-type(3) {
        grid-area: service2;
      }

      &:nth-of-type(4) {
        grid-area: service3;
      }
      &:nth-of-type(5) {
        grid-area: service4;
      }
    }
    .more {
      display: flex;
      align-items: center;

      width: 100%;
      margin: 0 auto;

      font-weight: bold;
      color: #61057d;
      cursor: pointer;

      &:nth-of-type(1) {
        grid-area: more1;
      }
      &:nth-of-type(2) {
        grid-area: more3;
      }
      &:nth-of-type(3) {
        grid-area: more4;
      }
    }
  }
  .submitBtn {
    grid-area: submitBtn;
    width: 100%;
    margin-top: 2rem;
    padding: 1rem;
    color: #fff;
    background: #61057d;
    border: 1px solid #61057d;
    box-sizing: border-box;
    border-radius: 5px;
    ${mq[4]} {
      margin: 2rem auto 0 auto;
      width: 70%;
      word-break: keep-all;
    }
  }
  ${mq[2]} {
    width: 80%;
    font-size: 14px;
  }
  ${mq[4]} {
    width: 90%;
    font-size: 12px;
  }
  ${mq[6]} {
    grid-template-columns: 1fr 3fr 1fr;
  }
`;

const CompeleteDiv = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  h1 {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  button {
    background: #702c8a;
    border-radius: 12px;
    font-size: 24px;
    padding: 10px 15px 10px 15px;
    color: white;
  }
`;

const passwordFind = css`
  width: 100%;
  text-align: right;
  color: #454345;
  font-size: 12px;
  span {
    cursor: pointer;
    margin-right: 1rem;
    text-decoration-line: underline;
    &:last-of-type {
      ${mq[4]} {
        margin-right: 0px;
      }
    }
  }
  ${mq[4]} {
    text-align: center;
  }
`;

const ModalContainerDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .background {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 11;
  }
  .container {
    position: fixed;
    width: 20vw;
    background: #fff;
    z-index: 12;
    padding: 0;
    .content {
      margin: 0 1.5rem;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1.5rem;
        padding-bottom: 10px;
        border-bottom: 1px solid black;
        span {
          color: #61057d;
          font-size: 15px;
          font-weight: bold;
          &:last-of-type {
            font-size: 20px;
            font-weight: bold;
            color: black;
            cursor: pointer;
          }
        }
      }
      .msg {
        padding: 2rem 0;
        text-align: center;
        font-size: 15px;
      }
    }
    .btnDiv {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;
      background: #f5f5f5;
      button {
        padding: 10px 30px;
        color: #fff;
        background: #61057d;
        border: 1px solid #61057d;
        font-size: 15px;
      }
    }
    ${mq[2]} {
      width: 40vw;
    }
    ${mq[4]} {
      width: 80vw;
    }
  }
  z-index: 11;
`;

const TOSDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .background {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 11;
  }
  .container {
    position: fixed;
    z-index: 12;
    width: 30%;
    height: calc(6rem + 50vh);
    background: #fff;
    padding: 1rem;
    .content {
      position: absolute;
      max-height: 50vh;

      margin: 3rem 2rem;
      padding-right: 1rem;
      top: 0;
      left: 0;
      overflow-y: scroll;
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
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .bold {
        font-weight: bold;
      }
      div {
        div {
          margin-bottom: 1rem;
          line-height: 25px;
          &:last-of-type {
            margin-bottom: 0;
          }
        }
      }
      li {
        list-style-type: disc;
        list-style-position: inside;
        text-indent: -20px;
        padding-left: 20px;
        margin-bottom: 1rem;
        line-height: 25px;
      }
      .adGrid {
        display: grid;
        grid-template-rows: auto auto auto auto;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:
        " collection purpose termLabel "
        " collection1 purpose1 term "
        " collection2 purpose2 term "
        " collection3 purpose3 term ";
        
        border-top: 1px solid black;
        border-left: 1px solid black;

        .collection {
          grid-area: collection;
          background: lightgray;
        }
        .collection1 {
          grid-area: collection1;
        }
        .collection2 {
          grid-area: collection2;
        }
        .collection3 {
          grid-area: collection3;
        }
        .purpose {
          grid-area: purpose;
          background: lightgray;
        }
        .purpose1 {
          grid-area: purpose1;
        }
        .purpose2 {
          grid-area: purpose2;
        }
        .purpose3 {
          grid-area: purpose3;
        }
        .termLabel {
          grid-area: termLabel;
          background: lightgray;
        }
        .term {
          grid-area: term;
        }
        div, ul {
          border-right: 1px solid black;
          border-bottom: 1px solid black;
          padding: 0.5rem;
          margin: 0;
        }
        ${mq[4]} {
          grid-template-rows: auto auto auto auto auto auto;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
          " collection purpose "
          " collection1 purpose1 "
          " collection2 purpose2 "
          " collection3 purpose3 "
          " termLabel termLabel "
          " term term ";
        }
      }
      ${mq[5]} {
        margin: 3rem 1rem;
      }
    }
    .close {
      color: black;
      cursor: pointer;
      font-weight: bold;
    }
    ${mq[1]} {
      width: 40%;
    }
    ${mq[2]} {
      width: 50%;
    }
    ${mq[3]} {
      width: 60%;
    }
    ${mq[4]} {
      width: 80%;
    }
  }
`;

export {
  DivCSS,
  Logo,
  BoxDivCSS,
  passwordFind,
  FormDivCSS,
  RegisterFormDiv,
  CompeleteDiv,
  ModalContainerDiv,
  TOSDiv,
};
