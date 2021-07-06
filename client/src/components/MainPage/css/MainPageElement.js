/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MainPageDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
  ${mq[1]} {
    width: 90%;
  }
`;

const MainPageHading = css`
  display: blcok;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: #702c8a;
  padding-bottom: 22px;
  a {
    margin-left: 1rem;
    background: #efe9e9;
    border-radius: 6px;
    padding: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 25px;
    color: #b3b3b3;
  }
  ${mq[0]} {
    font-size: 20px;
    line-height: 24px;
    a {
      margin-left: 1rem;
      background: #efe9e9;
      border-radius: 6px;
      padding: 0.5rem;
      font-weight: 500;
      font-size: 0.5rem;
      line-height: 15px;
      color: #b3b3b3;
    }
  } ;
`;

const MainPageSubHading = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #b0abab;
`;

const MainPageGridDiv = styled.div`
  display: grid;
  padding-top: 3rem;
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: 100%;
  grid-template-areas: "prev content next";
  ${mq[0]} {
    margin: 0 auto;
    grid-template-columns: 1fr;
    grid-template-rows: 80%;
    grid-template-areas: "content";
  }
`;

const MainPageGridPrev = styled.div`
  grid-area: "prev";
  ${mq[0]} {
    display: none;
  }
`;

const MainPageGridNext = styled.div`
  grid-area: "next";
  ${mq[0]} {
    display: none;
  }
`;

const MainPageGridPrevAndNext = css`
  height: 100%;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  button {
    height: inherit;
    display: inline-flex;
    align-items: center;
    color: #816afe;
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
`;

function MainPageGridContent(parameter) {
  let height = parameter;
  const MainPageGridContent = css`
    grid-area: content;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &::before {
      position: absolute;
      content: "";
      width: 150px;
      height: ${height}px;
      z-index: 5;
      background: linear-gradient(
        270deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 95.09%
      );
      transform: rotate(180deg);
    }
    &::after {
      position: absolute;
      content: "";
      width: 150px;
      height: ${height}px;
      right: calc(15vw + 45px);
      z-index: 5;
      background: linear-gradient(
        270deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 95.09%
      );
    }
    ${mq[0]} {
      &::before, &::after{
        display: none;
    };
    ${mq[1]} {
      &::before, &::after{
        display: none;
    };
  `;
  return MainPageGridContent;
}

export {
  MainPageDiv,
  MainPageHading,
  MainPageSubHading,
  MainPageGridDiv,
  MainPageGridPrev,
  MainPageGridNext,
  MainPageGridPrevAndNext,
  MainPageGridContent,
};
