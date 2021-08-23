/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const RepleContentGrid = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  padding: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 50px 100px 1fr 50px;
    grid-template-rows: 25px 25px auto auto auto;
    grid-template-areas:
      "avatar author author hambuc"
      "avatar date date ."
      "desc desc desc desc"
      "like like like like";
    .avatar {
      grid-area: avatar;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .author {
      grid-area: author;
      text-align: left;
      font-weight: bold;
      margin-left: 1rem;
      margin-bottom: 0px;
    }
    .hambuc {
      grid-area: hambuc;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #c4c4c4;
      position: relative;
    }
    .date {
      grid-area: date;
      text-align: left;
      color: #5b4949;
      margin-left: 1rem;
      margin-bottom: 0px;
    }
    .desc {
      grid-area: desc;
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: 15px;
      text-align: left;

      .edit {
        input {
          width: 100%;
          background: #ffffff;
          border: 1.5px solid #dfdfdf;
          box-sizing: border-box;
          border-radius: 7px;
          padding: 15px;
          &:focus {
            outline: none;
          }
        }
        div {
          width: 100%;
          text-align: right;
          margin-top: 15px;
          button {
            border-radius: 10px;
            text-align: center;
            padding: 5px 15px 5px 15px;

            &.cancel {
              background: #ffffff;
              border: 1px solid #935ea5;
              color: #000000;
              margin-right: 15px;
            }
            &.submit {
              background: #935ea5;
              border: 1px solid #935ea5;
              font-weight: bold;
              color: #ffffff;
            }
          }
        }
      }
    }
    .like {
      grid-area: like;
      text-align: right;
      margin-top0px;
      button {
        padding: 0px;
        border: none;
        background-color: rgba(255, 255, 255, 0);
        i {
          margin-right: 5px;
        }
        &.active {
          color: #935ea5;
          font-weight: bold;
        }
        &:active,
        &:focus {
          border: none;
        }
    }
  }
`;

const RepleDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  ${mq[1]} {
    width: 90%;
  }
`;

export { RepleContentGrid, RepleDiv };
