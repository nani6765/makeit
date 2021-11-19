/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const CPGridDiv = styled.div`
  display: grid;
  //padding-top: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100%;
  grid-template-areas: "hot new comment";
  column-gap: 2rem;
  ${mq[0]} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    column-gap: 0.5rem;
    grid-template-areas:
      "hot"
      "new"
      "comment";
  }
  ${mq[1]} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    column-gap: 0.5rem;
    grid-template-areas:
      "hot"
      "new"
      "comment";
  }
`;
const CPGridHot = styled.div`
  grid-area: hot;
  text-align: center;
`;

export { CPGridDiv, CPGridHot };
