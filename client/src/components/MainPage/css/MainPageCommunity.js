/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const CPGridDiv = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100%;
  grid-template-areas: "hot new comment";
  column-gap: 40px;
  ${mq[1]} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    row-gap: 40px;
    column-gap: 0;
    grid-template-areas:
      "hot"
      "new"
      "comment";
  }
`;
const CPGridHot = styled.div`
  grid-area: hot;
  text-align: center;
  a {
    article {
      margin-top: 20px;
      margin-bottom: 40px;
    }
    &:nth-last-of-type(1) {
      article {
        margin-bottom: 0px;
      }
    }
  }
`;
const CPGridNew = styled.div`
  grid-area: new;
  text-align: center;
  a {
    article {
      margin-top: 20px;
      margin-bottom: 40px;
    }
    &:nth-last-of-type(1) {
      article {
        margin-bottom: 0px;
      }
    }
  }
`;
const CPGridComment = styled.div`
  grid-area: comment;
  text-align: center;
  a {
    article {
      margin-top: 20px;
      margin-bottom: 40px;
    }
    &:nth-last-of-type(1) {
      article {
        margin-bottom: 0px;
      }
    }
  }
`;

const GridTitle = css`
  font-weight: bold;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  line-height: 18px;
  width: 60%;
  padding: 9px 0px;
  color: rgba(112, 44, 138, 1);
  background: #efe9e9;
  border-radius: 39px;
`;

const CardImg = styled.article`
  width: 100%;
  height: 195px;
  background-color: white;
  display: block;
  display: grid;
  padding: 20px;

  grid-template-columns: 1fr 1fr 2fr 2fr;
  grid-template-rows: 50px 30px 30px 25px 20px;
  grid-template-areas:
    "profile author author view"
    "title title title title"
    "desc desc desc desc"
    "date date date date"
    "category category like comment";
  .profile {
    grid-area: profile;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-self: center;
    width: 100%;
    height: 100%;
  }
  .author {
    margin-left: 5px;
    grid-area: author;
    text-align: left;
    align-self: center;
  }
  .view {
    grid-area: view;
    text-align: right;
    color: #5b4949;
    align-self: center;
    font-size: 12px;
  }
  .title {
    grid-area: title;
    font-weight: 700;
    margin-top: 5px;
    text-align: left;
    overflow: hidden;
    font-size: 16px;
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .desc {
    grid-area: desc;
    text-align: left;
    font-size: 14px;
    line-height: 30px;
  }
  .date {
    grid-area: date;
    text-align: right;
    font-size: 12px;
    line-height: 20px;
    padding-bottom: 5px;
  }
  .category {
    grid-area: category;
    background-color: #efe9e9;
    border-radius: 10px;
    border: none;
    align-items: center;
    display: flex;
    justify-content: center;
    p {
      color: #908b8b;
      font-size: 14px;
      margin-bottom: 0px;
      ${mq[1]} {
        font-size: 12px;
      }
    }
  }
  .like {
    grid-area: like;
    text-align: right;
    align-items: center;
    margin-bottom: 0px;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    i {
      margin-right: 5px;
      color: #ccd2e3;
      font-size: 18px;
    }
  }
  .comment {
    grid-area: comment;
    text-align: right;
    margin-bottom: 0px;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    i {
      margin-right: 5px;
      color: #ccd2e3;
      font-size: 18px;
    }
  }
  ${mq[0]} {
    width: 45%;
    display: inline-grid;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }
  ${mq[1]} {
    width: 100%;
    display: grid;
    margin: 30px 0;
  }
`;

export { CPGridDiv, CPGridHot, CPGridNew, CPGridComment, GridTitle, CardImg };
