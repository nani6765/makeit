/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const FilterDiv = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2.5fr 1fr 5fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "categorylabel category pricelabel price"
    "deadlinelabel deadline filmTypelabel filmType"
    "Uniquenesslabel Uniqueness Uniqueness Uniqueness";
  background: #ede7f6;
  border-radius: 15px 15px 0px 0px;
  .categorylabel {
    padding: 20px 0px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 100%;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .category {
    grid-area: category;
    padding: 20px 10px 20px 0px;
    line-height: 100%;
    display: flex;
    align-items: center;
    .categoryList {
      width: 100%;
      span {
        display: none;
      }
      path {
        color: #702c8a;
      }
    }
  }
  .pricelabel {
    grid-area: pricelabel;
    padding: 20px 0px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 100%;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .price {
    grid-area: price;
    padding: 20px 0px;
    input {
      display: inline-block;
      margin-left: 5px;
      height: 100%;
      width: 30%;
      border: 1px solid #d8d8d8;
      border-radius: 8px;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    p {
      margin-left: 10px;
      display: inline-block;
    }
  }
  .deadlinelabel {
    grid-area: deadlinelabel;
    padding: 20px 0px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 100%;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .deadline {
    grid-area: deadline;
    padding: 20px 10px 20px 0px;
    display: flex;
    align-items: center;
    .react-datepicker-wrapper {
      width: 100%;
      height: 100%;
      .react-datepicker__input-container {
        width: 100%;
        height: 100%;
        .date {
          width: 100%;
          height: 100%;
          border: 1px solid #d8d8d8;
          border-radius: 8px;
          text-align: center;
        }
      }
    }
  }
  .filmTypelabel {
    grid-area: filmTypelabel;
    padding: 20px 0px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 100%;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .filmType {
    grid-area: filmType;
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    .setFilmType {
      display: inline-block;
      width: 100%;
      label {
        margin-left: 10px;
        width: 30%;
        input {
          margin-right: 5px;
          border-radius: 0px;
        }
      }
    }
  }
  .Uniquenesslabel {
    grid-area: Uniquenesslabel;
    padding: 20px 0px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 100%;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Uniqueness {
    grid-area: Uniqueness;
    padding: 20px 40px 20px 0px;
    input {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      border: 1px solid #d8d8d8;
    }
    p {
      margin-bottom: 0px;
      font-size: 12px;
      color: #a7a5a8;
    }
  }
`;

export default FilterDiv;
