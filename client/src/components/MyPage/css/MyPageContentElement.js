/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const EditProfileDiv = styled.div`
  .editProfileDiv {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    .avatarSelect {
      text-align: center;
      input {
        display: none;
      }
      label {
        cursor: pointer;
        position: relative;
        display: inline-block;
        margin-bottom: 1.5rem;
        i {
          border: 1px solid #d4d4d4;
          border-radius: 50%;
          display: inline-block;
          padding: 6px;
          position: absolute;
          top: 50px;
          right: -5px;
          background-color: white;
          font-size: 20px;
          font-weight: bold;
          color: black;
          display: block;
        }
      }
      button {
        display: block;
        background-color: #f0f0f0;
        border: 1px solid #d4d4d4;
        border-radius: 50px;
        color: #454345;
        font-weight: 600;
        padding: 5px 10px 5px 10px;
      }
    }
  }
  form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    label {
      text-align: left;
      font-weight: 600;
      font-size: 14px;
      line-height: 25px;
      color: #454345;
    }
    input {
      background: #ffffff;
      border: 1px solid #d5d5d5;
      box-sizing: border-box;
      border-radius: 7px;
      padding: 0.5rem;
      &:focus,
      &:active {
        outline: none;
      }
    }
    .FormbtnDiv {
      text-align: center;
      margin-top: 1rem;
      button {
        background: #935ea5;
        border-radius: 10px;
        padding: 5px 10px 5px 10px;
        color: white;
        font-weight: bold;
        &:hover,
        &:focus {
          background: #702c8a;
        }
      }
    }
  }
`;

const EditProfile = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  .background {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 50;
  }
  .ModalDiv {
    z-index: 51;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 80%;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 15px;
    padding: 20px;
    .cropperDiv {
      position: relative;
      width: 80%;
      height: 500px;
      max-height: 500px;
    }
    button {
      background: #935ea5;
      border-radius: 10px;
      padding: 5px 10px 5px 10px;
      color: white;
      font-weight: bold;
      &:hover,
      &:focus {
        background: #702c8a;
      }
    }
  }
`;

const LoadingDiv = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  opacity: 0.5;
  top: 0;
  left: 0;
  z-index: 51;
  scroll: none;
`;

const LogContentDiv = styled.div`
  background: #f6f2ff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 110.5px;
  padding: 20px;
  margin-bottom: 20px;
  a {
    text-decoration: none;
    color: black;
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
  ${mq[1]} {
    box-shadow: 0px 1px 5px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
  }
`;

export { EditProfileDiv, EditProfile, LoadingDiv, LogContentDiv };
