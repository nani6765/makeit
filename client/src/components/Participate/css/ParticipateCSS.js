/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const PartHeader = styled.div`
  position: relative;
  height: auto;
  .bannerDiv {
    width: 100%;
    height: 35vh;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      postition: absolute;
      top: 0;
      left: 0;
      z-index: 5;
    }
    ${mq[1]} {
      height: 20vh;
    }
  }

  .GNBDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 70%;
    height: 120px;

    margin: 0 auto;
    padding: 25px 0;

    div {
      cursor: pointer;
      text-align: center;
      svg {
        width: 50px;
        height: 50px;
        margin-bottom: 5px;
        ${mq[1]} {
          width: 30px;
          height: 30px;
        }
      }
      p {
        color: #702c8a;
        font-weight: bold;
        user-select: none;
        ${mq[1]} {
          font-size: 10px;
        }
      }
      &:hover {
        svg {
          width: 60px;
          height: 60px;
        }
      }
      ${mq[1]} {
        &:hover,
        &:focus {
          svg {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    ${mq[1]} {
      width: 90%;
      height: auto;
      padding: 2vh 3vw 2vh 3vw;
    }
  }
  .category {
    width: 100%;
    background: #EDE7F6;
    padding: 10px 15%;
    p {
      display: inline-block;
      color: #702C8A;
      font-size: 24px;
      font-weight: bold;
    }
    .sorting {
      display: inline-block;
      p {
        margin-left: 20px;
        color: #979393;
        font-size: 16px;
        background: #EFE9E9;
        padding: 5px 10px;
        font-weight: normal;
      }
      .active {
        background: #935EA5;
        border-radius: 16px;
        color: #fff;
      }
    }
  }
`;

const PartBody = styled.div`
  width: 70%;
  margin: 0 auto;
  ${mq[1]} {
    width: 90%;
  }
`;

const PartFilter = styled.div`
  border-radius: 15px 15px 0px 0px;
  margin-top: 30px;
  background: #ede7f6;
  border: none;
  height: auto;
  padding: 20px 20px 10px 20px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .select {
    display: flex;
    .labelArea {
      width: 20%;
      display: flex;
      align-content: center;
      justify-content: space-evenly;
      align-items: flex-start;
      user-select: none;
      span {
        font-weight: bold;
        margin: 0px;
      }
    }
    .contentArea {
      display: flex;
      width: 80%;
      flex-wrap: wrap;
      div {
        width: auto;
        margin-bottom: 10px;
        input {
          display: none;
        }
        label {
          margin: 0px;
          user-select: none;
        }
        input + label:before {
          content: "";
          display: inline-flex;
          width: 1rem;
          height: 1rem;
          background: rgba(179, 82, 255, 0.12);
          border: 2px solid rgba(179, 82, 255, 0.24);
          border-radius: 4px;
          margin: 0 0.5rem 0 1.5rem;
          cursor: pointer;
        }
        input:checked + label:before {
          content: "✓";
          color: white;
          background: #9b51e0;
          align-items: center;
          align-content: center;
          justify-content: center;
        }
      }
    }
    &:nth-last-of-type(1) {
      margin-bottom: 0px;
    }
  }
`;


export { PartHeader, PartBody, PartFilter };
