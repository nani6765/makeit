import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  MainPageDiv,
  MainPageHading,
  MainPageSubHading,
} from "../css/MainPageElement.js";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

function CommunityPost() {
  const CPGridDiv = styled.div`
    display: grid;
    padding-top: 3rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100%;
    grid-template-areas: "hot new comment";
    column-gap: 2rem;
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
  const CPGridNew = styled.div`
    grid-area: new;
    text-align: center;
  `;
  const CPGridComment = styled.div`
    grid-area: comment;
    text-align: center;
  `;

  const GridTitle = css`
    font-weight: bold;
    display: inline;
    font-size: 18px;
    line-height: 25px;
    color: #702c8a;
    background-color: #efe9e9;
    padding: 10px 50px 10px 50px;
    border-radius: 20px;
    ${mq[0]} {
      padding: 5px 10px 5px 10px;
      line-height: 20px;
      font-size: 15px;
    }
    ${mq[1]} {
      padding: 5px 10px 5px 10px;
      line-height: 15px;
      font-size: 15px;
    }
  `;

  return (
    <>
      <div style={{ backgroundColor: "#FAF6F6" }}>
        <MainPageDiv>
          <p css={MainPageHading}>
            커뮤니티 게시글<a href="/">더보기 &gt;</a>
          </p>
          <p css={MainPageSubHading}>
            영상, 그리고 변화를 만드는 사람들과 소통해보세요!
          </p>
          <CPGridDiv>
            <CPGridHot>
              <p css={GridTitle}>Hot 게시글</p>
              <CardImg></CardImg>
              <CardImg></CardImg>
            </CPGridHot>
            <CPGridNew>
              <p css={GridTitle}>최신 게시글</p>
              <CardImg></CardImg>
              <CardImg></CardImg>
            </CPGridNew>
            <CPGridComment>
              <p css={GridTitle}>댓글 많은 게시글</p>
              <CardImg></CardImg>
              <CardImg></CardImg>
            </CPGridComment>
          </CPGridDiv>
        </MainPageDiv>
      </div>
    </>
  );
}

function CardImg() {
  const CardImg = styled.article`
    width: 100%;
    height: 180px;
    background-color: white;
    border-radius: 10px;
    display: block;
    margin-top: 30px;
    margin-bottom: 30px;
  `;
  return <CardImg></CardImg>;
}

export default CommunityPost;
