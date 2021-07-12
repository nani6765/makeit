/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MyPageMainDiv = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 5vh 10% 5vh 10%;
  margin-top: 5vh;
  margin-bottom: 5vh;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  text-align: center;

  .title {
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 1.5em;
  }

  .profile {
    text-align: left;
    margin-bottom: 5vh;
    h1 {
      font-weight: bold;
      font-size: 20px;
      line-height: 35px;
    }
    p {
      font-size: 14px;
      color: #454345;
    }
    .profileContainer {
      margin-top: 20px;
      margin-bottom: 20px;
      background: #ffffff;
      border: 1px solid #d5d5d5;
      padding: 20px;
      border-radius: 50px;
      display: grid;
      grid-template-columns: 50px 1fr 50px;
      grid-template-rows: 25px 25px;
      grid-template-areas:
        "img name next"
        "img email next";
      .img {
        grid-area: img;
      }
      .name {
        grid-area: name;
        text-align: center;
        align-self: center;
        font-weight: bold;
        font-size: 24px;
      }
      .email {
        grid-area: email;
        text-align: center;
        align-self: flex-end;
      }
      .next {
        grid-area: next;
        align-self: center;
        display: flex;
        align-items: center;
        span {
          font-size: 32px;
          cursor: pointer;
        }
      }
    }
  }

  .btnDiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 1rem;
    grid-template-areas:
      "topLeft topRight"
      "bottomLeft bottomRight";
    ${mq[1]} {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto;
      grid-gap: 1rem;
      grid-template-areas:
        "topLeft"
        "topRight"
        "bottomLeft"
        "bottomRight";
    }
    div {
      background: #ffffff;
      border: 1px solid #d5d5d5;
      box-sizing: border-box;
      border-radius: 50px;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: bold;
      cursor: pointer;
    }
    .topLeft {
      grid-area: topLeft;
    }
    .topRight {
      grid-area: topRight;
    }
    .bottomLeft {
      grid-area: bottomLeft;
    }
    .bottomRight {
      grid-area: bottomRight;
    }
  }

  ${mq[1]} {
    width: 90%;
  }
`;

const MyPageSubTitle = styled.div`
  width: 100%;
  text-align: left;
  border-bottom: 2px solid black;
  margin-bottom: 5vh;
  p {
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
  }
`;

export { MyPageMainDiv, MyPageSubTitle };
