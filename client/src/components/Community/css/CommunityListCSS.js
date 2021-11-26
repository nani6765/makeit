/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const CommunityHeader = styled.div`
  position: relative;
  height: auto;
  .bannerDiv {
    width: 100%;
    height: 35vh;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      postition: absolute;
      top: 0;
      left: 0;
      z-index: 5;
    }
    ${mq[1]} {
      height: 20vh;
    }
  }
`;

const GNBDiv = styled.div`
  width: 100%;
  padding: 0px 15%;
  border-bottom: 1px solid #acb0b4;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-content: center;
  ul {
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 1rem !important;
    margin-top: 3rem;
    list-style: none;
  }
  .search {
    background: #f7f7f7;
    padding: 5px;
    height: 100%;
    margin-bottom: 0.5rem;
    input {
      background: none;
      border: none;
      text-align: right;
      height: 100%;
      &::placeholder {
        color: #bfbfbf;
      }
    }
    input:focus {
      border: none;
      outline: none;
    }
    svg {
      margin-left: 5px;
      height: 100%;
      cursor: pointer;
    }
  }

  ${mq[1]} {
    padding: 0px 5%;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-end;
    ul {
      width: 100%;
      align-content: center;
      justify-content: space-evenly;
      padding-bottom: 0px !important;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .search {
      padding: 3px;
      width: 150px;
      input {
        width: 120px;
        &::placeholder {
          font-size: 10px;
        }
      }
    }
  }
`;

const MenuItem = styled.li`
  background: #ffffff;
  cursor: pointer;
  text-align: center;
  margin-right: 2rem;
  padding-bottom: 2rem !important;
  height: 1rem;
  &.active {
    color: #61057d;
    border-bottom: 3px solid #61057d;
    font-weight: bold;
    user-select: none;
  }

  ${mq[1]} {
    margin-right: 0px;
    padding-bottom: 0rem !important;
    p {
      font-size: 10px;
    }
  }
`;

const SortDiv = styled.div`
  width: 100%;
  background-color: #fafafa;
  padding: 1rem 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;

  #sort {
    display: inline-block;
    button {
      background-color: #fff;
      color: black;
      border-radius: 3px;
      border: 1px solid #acb0b4;
      font-weight: bold;
      padding: 6px 3px;
      font-size: 12px;
      width: 5rem;
      &:foucs {
        outline: none;
        box-shadow: none;
      }
      &.btn-primary:focus {
        outline: none;
        box-shadow: none;
      }
      &:after {
        margin-left: 1rem;
        content: "⌵";
        border: none;
        font-weight: bold;
      }
    }
    #dropdown-menu {
      background-color: #fff;
      border: 1px solid #acb0b4;
      max-width: 5rem;
      min-width: 5rem;
      .dropdown-item {
        color: #bfbfbf;
        font-weight: bold;
        font-size: 12px;

        &:hover {
          background: none;
        }
      }
      .active {
        color: #5a278b;
        background: none;
      }
    }
  }
  ${mq[1]} {
    padding: 0rem 5% 0rem 5%;
    ul {
      flex-wrap: wrap;
      flex-direction: row;
      height: auto;
      li {
        font-size: 10px;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }
`;
const CommunityBody = styled.div`
  width: 70%;
  margin: 0 auto;

  .searchResult {
    margin-top: 3rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
    font-size: 20px;
    .term {
      color: #935ea5;
    }
  }
  ${mq[1]} {
    width: 90%;
  }
`;

const BodyHeaderDiv = styled.div`
  margin-top: 5vh;
  heght: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  background: #ede7f6;
  margin: 0 auto;
  width: 100%;
  padding: 15px 15%;
  div {
    display: flex;
    align-items: center;
    .category {
      font-size: 24px;
      font-weight: bold;
      width: auto;
      display: inline;
      color: rgba(112, 44, 138, 1);
    }
    p {
      font-size: 16px;
      display: inline;
      color: #979393;
      span {
        cursor: pointer;
        margin-left: 15px;
        &.activate {
          background: #935ea5;
          cursor: default;
          color: white;
          border-radius: 16px;
          padding: 5px 10px;
        }
      }
    }
  }
  button {
    background: #935ea5;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    border: none;
    padding: 5px 10px 5px 10px;
    svg {
      margin-left: 3px;
    }
  }
  ${mq[1]} {
    padding: 15px 5%;
    div {
      h1 {
        font-size: 24px;
      }
      p {
        margin-left: 5px;
        font-size: 12px;
      }
    }
    button {
      font-size: 10px;
      svg {
        width: 12px;
        height: 12px;
      }
    }
  }
  ${mq[1]} {
    padding: 10px 5%;
  }
`;

const PostCard = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background: #ffffff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 50px auto 1fr 80px 80px 80px;
  grid-template-rows: 25px 25px auto auto auto;
  grid-template-areas:
    "avatar author author author . view"
    "avatar date date date . ."
    "title title title title title title"
    "desc desc desc desc desc desc"
    ". . . image like reple";
  ${mq[1]} {
    grid-template-columns: 50px auto 1fr 60px 60px 60px;
  }
  .avatar {
    grid-area: avatar;
  }
  .author {
    grid-area: author;
    font-weight: 600;
    margin-left: 10px;
  }
  .view {
    text-align: right;
    grid-area: view;
    font-size: 14px;
    color: 686868;
    ${mq[1]} {
      font-size: 10px;
    }
  }
  .date {
    grid-area: date;
    color: #5b4949;
    margin-left: 10px;
    font-size: 14px;
    ${mq[1]} {
      font-size: 10px;
    }
  }
  .title {
    grid-area: title;
    font-weight: 600;
    margin-top: 10px;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-break: anywhere;
  }
  .desc {
    grid-area: desc;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 24px;
  }
  .like {
    grid-area: like;
    font-size: 14px;
    text-align: right;
    ${mq[1]} {
      font-size: 10px;
    }
    i {
      margin-right: 5px;
    }
  }
  .reple {
    grid-area: reple;
    font-size: 14px;
    text-align: right;
    ${mq[1]} {
      font-size: 10px;
    }
    i {
      margin-right: 5px;
    }
  }
  .image {
    grid-area: image;
    font-size: 14px;
    text-align: right;
    ${mq[1]} {
      font-size: 10px;
    }
    i {
      margin-right: 5px;
    }
  }
`;

const FNBDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .FNB {
    margin: 10px auto;
    .pagination {
      .active {
        font-weight: bold;
      }
      ul {
        li {
          display: inline-block;
          border-left: 1px solid black;
          padding: 0 0.5rem;
          text-decoration: none;
          list-style: none;
          p {
            cursor: pointer;
            margin: 0;
          }
        }
        li:first-child {
          border: none;
        }
      }
      button {
        background: none;
        border: none;
      }
    }
  }
  .search {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    padding: 5px 1rem;
    border: 2px solid #6759f6;
    border-radius: 50px;
    input {
      border: none;
    }
    input:focus {
      border: none;
      outline: none;
    }
    svg {
      cursor: pointer;
    }
  }
`;

export {
  CommunityHeader,
  GNBDiv,
  MenuItem,
  SortDiv,
  CommunityBody,
  BodyHeaderDiv,
  PostCard,
  FNBDiv,
};
