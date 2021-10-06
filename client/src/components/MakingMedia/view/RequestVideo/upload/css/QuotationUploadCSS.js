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
`;

export { FilterDiv, VideoUploadDiv };