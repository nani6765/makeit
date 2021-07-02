/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MainCategoryDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
  ${mq[1]} {
    width: 90%;
  }
`;

const MainCategoryBtnDiv = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: space-evenly;
  ${mq[1]} {
    display: none;
  }
`;

const SubCategoryDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 1rem;
  ul {
    font-size: 14px;
    display: flex;
    li {
      &::after {
        content: "|";
        margin-left: 10px;
        margin-right: 10px;
      }
      &:last-child {
        &::after {
          content: "";
        }
      }
      span {
        cursor: pointer;
      }
    }
  }
  ${mq[1]} {
    width: 90%;
    ul {
      font-size: 12px;
      li {
        margin-left: 6px;
        &::after {
          content: "";
          margin-left: 0px;
          margin-right: 0px;
        }
        &:first-child {
          margin-left: 0px;
        }
      }
    }
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
  padding: 10px 30px 10px 30px;
  background: #ffffff;
  color: #702c8a;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 22px;
  font-size: 18px;
  ${mq[0]} {
    padding: 5px 10px 5px 10px;
    font-size: 12px;
  }
  ${mq[1]} {
    padding: 2px 5px 2px 5px;
    font-size: 10px;
  }
`;

const MobileUl = styled.ul`
  text-align: right;
  list-style: none;
  li {
    margin-top: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #c6c6c6;
    font-size: 12px;
  }
`;

const PostLabelDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: auto 120px 1fr 80px;
  grid-template-rows: auto;
  grid-template-areas: "label btn . upload";
  place-items: center;
  ${mq[1]} {
    width: 90%;
  }
`;

const LabelDiv = styled.div`
  grid-area: label;
  text-align: left;
  width: 100%;
  p {
    font-weight: bold;
    font-size: 18px;
    color: #702c8a;
    margin-bottom: 0px;
  }
`;

const LabelBtn = styled.div`
  grid-area: btn;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
  button {
    display: inline;
    border-radius: 16px;
    font-size: 10px;
    font-weight: bold;
    padding: 8px 10px 8px 10px;
    background: #efe9e9;
    color: #979393;
    border: none;
    .left {
      margin-right: 10px;
      ${mq[1]} {
        margin-right: 5px;
      }
    }
  }
`;

const LabelUpload = styled.div`
  grid-area: upload;
  text-align: right;
  button {
    padding: 8px 12px 8px 12px;
    border-radius: 16px;
    border: none;
    background: #935ea5;
    color: white;
    font-size: 10px;
    font-weight: bold;
  }
`;

export {
  MainCategoryDiv,
  MainCategoryBtnDiv,
  SubCategoryDiv,
  GNBMobileDiv,
  GNBMobileContentDiv,
  GNBCategoryBtn,
  MobileUl,
  PostLabelDiv,
  LabelDiv,
  LabelBtn,
  LabelUpload,
};
