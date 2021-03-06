/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ShareVideoDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;

  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    justify-content: space-around;
  }

  .FNB {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;
    .pagination {
      display: flex;
      button {
        display: inline-block;
        background: none;
        color: black;
        font-weight: normal;
        border: none;
      }
      li {
        display: inline-block;
        padding: 0px 6px;
        border-right: 1.5px solid black;
        p {
          cursor: pointer;
          margin: 0;
        }
      }
      li.active {
        font-weight: bold;
      }
      li:last-child {
        border: none;
      }
    }
  }
`;

const ShareVideoLink = css`
  color: black;
  text-decoration: none;
  width: 30%;
  &:hover {
    text-decoration: none;
    color: black;
  }
  ${mq[0]} {
    width: 45%;
  }
  ${mq[1]} {
    width: auto;
  }
`;

const ShareVideoCard = styled.div`
  background: #ffffff;
  width: 100%;
  height: auto;
  padding: 20px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px auto auto auto;
  grid-template-areas:
    "thumbnail thumbnail"
    "author author"
    "intro intro"
    "like comment";
  grid-gap: 0.5rem;
  margin-bottom: 1rem;
  .thumbnail {
    grid-area: thumbnail;
    width: 100%;
    height: 100%;
    border-radius: 11px;
  }
  .author {
    grid-area: author;
    color: #a7a5a8;
    font-size: 12px;
  }
  .intro {
    grid-area: intro;
    padding: 10px;
    font-size: 14px;
  }
  .like {
    grid-area: like;
    border-right: 1px solid rgba(204, 210, 227, 0.39);
  }
  .comment {
    grid-area: comment;
  }

  .like,
  .comment {
    padding: 10px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    border-top: 1px solid rgba(204, 210, 227, 0.39);
  }
`;

export { ShareVideoDiv, ShareVideoLink, ShareVideoCard };
