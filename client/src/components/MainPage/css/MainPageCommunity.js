/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

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

const CardImg = styled.article`
  width: 100%;
  height: 220px;
  background-color: white;
  border-radius: 10px;
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  display: grid;
  padding: 10px 20px 10px 20px;
  grid-template-columns: 1fr 1fr 1fr 2fr 2fr;
  grid-template-rows: 2fr 1fr 14px 1fr 1fr;
  grid-template-areas:
    "profile author author author view"
    "title title title title title"
    "desc desc desc desc desc"
    "date date date date date"
    "category category . like comment";
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
    font-weight: bold;
    margin-top: 5px;
    text-align: left;
  }
  .desc {
    grid-area: desc;
    text-align: left;
    font-size: 14px;
    line-height: 14px;
  }
  .date {
    grid-area: date;
    text-align: right;
    border-bottom: 1px solid #efe9e9;
    padding-top: 5px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    font-size: 12px;
  }
  .category {
    grid-area: category;
    background-color: #efe9e9;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 6px;
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
    font-size: 12px;
    p {
      i {
        margin-right: 5px;
        color: #ccd2e3;
      }
    }
  }
  .comment {
    grid-area: comment;
    text-align: right;
    margin-bottom: 0px;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    p {
      i {
        margin-right: 5px;
        color: #ccd2e3;
      }
    }
  }
`;

export { CPGridDiv, CPGridHot, CPGridNew, CPGridComment, GridTitle, CardImg };
