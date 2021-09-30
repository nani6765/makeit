/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MakingDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
  .path {
    margin-top: 30px;
    color: #a7a5a8;
    p {
      float: left;
    }
    .editBtn {
      float: right;
      background: #faf5f5;
      border: 1px solid #d4d4d4;
      box-sizing: border-box;
      border-radius: 5px;
    }
  }
  ${mq[1]} {
    width: 90%;
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 22px;
  color: #702c8a;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  &.active {
    background: #faf5f5;
  }
`;

const ProducerListDiv = styled.div`
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
    flex-direction: column;
    width: 100%;
    height: 100%;

    .GNB {
      display: flex;
      align-content: center;
      justify-content: space-between;
      align-items: center;
      #sort {
        button {
          background-color: #ffffff;
          color: black;
          font-weight: bold;
          border: 1.5px solid #eaeaea;
          border-radius: 16px;
          &:foucs {
            outline: none;
            box-shadow: none;
          }
          &.btn-primary:focus {
            outline: none;
            box-shadow: none;
          }
        }
      }
    }
    .postBtn {
      float: right;
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      padding: 7px 10px;
      background: #935ea5;
      border: none;
      border-radius: 10px;
      svg {
        margin-left: 3px;
      }
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
          padding: 0px 5px;
          border-right: 1.5px solid black;
        }
        li.active {
          font-weight: bold;
        }
        li:last-child {
          border: none;
        }
      }
    }
  }
`;

const ProducerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 10px;
  
  a {
    color: black;
    text-decoration: none;
    &hover: text-decoration: none;
  }

  .producercard {
    width: 30%;
    height: auto;
    padding: 15px;
    margin: 1.5%;

    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    box-sizing: border-box;
    border-radius: 22px;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      .thumbnail {
        margin-top: 10px;
        width: 100%;
        height: 50%;
        border-radius: 15px;
      }
      .info {
        display: block;
        margin-top: 15px;
        height: auto;
        color: #a7a5a8;
        align-items: center;
        i {
          color: #ff5151;
          margin-left: 5px;
        }
      }
      .title {
        height: auto;
        max-height: 60px;
        margin-top: 5px;
        font-size: 18px;
        line-height: 30px;
        font-weight: 600;
        word-break: keep-all;
        overflow: hidden;
      }
      .priceAndGrade {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        font-size: 16px;
        .price {
          text-align: right;
          font-weight: 600;
        }
        .grade {
          margin-top: 5px;
          color: #ccd2e3;
          i {
            color: #ffe459;
            margin-right: 5px;
          }
        }
    }
    }
    ${mq[1]} {
      margin-bottom: 30px;
    }
  }
`;

export {
  MakingDiv,
  MenuList,
  MenuItem,
  ProducerListDiv,
  ProducerListContainer,
};
