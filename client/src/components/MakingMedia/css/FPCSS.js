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
  grid-area: right;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .postBtn {
    float: right;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 7px 10px;
    background: #5A278B;
    border: none;
    border-radius: 3px;      
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
        color: #5A278B;
      }
      li:last-child {
        border: none;
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
    width: 23.5%;
    height: auto;
    margin-right: 2%;
    margin-bottom: 3%;

    background: none;

    .container {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      .thumbnail {
        width: 100%;
        height: 180px;
        border-radius: 5px;
        ${mq[1]} {
          height: 200px;
        }
      }
      p {
        margin-top: 10px;
        padding: 0 15px;
        height: auto;
        align-items: center;
        font-weight: 600;
        font-size: 18px;
      }
      .title {
        padding: 0 15px;
        height: 25px;
        line-height: 25px;
        word-break: keep-all;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-top: 10px;
        padding: 0 10px;
        p {
          margin: 0;
        }
        .producerInfo {
          .profile {
            display: inline-block;
            width: 20px;
            height: 20px;
          }
          .name {
            font-size: 15px;
            color: #9D9EA9;
            line-height: 20px;
            margin-left: 5px;
          }
        }
        .evaluation {
          font-size: 12px;
          padding: 0;
          line-height: 20px;
          i {
            color: #ffe459;
            margin-right: 5px;
          }
          span {
            margin-right: 1rem;
          }
        }
      }
      .price {
        margin-bottom: 15px;
        text-align: right;
      }
    }
    &:nth-child(4n) {
      margin-right: 0px;
    }
    ${mq[0]} {
      width: 47.5%;
      margin-right: 5%;
      &:nth-of-type(2n) {
        margin-right: 0px;
      }
    }
    ${mq[1]} {
      margin-bottom: 30px;
      width: 100%;
      margin-right: 0;
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
