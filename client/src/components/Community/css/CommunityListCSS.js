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

  .GNBDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 70%;
    height: 120px;

    margin: 0 auto;
    padding: 25px 0;


    div {
      cursor: pointer;
      text-align: center;
      svg {
        width: 50px;
        height: 50px;
        margin-bottom: 5px;
        ${mq[1]} {
          width: 30px;
          height: 30px;
        }
      }
      p {
        color: #702C8A;
        font-weight: bold;
        user-select: none;
        ${mq[1]} {
          font-size: 10px;
        }
      }
      &:hover {
        svg {
          width: 60px;
          height: 60px;
        }
      }
      ${mq[1]} {
        &:hover,
        &:focus {
          svg {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    ${mq[1]} {
      width: 90%;
      height: auto;
      padding: 2vh 3vw 2vh 3vw;
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
      color: #935EA5;
    }
  }
  .noResult {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 2rem;
    p:first-child {
      font-size: 20px;
    }
    svg {
      margin: 1rem 0;
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
  background: #EDE7F6;
  margin: 0px;
  width: 100%;
  padding: 15px 15%;
  div {
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
          background: #935EA5;
          cursor: default;
          color: white;
          border-radius: 16px;
          padding: 5px 10px;
        }
      }
    }
    ${mq[1]} {
      h1 {
        font-size: 24px;
      }
      p {
        margin-left: 5px;
        font-size: 12px;
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
    ${mq[1]} {
      font-size: 10px;
      svg {
        width: 12px;
        height: 12px;
      }
    }
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

const BodyFooterDiv = styled.div`
  position: fixed;
  right: 0px;
  top: 50%;
  width: 15%;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    align-items: flex-end;
    justify-content: center;
    i {
      padding: 10px;
      font-size: 14px;
      font-weight: bold;
      color: black;
      border: 1px solid black;
      border-radius: 50%;
      margin-top: 1rem;
      cursor: pointer;
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
    border: 2px solid #6759F6;
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
  CommunityBody,
  BodyHeaderDiv,
  PostCard,
  FNBDiv,
};
