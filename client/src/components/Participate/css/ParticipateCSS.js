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
`;

const PartBody = styled.div`
  width: 70%;
  margin: 0 auto;
  ${mq[1]} {
    width: 90%;
  }
`;

export { PartHeader, PartBody };
