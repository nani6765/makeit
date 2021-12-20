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
  background-color: white;
  display: block;
  padding: 20px;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 30px 108px 1fr 20px 1fr;
  grid-template-rows: 30px 21px 50px 29px;
  row-gap: 8px;
  grid-template-areas:
    "profile author author . date"
    "title title title title title"
    "desc desc desc desc desc"
    "category category like . comment";
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
    margin-left: 8px;
    grid-area: author;
    text-align: left;
    align-self: center;
    font-size: 14px;
    line-height: 21px;
  }
  .title {
    grid-area: title;
    text-align: left;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .desc {
    grid-area: desc;
    text-align: left;
    font-size: 14px;
    line-height: 25px;
  }
  .date {
    grid-area: date;
    text-align: right;
    font-size: 14px;
    line-height: 21px;
  }
  .category {
    grid-area: category;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-top: 8px;
    margin-right: 56px;
    font-size: 12px;
    line-height: 18px;

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
    display: flex;
    text-align: right;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 0px;
    justify-content: flex-end;
    font-size: 14px;
    line-height: 21px;
    i {
      margin-right: 8px;
      color: #ccd2e3;
      font-size: 18px;
    }
  }
  .comment {
    grid-area: comment;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 8px;
    margin-bottom: 0px;
    text-align: right;
    font-size: 14px;
    line-height: 21px;
    i {
      margin-right: 8px;
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
