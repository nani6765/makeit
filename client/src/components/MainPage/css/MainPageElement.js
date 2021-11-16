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
  .friendsVideoList {
    width: 100%;
    .slick-track {
      margin: 0px;
      min-width: 100%;
      width: 100%;
    }
  }
  .slick-arrow {
    display: flex;
    background-color: white;
    border: black;
    border: 1px solid rgba(213, 218, 221, 1);
    border-radius: 50%;
    padding: 20px;
  }
  .slick-prev {
    left: -10px;
    z-index: 1;
  }
  .slick-next {
    right: -10px;
    z-index: 1;
  }
  ${mq[1]} {
    .slick-prev {
      left: -10px;
    }
    .slick-next {
      right: -10px;
    }
  }
  .slick-next:before,
  .slick-prev:before {
    display: flex;
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: center;
    align-items: center;
    opacity: 1;
    color: black;
  }
  .slick-prev:before {
    content: "<";
  }
  .slick-next:before {
    content: ">";
  }
`;

const MainPageHading = css`
  display: flex;
  align-items:center;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  color: #702c8a;
  padding-bottom: 1rem;
  a {
    margin-left: 1rem;
    background: #efe9e9;
    border-radius: 20px;
    padding: 0.2rem 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.4rem;
    color: #b3b3b3;
  }
  ${mq[0]} {
    font-size: 20px;
    line-height: 24px;
    a {
      margin-left: 1rem;
      background: #efe9e9;
      border-radius: 50%;
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
  margin-bottom: 3rem;
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

const CardImg = styled.article`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  margin: 0 10px;
  position: relative;
  clear: both;
  overflow: hidden;
  z-index: 1;
  filter: drop-shadow(0px 3px 6px rgba(75, 81, 91, 0.15)),
    drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15));
  //border-radius: 10px;
  .thumbnail {
    width: 100%;
    height: 100%;
  }
  ${mq[1]} {
    width: 100%;
    min-width: 80vw;
    height: 281.25px;
    min-height: 281.25px;
    margin-left: 0px;
  }
`;

/*
const PlayButtonCSS = css`
  position: absolute;
  width: 100px;
  height: 100px;
  z-index: 10;
  top: calc(50% - 50px);
  top: -webkit-calc(50% - 50px);
  top: -moz-calc(50% - 50px);
  top: -o-calc(50% - 50px);
  left: calc(50% - 50px);
  left: -webkit-calc(50% - 50px);
  left: -moz-calc(50% - 50px);
  left: -o-calc(50% - 50px);
  bottom: 0;
  right: 0;
  text-align: center;
`;
*/

export {
  MainPageDiv,
  MainPageHading,
  MainPageSubHading,
  MainPageGridContent,
  CardImg,
};
