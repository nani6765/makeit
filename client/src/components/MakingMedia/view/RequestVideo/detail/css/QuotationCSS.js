/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const QuotationDiv = styled.div`
  margin-top: 50px;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .slick-prev {
  height: 60px;
  left: 0px;
  z-index: 1;
  background: none;
  }
  .slick-next {
  height: 60px;
  right: 0px;
  background: none;
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
`;

const NoQuotationDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    p {
      color: #6F6767;
      margin-bottom: 20px;
    }
    button {
      background: #935EA5;
      color: #fff;
      border-radius: 10px;
      border: none;
      padding: 10px 15px;
    }
`;

const QuotationInfo = styled.div`
  padding: 30px 0px;
  .quotationList {
    width: 100%;
    padding: 0px 30px;
    .slick-list {
      padding-bottom: 30px;
    }
  }
  .btnDiv {
    display: flex;
    margin-top: 40px;
    justify-content: center;
    button {
      background: #935EA5;
      color: #fff;
      border-radius: 10px;
      border: none;
      padding: 10px 15px;
    }
  }
`;

const LinkCSS = css`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const InfoDiv = styled.div`
    display: inline-block;
    width: 30%;
    padding: 10px;
    .container {
      padding: 20px;
      background: #fff;
      box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 10px rgba(163, 1, 79, 0.05);
      border-radius: 15px;
      p {
        margin-top: 20px;
        color: #A7A5A8;
        font-size: 15px;
        i {
          margin-left: 1rem;
          color: #FF5151;
        }
        ${mq[0]} {
          margin-top: 10px;
          font-size: 13px;
        }
      }
      .quotationTitle {
        color: black;
        min-height: 50px;
        font-size: 17px;
        line-height: 25px;
        ${mq[0]} {
          font-size: 15px;
          min-height: 75px;
        }
      }
      .filter {
        margin: 20px 0px;
        border-top: 1px solid #A7A5A8;
        p {
          margin: 0px;
          padding: 10px 0px;
          border-bottom: 1px solid #A7A5A8;
        }
      }
    }
    .active {
      background: #FAF5F5;
    }
`;

const QuotationDetailDiv = styled.div`
  border : 15px solid #EDE7F6;
  border-radius: 54px;
  margin: 0 30px;
  padding: 40px 30px;
  .detailTitle {
    font-size: 20px;
    text-align: center;
  }
  .filter {
    margin: 30px 0px;
    border-top: 1px solid #A7A5A8;
    div {
      border-bottom: 1px solid #A7A5A8;
      width: 100%;
      span {
        width: 15%;
        font-weight: bold;
      }
      p {
        display: inline-block;
        margin-left: 10%;
        margin-bottom: 0;
        padding: 10px 0px;
      }
      .portfolio {
        width: 70%;
        text-align: center;
      }
    }
  }
  .content {
    margin: 60px 0;
    white-space: pre;
    line-height: 30px;
  }
  .reference {
    p {
      padding-bottom: 10px;
      font-weight: bold;
      border-bottom: 1px solid #CACACA;
    }
    .slick-slide {
      padding: 10px;
    }
    iframe {
      border-radius: 18px;
    }
  }
`;

export { QuotationDiv, LinkCSS, NoQuotationDiv, QuotationInfo, InfoDiv, QuotationDetailDiv };