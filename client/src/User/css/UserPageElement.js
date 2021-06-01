/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const DivCSS = css`
  padding-top: 80px;
  text-align: center;
  ${mq[0]} {
    padding-top: 80px;
  }
  ${mq[1]} {
    padding-top: 60px;
  }
`;

const BoxDivCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 15vh;
  margin-bottom: 15vh;
`;

const FormDivCSS = css`
  display: flex;
  flex-direction: column;
`;

export { DivCSS, BoxDivCSS, FormDivCSS };
