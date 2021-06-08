/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

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
  margin-top: 15vh;
  margin-bottom: 15vh;
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
  text-align: left;
  img {
    width: 150px;
    margin-bottom: 10px;
  }
  p {
    margin-left: 10px;
    font-weight: bold;
    font-style: normal;
    font-size: 1rem;
    color: #2e2e2e;
    line-height: 1.5rem;
  }
`;

const FormDivCSS = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  label {
    width: 100%;
    text-align: left;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 0.5px solid black;
  }
  button {
    width: 50%;
    margin-top: 30px;
    margin-bottom: 30px;
    background: #702c8a;
    border-radius: 12px;
    border: none;
    color: white;
    padding: 10px;
  }
`;

export { DivCSS, Logo, BoxDivCSS, FormDivCSS };
