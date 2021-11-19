/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const PageDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 5rem 0;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  img {
    margin: 1rem 0;
    width: 20%;
    height: 20%;
  }
  h1 {
    font-weight: bold;
  }
  h1,
  p {
    margin-bottom: 0px;
  }
  ${mq[0]} {
    margin: 4rem 0;
    img {
      width: 30%;
      height: 30%;
    }
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
    }
  }
  ${mq[1]} {
    margin: 3rem 0;
    img {
      width: 40%;
      height: 40%;
    }
    h1 {
      font-size: 16px;
    }
    p {
      font-size: 10px;
    }
  }
`;

export default PageDiv;
