/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const SearchBody = styled.div`
  width: 70%;
  margin: 0 auto;

  .result {
    margin-bottom: 1rem;
    a {
      color: black;
      &:hover {
        text-decoration: none;
      }
    }
    .resultHeader {
      display: flex;
      justify-content: space-between;
      color: #565656;
      padding: 1rem 0;
      border-bottom: 2px solid #565656;
      margin-bottom: 0.5rem;
      p {
        display: inline-block;
        font-weight: bold;
        margin-bottom: 0;
        span {
          color: #5a298b;
        }
      }
      button {
        background: none;
        border: none;
      }
    }
  }
  ${mq[0]} {
    width: 80%;
  }
  ${mq[1]} {
    width: 90%;
  }
`;

const SearchInput = styled.div`
  width: 30vw;
  height: 50px;

  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;

  input {
    width: 90%;
    margin-right: 0px !important;
    height: 100%;
    padding: 10px;
    border: 2px solid #5a298b;
    border-radius: 5px 0px 0px 5px;
    &:active,
    &:focus {
      outline: none;
    }
  }

  button {
    width: 10%;
    margin-left: 0px !important;
    height: 100%;
    background-color: #5a298b;
    color: white;
    border: none;
    border-radius: 0px 5px 5px 0px;

    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
      height: 60%;
    }
  }
  ${mq[0]} {
    width: 40vw;
  }
  ${mq[1]} {
    width: 60vw;
  }
`;

const PostCard = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 6fr 30px 0.6fr 1.2fr 1.2fr;
  grid-template-areas:
    "title title title title title"
    "content avatar auther realTime category";
  width: 100%;
  height: auto;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 5px;
  ${mq[0]} {
    grid-template-columns: 3fr 30px 0.6fr 1.2fr 1.2fr;
    padding: 0.75rem;
  }
  ${mq[1]} {
    grid-template-rows: auto auto 30px;
    grid-template-columns: 30px 0.6fr 1.2fr 1.2fr;
    grid-template-areas:
      "title title title title"
      "content content content content "
      "auther auther realTime category";
    padding: 0.5rem;
  }

  .title {
    grid-area: title;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-break: anywhere;
    max-width: 60%;
    margin-bottom: 1rem;
    ${mq[1]} {
      margin-bottom: 0;
    }
  }
  .content {
    grid-area: content;
    width: 90%;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-break: anywhere;
  }
  .sb-avatar {
    grid-area: avatar;
    ${mq[1]} {
      display: none !important;
    }
  }
  .auther {
    grid-area: auther;
    margin: 5px 0;
    margin-left: 5px;
    color: #9d9ea9;
    border-right: 1px solid #9a9a9a;
    ${mq[0]} {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
    ${mq[1]} {
      display: flex;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      font-size: 10px;
    }
  }
  .realTime {
    grid-area: realTime;
    text-align: center;
    margin: 5px 0;
    color: #9d9ea9;
    border-right: 1px solid #9a9a9a;
    ${mq[0]} {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
    ${mq[1]} {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      font-size: 10px;
    }
  }
  .category {
    grid-area: category;
    text-align: center;
    color: #9d9ea9;
    margin: 5px 0;
    ${mq[0]} {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
    ${mq[1]} {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      font-size: 10px;
    }
  }
`;

const ImageCard = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 2fr 4fr 30px 0.6fr 1.2fr 1.2fr;
  grid-template-areas:
    "thumbnail title title title title title"
    "thumbnail content content content content content"
    "thumbnail . . . . ."
    "thumbnail . avatar auther realTime category";

  width: 100%;
  height: auto;
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 5px;
  ${mq[0]} {
    padding: 0.75rem;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 3fr 30px 0.6fr 1.2fr 1.2fr;
    grid-template-areas:
      "thumbnail title title title title"
      "thumbnail content content content content"
      "thumbnail . . . ."
      "thumbnail avatar auther realTime category";
  }
  ${mq[1]} {
    padding: 0.5rem;
    grid-template-rows: auto auto auto 30px;
    grid-template-columns: 30px 0.6fr 1.2fr 1.2fr;
    grid-template-areas:
      "thumbnail thumbnail thumbnail thumbnail"
      "title title title title"
      "content content content content "
      "auther auther realTime category";
  }

  .thumbnail {
    grid-area: thumbnail;
    min-height: 160px;
    max-height: 160px;
    img {
      width: 100%;
      height: 100%;
      min-height: 160px;
      max-height: 160px;
    }
    ${mq[0]} {
      margin-right: 1rem;
    }
    ${mq[1]} {
      margin-right: 0;
    }
  }

  .title {
    grid-area: title;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-break: anywhere;
    max-width: 60%;
    margin-bottom: 1rem;
    margin-left: 1rem;
    ${mq[0]} {
      margin-left: 0;
    }
    ${mq[1]} {
      margin-bottom: 0;
    }
  }
  .content {
    grid-area: content;
    width: 90%;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-break: anywhere;
    margin-left: 1rem;
    ${mq[0]} {
      margin-left: 0;
    }
  }
  .sb-avatar {
    grid-area: avatar;
    ${mq[1]} {
      display: none !important;
    }
  }
  .auther {
    grid-area: auther;
    margin: 5px 0;
    margin-left: 5px;
    color: #9d9ea9;
    border-right: 1px solid #9a9a9a;
    ${mq[0]} {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
    ${mq[1]} {
      display: flex;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      font-size: 10px;
    }
  }
  .realTime {
    grid-area: realTime;
    text-align: center;
    margin: 5px 0;
    color: #9d9ea9;
    border-right: 1px solid #9a9a9a;
    ${mq[0]} {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
    ${mq[1]} {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      font-size: 10px;
    }
  }
  .category {
    grid-area: category;
    text-align: center;
    color: #9d9ea9;
    margin: 5px 0;
    ${mq[0]} {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
    ${mq[1]} {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
      font-size: 10px;
    }
  }
`;
const GNBDiv = styled.div`
  width: 100%;
  padding: 0;
  border-bottom: 1px solid #acb0b4;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-content: center;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    margin-bottom: 0;
    padding: 0;
  }

  ${mq[1]} {
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-end;
    ul {
      width: 100%;
      align-content: center;
      justify-content: space-evenly;
      padding-left: 0;
    }
  }
`;

const GNBItem = styled.li`
  background: #ffffff;
  cursor: pointer;
  text-align: center;
  padding: 0 1rem;
  position: relative;
  &.active {
    p {
      color: #61057d;
      font-weight: bold;
    }
    &::after {
      display: block;
      position: absolute;
      content: "";
      background: #61057d;
      width: 100%;
      height: 2px;
      bottom: -1px;
      left: 0px;
    }
  }
  p {
    font-weight: bold;
    user-select: none;
    margin-bottom: 0;
    padding: 0.625rem 0;
    font-size: 0.875rem;
  }

  ${mq[1]} {
    margin-right: 0px;
    padding-bottom: 0rem !important;
    padding: 0 0.5rem;
    p {
      font-size: 10px;
    }
  }
`;

const PagiCSS = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .pagination {
    .active {
      font-weight: bold;
    }
    ul {
      li {
        display: inline-block;s
        border-left: 1px solid black;
        padding: 0.5rem;
        text-decoration: none;
        list-style: none;
        p {
          cursor: pointer;
          margin: 0;
        }
        &:first-of-type(1) {
        border: none;
        }
      }
    }
    button {
      background: none;
      border: none;
    }
  }
`;

export {
  SearchBody,
  SearchInput,
  PostCard,
  ImageCard,
  GNBDiv,
  GNBItem,
  PagiCSS,
};
