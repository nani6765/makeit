import React from "react";
import styled from "@emotion/styled";
import SampleImg from "../../../Img/sample.png";
import ScrollContainer from "react-indiana-drag-scroll";

function ProductionArea() {
  let PopularVideoDiv = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 10vh;
    padding-bottom: 10vh;
    background: #f7effd;
  `;

  let Hadding = styled.h3`
    height: 44px;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    /* identical to box height */
    color: #702c8a;
    display: inline;
    &::after {
      content: "더보기 >";
      height: 25px;
      font-family: Noto Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 25px;
      color: #b3b3b3;
      display: inline;
      margin-left: 15px;
    }
  `;

  let Screen = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    &::before {
      position: absolute;
      content: "";
      width: 210px;
      height: 100%;
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
      left: calc(100vw - 210px);
      width: 210px;
      height: 100%;
      background: linear-gradient(
        270deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0) 95.09%
      );
      transform: matrix(1, 0, 0, -1, 0, 0);
    }
  `;

  let CardArea = styled.div`
    width: 600px;
    height: 100%;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  `;

  return (
    <>
      <PopularVideoDiv>
        <Hadding>프로덕션 소개</Hadding>
        <Screen>
          <ScrollContainer className="scroll-container">
            <CardArea>
              <CardImg />
              <CardImg />
              <CardImg />
              <CardImg />
              <CardImg />
              <CardImg />
              <CardImg />
              <CardImg />
              <CardImg />
            </CardArea>
          </ScrollContainer>
        </Screen>
      </PopularVideoDiv>
    </>
  );
}

function CardImg() {
  let CardImg = styled.img`
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.5s;
    margin-left: 10px;
    maragin-right: 10px;
    min-width: 300px;
    width: 300px;
    border: 4px solid #6759f6;
    box-sizing: border-box;
    border-radius: 16px;
  `;

  let Title = styled.p`
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #222222;
  `;

  let Author = styled.p`
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #222222;
  `;

  return (
    <div style={{ textAlign: "center" }}>
      <CardImg draggable="false" src={SampleImg} />
      <Title>Lorem Area</Title>
      <Author>Lorem</Author>
    </div>
  );
}

export default ProductionArea;
