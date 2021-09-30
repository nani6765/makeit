/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const RequestListDiv = styled.div`
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
      .category {
          color: #A7A5A8;
      }
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

const RequestPostCard = styled.div`
    padding: 20px;
    margin: 20px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
    box-sizing: border-box;
    border-radius: 15px;
    a {
      color: black;
      text-decoration: none;
      &hover: text-decoration: none;
    }
    .postInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
      .profile {
        span {
          margin-left: 1rem;
          font-weight: bold;
        }
      }
    }
    .title {
        padding: 20px;
        margin-left: 1rem;
    }
    .typeList {
        div {
            display: inline-block;
            width: 50%;
            color: #A5A5A5;
            font-size: 14px;
            p {
                display: inline-block;
                width: 30%;
                margin-bottom: 0px;
                border-right: 1px solid #A5A5A5;
            }
            div {
                width: 70%;
                span {
                    margin-left: 1rem;
                    background: #f7efff;
                    border-radius: 16px;
                    padding: 1px 10px;
                    color: rgba(117, 117, 117, 1);
                }
            }
        }
    }
`;

export { RequestListDiv, RequestPostCard };