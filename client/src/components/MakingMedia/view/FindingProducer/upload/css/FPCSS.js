/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: auto;
  grid-template-areas: "leftContent rightContent";
  grid-gap: 1rem;
  .leftContent {
    grid-area: leftContent;
  }
  .rightContent {
    grid-area: rightContent;
  }
`;

const LeftContent = styled.div`
  grid-area: leftContent;
  div {
    width: 100%;
    height: auto;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 15px;
    padding: 10px;
    h1 {
      text-align: center;
      font-weight: bold;
      font-size: 20px;
      line-height: 33px;
      color: #702c8a;
    }
    ul {
      list-style: none;
      padding-left: 1rem;
      margin-bottom: 0px;
      li {
        margin-bottom: 0.5rem;
        cursor: pointer;
        &.active {
          font-weight: bold;
        }
      }
    }
  }
`;

export { ContentDiv, LeftContent };
