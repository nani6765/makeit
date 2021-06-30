/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const FirstDiv = styled.div`
  width: 100%;
  height: 830px;
  background-image: url("/Img/landingPage/1.png");
  background-size: cover;
  div {
    margin-left: 5vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
      color: white;
      font-weight: bold;
      font-size: 60px;
      span {
        color: yellow;
      }
    }
    p {
      margin-top: 32px;
      color: white;
      font-size: 32px;
    }
  }
  ${mq[1]} {
    height: 500px;
    div {
      width: auto;
      margin-left: 10px;
      h1 {
        font-size: 20px;
        span {
          margin-right: 10px;
        }
      }
      p {
        font-size: 12px;
      }
    }
  }
`;
const SecondDiv = styled.div`
  width: 100%;
  height: 830px;
  background-image: url("/Img/landingPage/2.png");
  background-size: cover;
  div {
    margin-left: 5vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
      color: #412280;
      font-weight: bold;
      font-size: 60px;
    }
    span {
      width: 100px;
      margin-top: 16px;
      margin-bottom: 16px;
      border-bottom: 3px solid #330033;
    }
    p {
      color: #330033;
      font-size: 32px;
    }
  }
  ${mq[1]} {
    height: 500px;
    div {
      width: auto;
      margin-left: 10px;
      h1 {
        font-size: 20px;
        span {
          margin-right: 10px;
        }
      }
      p {
        font-size: 12px;
      }
    }
  }
`;

const ThirdDiv = styled.div`
  width: 100%;
  height: 830px;
  background-image: url("/Img/landingPage/3.png");
  background-size: cover;
  div {
    margin-left: 5vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      color: white;
      font-weight: bold;
      font-size: 60px;
      span {
        color: #8446ff;
        margin-right: 30px;
        border: none;
      }
    }
    span {
      width: 100px;
      margin-top: 16px;
      margin-bottom: 16px;
      border-bottom: 3px solid yellow;
    }
    p {
      color: white;
      font-size: 32px;
    }
  }
  ${mq[1]} {
    height: 500px;
    div {
      width: auto;
      margin-left: 10px;
      h1 {
        font-size: 20px;
        span {
          margin-right: 10px;
        }
      }
      p {
        font-size: 12px;
      }
    }
  }
`;
const FourthDiv = styled.div`
  width: 100%;
  height: 830px;
  background-image: url("/Img/landingPage/4.png");
  background-size: cover;
  div {
    margin-left: 5vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
      color: #412280;
      font-weight: bold;
      font-size: 60px;
      span {
        color: white;
        margin-right: 30px;
        border: none;
      }
    }
    span {
      width: 100px;
      margin-top: 16px;
      margin-bottom: 16px;
      border-bottom: 3px solid #412280;
    }
    p {
      color: #5d4692;
      font-size: 32px;
    }
  }
  ${mq[1]} {
    height: 500px;
    div {
      width: auto;
      margin-left: 10px;
      h1 {
        font-size: 20px;
        span {
          margin-right: 10px;
        }
      }
      p {
        font-size: 12px;
      }
    }
  }
`;

const FifthDiv = styled.div`
  width: 100%;
  height: 830px;
  background-image: url("/Img/landingPage/5.png");
  background-size: cover;
  div {
    margin-left: 5vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
      color: white;
      font-weight: bold;
      font-size: 60px;
      span {
        color: #8446ff;
        margin-right: 30px;
        border: none;
      }
    }
    span {
      width: 100px;
      margin-top: 16px;
      margin-bottom: 16px;
      border-bottom: 3px solid yellow;
    }
    p {
      color: white;
      font-size: 32px;
    }
  }
  ${mq[1]} {
    height: 500px;
    div {
      width: auto;
      margin-left: 10px;
      h1 {
        font-size: 20px;
        span {
          margin-right: 10px;
        }
      }
      p {
        font-size: 11px;
      }
    }
  }
`;

const SixthDiv = styled.div`
  width: 100%;
  height: 830px;
  background-image: url("/Img/landingPage/6.png");
  background-size: cover;
  div {
    margin-left: 5vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
      color: #412280;
      font-weight: bold;
      font-size: 60px;
      span {
        color: #cfd8dc;
        margin-right: 30px;
        border: none;
      }
    }
    span {
      width: 100px;
      margin-top: 16px;
      margin-bottom: 16px;
      border-bottom: 3px solid #412280;
    }
    p {
      color: #412280;
      font-size: 32px;
    }
  }
  ${mq[1]} {
    height: 500px;
    div {
      width: auto;
      margin-left: 10px;
      h1 {
        font-size: 20px;
        span {
          margin-right: 10px;
        }
      }
      p {
        font-size: 12px;
      }
    }
  }
`;

export { FirstDiv, SecondDiv, ThirdDiv, FourthDiv, FifthDiv, SixthDiv };
