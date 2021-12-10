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
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

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

export { CommonMarginDiv, CommonPaddingDiv, CommonFullDiv };
