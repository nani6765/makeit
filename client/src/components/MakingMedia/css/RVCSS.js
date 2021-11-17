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
      display: inline-block;
      button {
        float: right;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        padding: 7px 10px;
        background: #5A278B;
        border: none;
        border-radius: 3px;
        svg {
          margin-left: 3px;
        }
      }
    }
    .FNB {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 20px;
      padding-top: 20px;
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
          border-right: 1.5px solid #C9C9C9;
          color: #C9C9C9;
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

const RequestPostCard = styled.div`
  padding: 20px;
  margin: 20px;
  margin-left: 0px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  box-sizing: border-box;
  border-radius: 15px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 50px 1fr 1fr 50px;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "profile author date date"
    ". title title title"
    "type type purpose purpose";
  margin-bottom: 1rem;
  color: black;
  text-decoration: none;

  .profile {
    grid-area: profile;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .author {
    grid-area: author;
    font-weight: bold;
    display: flex;
    align-content: center;
    align-items: center;
  }
  .date {
    grid-area: date;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
  }

  .title {
    grid-area: title;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .tag {
    display: flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    p {
      color: #a5a5a5;
      font-size: 14px;
      position: relative;
      &::after {
        content: "|";
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
    &.type {
      grid-area: type;
    }
    &.purpose {
      grid-area: purpose;
    }
    span {
      background: #f7efff;
      border-radius: 16px;
      width: auto;
      height: auto;
      font-size: 12px;
      padding: 5px 8px 5px 8px;
      color: #757575;
      margin-right: 0.5rem;
    }
  }
`;

export { RequestListDiv, RequestPostCard };
