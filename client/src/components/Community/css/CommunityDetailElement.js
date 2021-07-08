/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const DetailDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  padding: 30px;
  .content {
    display: grid;
    grid-template-columns: 50px 100px 1fr 50px;
    grid-template-rows: 25px 25px auto auto auto auto;
    grid-template-areas:
      "avatar author author hambuc"
      "avatar date date ."
      "title title title title"
      "desc desc desc desc"
      "image image image image"
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
      justify-content: flex-end;
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
    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .desc {
      grid-area: desc;
      text-align: left;
      word-break: keep-all;
    }
    .image {
      grid-area: image;
      margin-top: 30px;
      img {
        width: 300px;
        ${mq[0]} {
          width: 100%;
        }
      }
    }
    .like {
      grid-area: like;
      text-align: right;
      margin-top: 30px;
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
  }
  ${mq[1]} {
    width: 90%;
    padding: 20px;
  }
`;

const ModalDiv = styled.div`
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  position: absolute;
  right: 10px;
  top: 20px;
  min-width: 150px;
  min-height: 70px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  div {
    button {
      width: 100%;
      margin: 0;
      padding: 0;
      border: none;
      text-aling: center;
      background-color: rgba(255, 255, 255, 1);
    }
    .edit {
      i {
        margin-right: 1rem;
      }
    }
    .delete {
      margin-top: 10px;
      display: inline;
      color: #d70000;
      i {
        margin-right: 1rem;
      }
    }
  }
`;

const GNBMobileContentDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const RepleDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  ${mq[1]} {
    width: 90%;
  }
`;

const RepleBtnDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  button {
    background: #faf5f5;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 22px;
    padding: 5px 25px 5px 25px;
  }
  .total {
    color: black;
    i {
      margin-right: 5px;
    }
  }
  .left {
    font-weight: 600;
    color: #702c8a;
  }
`;

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

const RepleUploadDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  form {
    width: 100%;
    input {
      width: 100%;
      background: #ffffff;
      border: none;
      box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
        0px 9px 30px rgba(163, 1, 79, 0.05);
      border-radius: 15px;
      padding: 20px;
      margin-bottom: 15px;
      &::placeholder {
        font-weight: 300;
        font-size: 12px;
        text-align: center;
        color: #9f9f9f;
      }
      &:focus {
        outline: none;
      }
    }
    div {
      width: 100%;
      text-align: right;
      button {
        background: #935ea5;
        padding: 5px 10px 5px 10px;
        border: none;
        color: white;
        border-radius: 10px;
        font-weight: bold;
        i {
          margin-left: 10px;
        }
      }
    }
  }
  ${mq[1]} {
    width: 90%;
    padding: 20px;
  }
`;

const RerepleUploadDiv = styled.div`
  width: 95%;
  margin-left: 5%;
  padding: 20px;
  background: #fbf7fb;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  form {
    width: 100%;
    height: auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 50px 100px 1fr 70px 70px;
    grid-template-rows: 25px 25px auto auto;
    grid-template-areas:
      "avatar name . . ."
      "avatar inputContent inputContent inputContent inputContent"
      ". inputContent inputContent inputContent inputContent"
      ". . . cancel submit";
    .avatar {
      grid-area: avatar;
    }
    .name {
      grid-area: name;
    }
    .inputContent {
      grid-area: inputContent;
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
    .cancel {
      grid-area: cancel;
      background: #ffffff;
      border: 1px solid #935ea5;
      box-sizing: border-box;
      border-radius: 10px;
      color: black;
    }
    .submit {
      grid-area: submit;
      background: #935ea5;
      border: 1px solid #935ea5;
      border-radius: 10px;
      color: white;
    }
    ${mq[1]} {
      grid-template-columns: 50px auto 1fr 50px 5px 50px;
      grid-template-rows: 50px auto auto;
      grid-gap: 0px;
      grid-template-areas:
        "avatar name . . . ."
        "inputContent inputContent inputContent inputContent inputContent inputContent"
        ". . . cancel . submit";
      .name {
        grid-area: name;
        align-self: center;
        display: flex;
        margin-bottom: 0px;
        margin-left: 10px;
      }
      .inputContent {
        padding: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .cancel {
        font-size: 12px;
      }
      .submit {
        font-size: 12px;
      }
    }
  }

  ${mq[1]} {
    width: 90%;
    padding: 10px;
  }
`;

const DeleteModalDiv = styled.div`
  .content {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    .background {
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      z-index: 50;
    }
    .gridDiv {
      background: #ffffff;
      box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.25);
      border-radius: 11px;
      display: grid;
      grid-template-columns: 1fr 8fr 1fr;
      grid-gap: 5px;
      grid-template-rows: auto auto auto;
      padding: 20px;
      grid-template-areas:
        ". title delete"
        ". desc ."
        ". buttonDiv .";
      z-index: 51;
      position: fixed;
      .title {
        grid-area: title;
        text-align: center;
        color: #000000;
        font-weight: bold;
      }
      .delete {
        grid-area: delete;
        text-align: center;
        color: #000000;
        padding: 5px;
        cursor: pointer;
      }
      .desc {
        grid-area: desc;
        color: #000000;
        line-height: 25px;
      }
      .buttonDiv {
        margin-top: 20px;
        grid-area: buttonDiv;
        text-align: center;
        button {
          box-sizing: border-box;
          border-radius: 16px;
          padding: 5px 10px 5px 10px;
          width: auto;
          &.cancel {
            background: #ffffff;
            border: 1.5px solid #000000;
            color: black;
            margin-right: 20px;
          }
          &.delete {
            background: #d70000;
            border: 1.5px solid #d70000;
            color: white;
          }
        }
      }
    }
  }
`;

const RerepleContentGrid = styled.div`
  width: 95%;
  margin-left: 5%;
  background: #FBF7FB;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  padding: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;

  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 50px 100px 1fr 50px;
    grid-template-rows: 25px 25px auto auto auto;
    grid-template-areas:
      "avatar author author hambuc"
      "avatar date date ."
      "desc desc desc desc"
      ". . like like";
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
      input{
         width: 100%;
          background: #ffffff;
          border: 1.5px solid #dfdfdf;
          box-sizing: border-box;
          border-radius: 7px;
          padding: 10px;
           margin-bottom:10px;
          &:focus {
            outline: none;
          }
      }
      div{
        width: 100%;
        text-align: right;
        button{
          border-radius: 10px;
          padding: 5px 10px 5px 10px;
        }
        .cancel{
          background: #FFFFFF;
          border: 1px solid #935EA5;
          box-sizing: border-box;
          
          color: black;
          margin-right: 10px;
        }
        .submit{
          background: #935EA5;
          border: 1px solid #935EA5;
          color: white;
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
  /*
  &:before{
    content: "↳";
    position: absolute;
    left: -35px;
    top: -5px;
    font-size: 24px;
    color: #D0D5E4;
    ${mq[0]} {
      display: none;
    }
  }
  */
`;

export {
  DetailDiv,
  GNBMobileContentDiv,
  ModalDiv,
  RepleDiv,
  RepleBtnDiv,
  RepleContentGrid,
  RepleUploadDiv,
  DeleteModalDiv,
  RerepleUploadDiv,
  RerepleContentGrid,
};
