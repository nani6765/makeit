/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const UploadForm = styled.div`
  width: 70%;
  margin: 0 auto;
  ${mq[1]} {
    width: 90%;
  }
  .OneLineIntroduce {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 15px;
    border: none;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    outline: none;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      text-align: center;
    }
  }
`;

const UploadHead = styled.div`
  width: 100%;
  height: auto;
  background: #faf6f6;
  div {
    width: 70%;
    margin: 0 auto;
    h1 {
      font-weight: bold;
      font-size: 32px;
      line-height: 44px;
      color: #702c8a;
      span {
        margin-right: 1.5rem;
        cursor: pointer;
      }
    }
    ${mq[1]} {
      width: 90%;
    }
  }
`;

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

export { UploadForm, UploadHead, ContentDiv, LeftContent };
