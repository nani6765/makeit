/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const FilterDiv = styled.div`
    display: grid;
    grid-template-columns: 20% 30% 15% 35%;
    grid-template-rows: 70px 70px;
    grid-template-areas:
        "deadlineLabel deadline priceLabel price"
        "portfolioLabel portfolio portfolio portfolio";
    background: #EDE7F6;
    border-radius: 15px 15px 0 0;
    .deadlineLabel {
        grid-area: deadlineLabel;
        text-align: center;
        font-weight: bold;
        font-size: 100%;
        margin: 0px;
        line-height: 70px;
    }
    .deadline {
        grid-area: deadline;
        padding: 15px 0;
        border-radius: 8px;
        span {
          display: none;
        }
        .css-yk16xz-control {
            border-radius: 8px;
            path {
              color: #702c8a;
            }
        }
    }
    .priceLabel {
        grid-area: priceLabel;
        text-align: center;
        font-weight: bold;
        font-size: 100%;
        margin: 0px;
        line-height: 70px;
    }
    .price {
        grid-area: price;
        line-height: 70px;
        input {
            margin: 15px 5px;
            height: 40px;
            border: 1px solid #D8D8D8;
            border-radius: 8px;
            text-align: right;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
    }
    .portfolioLabel {
        grid-area: portfolioLabel;
        text-align: center;
        font-weight: bold;
        font-size: 100%;
        margin: 0px;
        line-height: 70px;
    }
    .portfolio {
        grid-area: portfolio;
        line-height: 70px;
    }
`;

const ContentDiv = styled.div`
width: 100%;
border-radius: 0px 0px 15px 15px;
padding: 20px;
display: flex;
flex-wrap: wrap;
align-content: center;
flex-direction: column;
textarea {
  min-height: 350px;
  border: none;
  width: 100%;
  resize: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    word-break: keep-all;
    font-weight: 300;
    font-size: 12px;
    color: #9f9f9f;
    text-align: center;
    padding-top: 100px;
    line-height: 20px;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 15px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #c6c6c6;
    border-radius: 15px;
    box-shadow: inset 0px 0px 5px white;
  }
  ${mq[0]} {
    min-height: 400px;
    &::placeholder {
      padding-top: 100px;
    }
  }
  ${mq[1]} {
    min-height: 300px;
    &::placeholder {
      padding-top: 15px;
    }
  }
}
`;

const VideoUploadDiv = styled.div`
  .reference {
    display: block;
    padding: 10px;
    background: #fff;
    border-radius: 0px;
    border-bottom: 1px solid #CACACA;

    font-weight: bold;
    color: black;
  }
  p {
    margin-bottom: 0px;
  }
  span {
    margin-left: 1rem;
    font-weight: bold;
    .curentLength {
      margin-left: 0rem;
      color: red;
    }
  }
  .videoSearch {
    display: flex;
    align-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 20px;
    button {
      margin-left: 1rem;
      border-radius: 14px;
      font-weight: bold;
      display: inline-box;
      padding: 5px 10px 5px 10px;
      &.search {
        border: 1px solid #935ea5;
        background-color: #935ea5;
        color: white;
      }
    }
  }

  .showSelectedVideo {
    height: 100%;
    list-style: none;
    padding: 0px;
    li {
      display: flex;
      align-content: center;
      align-items: center;
      margin-bottom: 1rem;
      height: 100%;
      .deleteArea {
        height: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {
          color: red;
          margin-bottom: 0.5rem;
        }
      }
      img {
        width: 120px;
        height: 80px;
        margin-left: 1rem;
        margin-right: 1rem;
      }
      p {
        word-break: keep-all;
        font-size: 12px;
        &.channel {
          color: #c6c6c6;
          font-size: 10px;
        }
      }
    }
  }
`;

const YoutubeDiv = styled.div`
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
    .searchDiv {
      background: #ffffff;
      box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.25);
      border-radius: 11px;
      z-index: 51;
      position: fixed;
      width: 50%;
      padding: 20px;
      .searchNotice {
        color: red;
        font-size: 10px;
        opacity: 0.8;
        margin-bottom: 0.5rem;
      }
      .inputDiv {
        display: grid;
        width: 100%;
        grid-template-columns: 8fr 2fr;
        grid-template-rows: auto;
        grid-template-areas: "input btn";
        input {
          grid-area: "input";
          &:focus,
          &:active {
            outline: none;
          }
        }
        button {
          grid-area: "btn";
          background: #935ea5;
          color: white;
          font-weight: bold;
          border: 1px solid #935ea5;
        }
      }
      .resultList {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 0px;
        li {
          margin-bottom: 1rem;
          display: flex;
          align-content: center;
          align-items: center;
          img {
            width: 60px;
            height: 60px;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
          }
          &:nth-last-of-type(1) {
            margin-bottom: 0px;
          }
          p {
            word-break: keep-all;
            font-size: 12px;
            &.channel {
              color: #c6c6c6;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
`;

const GNBDiv = styled.div`
    margin: 30px 10px;
    .public {
        float: left;
        span {
            margin-left: 10px;
            font-weight: bold;
        }
    }
    .btnDiv {
        float: right;
        button {
            padding: 5px 30px;
            border-radius: 10px;
        }
        .cancel {
            background: #fff;
            border: 1px solid #DEDEDE;
            color: #935EA5;
        }
        .submit {
            background: #935EA5;
            color: #fff;
            border: none;
            margin-left: 15px;
        }
    }
`;

export { FilterDiv, ContentDiv, VideoUploadDiv, YoutubeDiv, GNBDiv };