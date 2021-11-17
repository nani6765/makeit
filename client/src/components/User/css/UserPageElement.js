/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
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
  ${mq[0]} {
    width: 70%;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
  ${mq[1]} {
    width: 80%;
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
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 5px;
    &::placeholder {
      color: #C4C4C4;
      ${mq[1]} {
        font-size: 14px;
      }
    }
  }
  button {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    background: #5A278B;
    border: 1px solid #5A278B;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    padding: 15px 10px;
    &:disabled {
      opacity: 0.5;
    }
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

  label{
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2rem;
  }
  input{
    border: 1.5px solid #B1B1B1;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 2rem;
    &:focus, &:active {
      outline: 1px solid #61057D;
    }
  }
  button{
    border: 1.5px solid #61057D;
    box-sizing: border-box;
    border-radius: 5px;
    background: #fff;
    color: #61057D;
    font-weight: bold;
    margin-bottom: 2rem !important;
    margin: 0 auto;
    width: 70%;
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
      border: 1.5px solid #C4C4C4;
      color: #C4C4C4;
    }
  }
  .checkEmail {
    grid-area: checkEmail;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: ". checkEmailInput checkEmailBtn";
    .checkEmailInput {
      grid-area: checkEmailInput;
      border: 1.5px solid #B1B1B1;
      box-sizing: border-box;
      border-radius: 5px;
      margin-bottom: 2rem;
      &:focus-within, &:active {
        outline: 1px solid #61057D;
      }
      input {
        border: none;
        margin: 0;
        width: 80%;
        &:focus, &:active {
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
  }
  .footer {
    border-top: 1px solid #B1B1B1;
    border-bottom: 1px solid #B1B1B1;
    padding: 3rem 0;
    grid-area: footer;
    display: grid;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 1rem;
    grid-template-areas:
    "label agree ."
    "label service1 more1"
    "label service2 more2"
    "label service3 more3";
    label {
      margin-bottom: 0px;
    }
    .service{
      &:nth-of-type(1){
        grid-area: agree;
      }
      
      &:nth-of-type(2){
        grid-area: service1;
      }
      
      &:nth-of-type(3){
        grid-area: service2;
      }
      
      &:nth-of-type(4){
        grid-area: service3;
      }
    }
    .more{
      font-weight: bold;
      color: #61057D;
      cursor: pointer;
      &:nth-of-type(1){
        grid-area: more1;
      }
      
      &:nth-of-type(2){
        grid-area: more2;
      }
      
      &:nth-of-type(3){
        grid-area: more3;
      }
    }
  }
  .submitBtn{
    grid-area: submitBtn;
    width: 100%;
    margin-top: 2rem;
    padding: 1rem;
    color: #fff;
    background: #61057D;
    border: 1px solid #61057D;
    box-sizing: border-box;
    border-radius: 5px;
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
      ${mq[1]} {
        margin-right: 0px;
      }
    }
  }
  ${mq[1]} {
    text-align: center;
  }
`;

export { DivCSS, Logo, BoxDivCSS, passwordFind, FormDivCSS, RegisterFormDiv, CompeleteDiv };