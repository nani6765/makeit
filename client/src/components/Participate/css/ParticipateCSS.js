/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const PartHeader = styled.div`
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
        color: #702c8a;
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
  .category {
    width: 100%;
    background: #ede7f6;
    padding: 10px 15%;
    p {
      display: inline-block;
      color: #702c8a;
      font-size: 24px;
      font-weight: bold;
    }
    .sorting {
      display: inline-block;
      p {
        margin-left: 20px;
        color: #979393;
        font-size: 16px;
        background: #efe9e9;
        padding: 5px 10px;
        font-weight: normal;
      }
      .active {
        background: #935ea5;
        border-radius: 16px;
        color: #fff;
      }
    }
  }
`;

const PartBody = styled.div`
  width: 70%;
  margin: 0 auto;
  ${mq[1]} {
    width: 90%;
  }
`;

const PartFilter = styled.div`
  border-radius: 15px 15px 0px 0px;
  margin-top: 30px;
  background: #ede7f6;
  border: none;
  height: auto;
  padding: 20px 20px 10px 20px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .select {
    display: flex;
    .labelArea {
      width: 20%;
      display: flex;
      align-content: center;
      justify-content: space-evenly;
      align-items: flex-start;
      user-select: none;
      span {
        font-weight: bold;
        margin: 0px;
      }
    }
    .contentArea {
      display: flex;
      width: 80%;
      flex-wrap: wrap;
      div {
        width: auto;
        margin-bottom: 10px;
        input {
          display: none;
        }
        label {
          margin: 0px;
          user-select: none;
        }
        input + label:before {
          content: "";
          display: inline-flex;
          width: 1rem;
          height: 1rem;
          background: rgba(179, 82, 255, 0.12);
          border: 2px solid rgba(179, 82, 255, 0.24);
          border-radius: 4px;
          margin: 0 0.5rem 0 1.5rem;
          cursor: pointer;
        }
        input:checked + label:before {
          content: "✓";
          color: white;
          background: #9b51e0;
          align-items: center;
          align-content: center;
          justify-content: center;
        }
      }
    }
    &:nth-last-of-type(1) {
      margin-bottom: 0px;
    }
  }
`;

const PartIPLoListDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-rows: auto;
  grid-template-areas: "left right";
  grid-gap: 1rem;
  .left {
    grid-area: left;
  }
  .right {
    grid-area: right;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
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

const IPLoPostCard = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
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
    margin-bottom: 0px;
  }
  .intro {
    grid-area: intro;
    font-size: 18px;
    font-weight: bold;
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

const StickyBarDiv = styled.div`
  position: sticky;
  top: 100px;
  left: 0px;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  text-align: center;
  .category {
    height: 40px;
    color: #702c8a;
    font-size: 20px;
    font-weight: bold;
  }
  .subCategory {
    margin-top: 10px;
    p {
      height: auto;
      cursor: pointer;
      font-size: 15px;
      line-height: 15px;
      margin-bottom: 1.5rem;
      &:nth-last-of-type(1) {
        margin-bottom: 0px;
      }
    }
    p.active {
      font-weight: bold;
    }
  }
`;

const FNBDiv = styled.div`
  margin-bottom: 20px;
  .submitBtn {
    display: flex;
    justify-content: flex-end;
    button {
      font-size: 15px;
      font-weight: bold;
      background: #935ea5;
      color: #fff;
      padding: 7px 10px;
      border: none;
      border-radius: 10px;
      svg {
        margin-left: 3px;
      }
    }
  }
`;

const LinkCSS = css`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
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
  PartHeader,
  PartBody,
  PartFilter,
  PartIPLoListDiv,
  PostCard,
  IPLoPostCard,
  StickyBarDiv,
  FNBDiv,
  PagiCSS,
  LinkCSS,
};
