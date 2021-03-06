/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576, 360];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MainPageDiv = styled.div`
  .friendsVideoList {
    width: 100%;
    height: 330px;
    .slick-list {
      height: 330px;
    }
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
  align-items: center;
  font-weight: bold;
  font-size: 32px;
  line-height: 30px;
  color: #702c8a;
  margin-bottom: 18px;
  a {
    line-height: 30px;
    display: flex;
    margin-left: 12px;
    svg {
      height: 100%;
    }
  }
  ${mq[2]} {
    font-size: 24px;
  }
`;

const MainPageSubHading = css`
  font-weight: light;
  font-size: 16px;
  line-height: 16px;
  color: #b0abab;
  margin-bottom: 40px;
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
  position: relative;
  width: 360px;
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  clear: both;
  overflow: hidden;
  z-index: 1;
  filter: drop-shadow(0px 3px 6px rgba(75, 81, 91, 0.15)),
    drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15));

  ${mq[1]} {
    width: 100%;
    min-width: 80vw;
    height: 281.25px;
    min-height: 281.25px;
    margin-left: 0px;
  }
`;

const lineCSS = css`
  color: black;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: none;
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
  lineCSS,
};
