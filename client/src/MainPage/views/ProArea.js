import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "@emotion/styled";
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

function ProArea() {
  var scrollAmount = 0;
  function handlePrev() {
    const target = document.querySelector(".proArea");
    target.scrollTo({
      top: 0,
      left: (scrollAmount -= 510),
      behavior: "smooth",
    });
  }

  function handleNext() {
    const target = document.querySelector(".proArea");
    target.scrollTo({
      top: 0,
      left: (scrollAmount += 510),
      behavior: "smooth",
    });
  }

  let FVGridContent = MainPageGridContent(300);
  return (
    <>
      <MainPageDiv>
        <p css={MainPageHading}>
          이 프로님은 어떠세요? <a href="/">더보기&gt;</a>
        </p>
        <p css={MainPageSubHading}>
          지금 뜨고 있는 프로덕션, 프로님을 추천해드려요!
        </p>

        <MainPageGridDiv>
          <MainPageGridPrev css={MainPageGridPrevAndNext}>
            <button onClick={() => handlePrev()}>&lt;</button>
          </MainPageGridPrev>
          <ScrollContainer
            className="scroll-container proArea"
            css={FVGridContent}
          >
            <CardImg></CardImg>
            <CardImg></CardImg>
            <CardImg></CardImg>
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
  const CardImg = styled.article`
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    margin-left: 10px;
    maragin-right: 10px;
    width: 300px;
    min-width: 300px;
    height: 200px;
    min-height: 200px;
    position: relative;
    clear: both;
    overflow: hidden;
    z-index: 1;
    background: linear-gradient(278.92deg, #7d4eff 30.16%, #c17efd 73.22%),
      #be7bfe;
    box-shadow: 0px 3px 6px rgba(75, 81, 91, 0.15),
      0px 1px 3px rgba(0, 0, 0, 0.15);
  `;

  return (
    <CardImg>
      <p></p>
    </CardImg>
  );
}

export default ProArea;
