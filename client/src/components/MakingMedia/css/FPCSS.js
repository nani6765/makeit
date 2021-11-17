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
      align-items: center;;
      margin-bottom: 1rem;
      .category {
        font-weight: bold;
      }
      .filter {
        display: flex;
        align-content: center;
        align-items: center;
        height: 100%;
        .search {
          background: #F7F7F7;
          padding: 5px;
          height: 100%;
          border-radius: 3px;
          input {
            background: none;
            border: none;
            text-align: right;
            height: 100%;
            &::placeholder {
              color: #BFBFBF;
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
        #sort {
          display: inline-block;
          margin-left: 1rem;
          button {
            background-color: #F7F7F7;
            color: black;
            border-radius: 3px;
            border: none;
            font-weight: bold;
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
            width: 100%;
            background-color: #F7F7F7;
            border: none;
            min-width: 5rem;
            .dropdown-item {
              color: #BFBFBF;
              font-weight: bold;
              &:hover {
                background: none;
              }
            }
            .active {
              color: #5A278B;
              background: none;
            }
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
    width: 31%;
    height: auto;
    margin-right: 3.5%;
    margin-bottom: 3%;

    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    box-sizing: border-box;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      .thumbnail {
        width: 100%;
        height: 200px;
      }
      p {
        margin-top: 15px;
        padding: 0 15px;
        height: auto;
        align-items: center;
        font-weight: 600;
        font-size: 15px;
      }
      .title {
        padding: 0 15px;
        height: 50px;
        line-height: 25px;
        word-break: keep-all;
        overflow: hidden;
      }
      .evaluation {
        font-size: 14px;
        i {
          color: #ffe459;
          margin-right: 5px;
        }
        span {
          margin-right: 1rem;
        }
      }
      .price {
        margin-bottom: 15px;
      }
    }
    ${mq[1]} {
      margin-bottom: 30px;
    }
  }
  .producercard:nth-child(3n) {
    margin-right: 0px;
  }
`;

export {
  MakingDiv,
  MenuList,
  MenuItem,
  ProducerListDiv,
  ProducerListContainer,
};
