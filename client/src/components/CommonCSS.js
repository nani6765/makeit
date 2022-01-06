/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

/*
https://kinsta.com/blog/responsive-web-design/
default: 1920
tablet : 992
mobile : 576
*/

const breakpoints = [1920, 1440, 1200, 992, 576];
const testpoints = [1160];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
const testbreak = testpoints.map((bp) => `@media (max-width: ${bp}px)`);

const CommonMarginDiv = styled.div`
  width: 1160px;
  margin: 0 auto !important;
  ${mq[2]} {
    width: 80%;
  }
  ${mq[3]} {
    width: 85%;
  }
  ${mq[4]} {
    width: 90%;
  }
`;

//이거 왜 위에꺼랑 안맞냐...
const CommonPaddingDiv = styled.div`
  width: auto;
  padding-left: calc(calc(100vw - 1160px) / 2);
  padding-right: calc(calc(100vw - 1160px) / 2);
`;

const CommonFullDiv = styled.div`
  width: 100%;
`;

const TestDiv = styled.div`
  width: 1160px;
  overflow: hidden;
  margin: 0 auto;
  padding-right: 8px;
  padding-top: 5rem;
  ul {
    li {
      width: 370px;
      height: 370px;
      background-color: red;
      margin: 0px 0px 8px 8px;
      float: left;
      position: relative;
    }
  }
  ${testbreak[0]} {
    width: 600px;
    height: auto;
    overflow: visible;
    ul {
      overflow-x: auto;
      white-space: nowrap;
      scroll-snap-type: x mandatory;
      scroll-padding-right: 8px;
      li {
        backgroundcolor: red;
        float: none;
        position: relative;
        display: inline-block;
        margin-left: 8px;
        scroll-padding-left: 16px;
      }
    }
  }
`;

export { CommonMarginDiv, CommonPaddingDiv, CommonFullDiv, TestDiv };
