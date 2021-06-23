/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const GNBDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
  ${mq[1]} {
    width: 90%;
  }
`;

const GNBBtnDiv = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: space-evenly;
  ${mq[1]} {
    display: none;
  }
`;

const GNBMobileDiv = styled.div`
  display: none;
  ${mq[1]} {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
  }
`;

const GNBMobileContentDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const GNBCategoryBtn = styled.button`
  padding: 5px 10px 5px 10px;
  background: #ffffff;
  color: #702c8a;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 22px;
  font-size: 14px;
  ${mq[0]} {
    padding: 5px 10px 5px 10px;
    font-size: 12px;
  }
  ${mq[1]} {
    padding: 2px 5px 2px 5px;
    font-size: 10px;
  }
`;

const PostLabelDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 100px 120px 1fr 80px;
  grid-template-rows: auto;
  grid-template-areas: "label btn . upload";
  place-items: center;
  ${mq[1]} {
    width: 90%;
  }
`;

const PostListDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  ${mq[1]} {
    width: 90%;
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

const PageUL = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  li {
    border-right: 1px solid black;
    button {
      padding-left: 5px;
      padding-right: 5px;
      background-color: rgba(255, 255, 255, 0);
      border: none;
      font-size: 20px;
      margin-right: 10px;
      margin-left: 10px;
    }
    .active {
      font-weight: bold;
    }
    &:nth-last-child(1) {
      border: none;
    }
  }
`;

export {
  GNBDiv,
  GNBBtnDiv,
  GNBMobileDiv,
  GNBMobileContentDiv,
  GNBCategoryBtn,
  PostLabelDiv,
  PageUL,
  PostListDiv,
  PostCard,
};
