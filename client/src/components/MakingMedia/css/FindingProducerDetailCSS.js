/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const DetailDiv = styled.div`
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

const ProducerTitleDiv = styled.div`
  width: 100%;
  height: 30%;

  padding: 30px;
  margin-top: 20px;

  display: flex;

  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  box-sizing: border-box;
  border-radius: 22px;

  .TitleImg {
    width: 50%;
    height: 100%;
    img {
      height: 250px;
      border-radius: 22px;
    }
  }
  .slick-prev {
    height: 60px;
    left: 10px;
    z-index: 1;
  }
  .slick-next {
    height: 60px;
    right: 20px;
  }
  .slick-next:before,
  .slick-prev:before {
    opacity: 1;
    color: #702c8a;
    font-weight: 800;
    font-size: 60px;
  }
  .slick-prev:before {
    content: "〈";
  }
  .slick-next:before {
    content: "〉";
  }
  .titleInfo {
    margin-left: 20px;
    width: 50%;
    .like {
      margin-bottom: 10px;
      color: #ccd2e3;
      span {
        margin-right: 10px;
        i {
          margin-left: 5px;
          color: #ff5151;
        }
        .share {
          color: #9e9e9e;
          background: #d8d8d8;
          padding: 0px 3px 0px 2px;
          border-radius: 50%;
          box-sizing: border-box;
          text-align: center;
        }
      }
    }
    .title {
      font-size: 30px;
      font-weight: 500;
      line-height: 35px;
      height: 140px;
      overflow: hidden;
    }
    .price {
      width: 100%;
      margin-top: 20px;
      font-size: 20px;
      text-align: right;
    }
    .review {
      color: #ffe459;
      span {
        margin-left: 10px;
        color: #ccd2e3;
      }
    }
  }
`;

const ContentGNBUL = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 50px;
  list-style: none;
  padding: 0px;
  margin-bottom: 0px;
  a {
    width: 100%;
    padding: 10px 0px;
    border: none;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    background: #f7efff;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    position: relative;
    margin-right: 10px;
    z-index: 1;
    color: #757575;
    &:nth-of-type(1) {
      background: #dec3f8;
      font-weight: bold;
      color: black;
    }
    &:nth-last-of-type(1) {
      margin-right: 0px;
    }
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
`;

const DetaulContentSubTitle = styled.p`
  border-bottom: 1px solid #cacaca;
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const DetailFilterDiv = styled.div`
  width: 100%;
  height: auto;
  .bgOutter {
    background: #dec3f8;
    padding: 10px;
    position: relative;
    z-index: 5;
    .bgInner {
      background: white;
      padding: 30px;
      borderradius: 10px;
    }
  }
`;

const DetailExplanationDiv = styled.div`
  padding-top: 1rem;
  div {
    margin-bottom: 20px;
    p {
      font-weight: bold;
      margin-bottom: 5px;
    }
    div {
      text-align: center;
    }
    &.workType,
    &.videoPurpose {
      span {
        background: #f7efff;
        border-radius: 16px;
        padding: 0px 10px;
        margin-right: 10px;
      }
    }
  }
`;

const PriceRuleDiv = styled.div`
  padding-top: 1rem;
`;

const FAQDiv = styled.div`
  padding-top: 1rem;
  .faq {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    div {
      width: 100%;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto;
      grid-template-areas: "heading content";
      grid-gap: 1rem;
      align-items: center;
      margin-bottom: 1rem;
      p {
        &.heading {
          grid-area: heading;
          width: auto;
          font-weight: bold;
          font-size: 20px;
        }
        &.content {
          grid-area: content;
          width: 100%;
          border: 1px solid #cacaca;
          border-radius: 8px;
          text-align: center;
          padding: 5px;
        }
      }
    }
  }
`;

const ReviewUploadDiv = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  form {
    border-radius: 8px;
    border: 1px solid #d8d8d8;
    padding: 0.5rem;
    textarea {
      resize: none;
      display: block;
      margin: 0 auto;
      border-radius: 8px 8px 0px 0px;
      border: none;
      border-left: 1px solid #d8d8d8;
      border-top: 1px solid #d8d8d8;
      border-right: 1px solid #d8d8d8;
      padding: 5px;
      padding-bottom: 10px;
      margin-bottom: 0px;
      overflow: hidden;
      background-color: white;
      &:focus {
        outline: none;
      }
    }
    .maxLength {
      display: block;
      width: 100%;
      height: auto;
      margin: 0 auto;
      text-align: right;
      margin-block-start: 0px;
      border-radius: 0px 0px 8px 8px;
      background-color: white;
      border: none;
      border-left: 1px solid #d8d8d8;
      border-bottom: 1px solid #d8d8d8;
      border-right: 1px solid #d8d8d8;
      padding-right: 10px;
      color: #d8d8d8;
      font-size: 10px;
    }
    .submit {
      text-align: left;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-between;
      margin-top: 0.5rem;
      div {
        p {
          margin-bottom: 0px;
          color: #d8d8d8;
        }
        i {
          margin-right: 5px;
          color: #ffe459;
        }
      }
      button {
        height: 50%;
        background: #935ea5;
        border: 1px solid #d8d8d8;
        border-radius: 8px;
        color: white;
        padding: 5px 10px 5px 10px;
      }
    }
  }
`;

const ReviewDiv = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: 25px 25px 1fr auto;
  grid-template-areas:
    "avatar author hambuc"
    "avatar review ."
    ". desc ."
    ". info .";
  position: relative;
  .avatar {
    grid-area: avatar;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .author {
    grid-area: author;
    p {
      margin-bottom: 0px;
      font-weight: bold;
    }
  }
  .hambuc {
    grid-area: hambuc;
    color: #c4c4c4;
    position: relative;
    text-align: center;
    i {
      cursor: pointer;
    }
  }
  .review {
    grid-area: review;
    i {
      color: #ffe459;
      &:nth-last-of-type(1) {
        margin-right: 0.5rem;
      }
    }
  }
  .desc {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    grid-area: desc;
    textarea {
      resize: none;
      display: block;
      margin: 0 auto;
      border-radius: 8px 8px 0px 0px;
      border: none;
      border-left: 1px solid #d8d8d8;
      border-top: 1px solid #d8d8d8;
      border-right: 1px solid #d8d8d8;
      padding: 5px;
      padding-bottom: 10px;
      margin-bottom: 0px;
      overflow: hidden;
      background-color: white;
      &:focus {
        outline: none;
      }
    }
    .maxLength {
      display: block;
      width: 100%;
      height: auto;
      margin: 0 auto;
      text-align: right;
      margin-block-start: 0px;
      border-radius: 0px 0px 8px 8px;
      background-color: white;
      border: none;
      border-left: 1px solid #d8d8d8;
      border-bottom: 1px solid #d8d8d8;
      border-right: 1px solid #d8d8d8;
      padding-right: 10px;
      color: #d8d8d8;
      font-size: 10px;
    }
  }
  .info {
    grid-area: info;
    .btnDiv {
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
  justify-content: center;
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

export {
  DetailDiv,
  ProducerTitleDiv,
  DetailFilterDiv,
  ContentGNBUL,
  DetaulContentSubTitle,
  DetailExplanationDiv,
  PriceRuleDiv,
  FAQDiv,
  ReviewUploadDiv,
  ReviewDiv,
  ModalDiv,
  DeleteModalDiv,
};
