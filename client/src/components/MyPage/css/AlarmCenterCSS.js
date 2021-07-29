/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const AlarmContentDiv = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 110.5px;
  padding: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: "Icon Content .";
  grid-gap: 1rem;
  .Icon {
    grid-area: Icon;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    ${mq[0]} {
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  .Content {
    grid-area: Content;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    p {
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 0.5rem;
      &.date {
        font-size: 14px;
        color: #d9d9d9;
        font-weight: normal;
        margin-bottom: 0px;
      }
      ${mq[0]} {
        font-size: 14px;
        word-break: keep-all;
        &.date {
          font-size: 10px;
          word-break: keep-all;
        }
      }
    }
  }
`;

const NoLinkCSS = css`
  color: black;
  text-decoration-line: none;
  &:hover{
    text-decoration-line: none;
    color: black;
  }
`;

export { AlarmContentDiv, NoLinkCSS };
