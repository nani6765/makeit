import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  MainPageDiv,
  MainPageHading,
  MainPageSubHading,
  MainPageGridDiv,
  MainPageGridPrev,
  MainPageGridNext,
  MainPageGridPrevAndNext,
  MainPageGridContent,
} from "../css/MainPageElement.js";
import SampleImg from "../../../Img/sample.png";
import PlayButton from "../../../Img/playButton.png";

function FriendsVideo() {
  let FVGridContent = MainPageGridContent(310);
  var scrollAmount = 0;

  function handlePrev() {
    const target = document.querySelector(".frinedsVideo");
    target.scrollTo({
      top: 0,
      left: (scrollAmount -= 510),
      behavior: "smooth",
    });
  }

  function handleNext() {
    const target = document.querySelector(".frinedsVideo");
    target.scrollTo({
      top: 0,
      left: (scrollAmount += 510),
      behavior: "smooth",
    });
  }

  return (
    <>
      <MainPageDiv>
        <p css={MainPageHading}>
          프렌즈가 참여한 영상들
          <a href="/">더보기 &gt;</a>
        </p>
        <p css={MainPageSubHading}>
          프렌즈가 촬영, 제작, 배우로 참석한 영상이 올라오고 있어요.
        </p>

        <MainPageGridDiv>
          <MainPageGridPrev css={MainPageGridPrevAndNext}>
            <button onClick={() => handlePrev()}>&lt;</button>
          </MainPageGridPrev>
          <ScrollContainer
            className="scroll-container frinedsVideo"
            css={FVGridContent}
          >
            <CardImg></CardImg>
            <CardImg></CardImg>
            <CardImg></CardImg>
            <CardImg></CardImg>
            <CardImg></CardImg>
          </ScrollContainer>
          <MainPageGridNext css={MainPageGridPrevAndNext}>
            <button onClick={() => handleNext()}>&gt;</button>
          </MainPageGridNext>
        </MainPageGridDiv>
      </MainPageDiv>
    </>
  );
}

function CardImg() {
  const breakpoints = [1200, 576];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  const CardImg = styled.article`
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    margin-left: 10px;
    maragin-right: 10px;
    width: 500px;
    min-width: 500px;
    height: 281.25px;
    min-height: 281.25px;
    position: relative;
    clear: both;
    overflow: hidden;
    z-index: 1;
    filter: drop-shadow(0px 3px 6px rgba(75, 81, 91, 0.15)),
      drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15));
    border-radius: 10px;
    .thumbnail {
      width: 100%;
      height: 100%;
    }
    ${mq[1]} {
      width: 100%;
      min-width: 80vw;
      height: 281.25px;
      min-height: 281.25px;
      padding-left: 10px;
      .thumbnail {
        width: 100%;
        height: 100%;
      }
    }
  `;

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

  return (
    <div>
      <CardImg draggable="false">
        <img src={SampleImg} className="thumbnail" alt="" />
        <img src={PlayButton} alt="" css={PlayButtonCSS} />
      </CardImg>
    </div>
  );
}

export default FriendsVideo;
