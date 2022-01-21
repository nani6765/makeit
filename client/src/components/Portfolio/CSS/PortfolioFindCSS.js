/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const FPListDiv = styled.div`
max-width: 1160px;
margin: 0 auto;
`;

const ListTopAreaDiv = styled.div`
width: 100%;
text-align: right;
margin: 1rem auto;
display: flex;
justify-content: space-between;

.upload {
  button {
    background: #5a278b;
    border: 1px solid #5a278b;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0.5rem;
    color: white;
    font-weight: bold;
  }
}
#sort {
  display: inline-block;
  button {
    background-color: #fff;
    color: black;
    border-radius: 3px;
    border: 1px solid #acb0b4;
    font-weight: bold;
    padding: 6px 3px;
    font-size: 12px;
    width: 5rem;
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
    background-color: #fff;
    border: 1px solid #acb0b4;
    max-width: 5rem;
    min-width: 5rem;
    .dropdown-item {
      color: #bfbfbf;
      font-weight: bold;
      font-size: 12px;

      &:hover {
        background: none;
      }
    }
    .active {
      color: #5a278b;
      background: none;
    }
  }
}
`;

const PortfolioListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  a {
    color: black;
    text-decoration: none;
    &hover: text-decoration: none;
  }
`;

const PortfolioCard = styled.div`
  width: 269px;
  height: auto;
  margin-right: 20px;
  margin-top: 20px;
  position: relative;
  &:nth-of-type(4n) {
    margin-right: 0;
  }
  &:nth-child(n):nth-child(-n+4) {
    margin-top: 0;
  }
  ${mq[0]} {
    width: 50%;
    padding: 0.5rem;
    margin: 0;
  }
  ${mq[1]} {
    width: 100%;
    padding: 0.5rem;
    margin: 0;
  }
  .card {
    border: none;
    display: grid;
    height: 100%;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: auto;
    grid-template-areas:
    "profileImg"
    "title" 
    "info"
    "field";
    position: relative;
    p {
      height: auto;
      align-items: center;
      font-weight: 600;
      font-size: 18px;
    }
    .profileImg {
      grid-area: profileImg;
      display: block;
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .title {
      grid-area: title;
      margin-top: 12px;
      padding: 0 12px;
      word-break: keep-all;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .info {
      grid-area: info;
      margin-top: 12px;
      padding: 0 12px;
    }
    .field {
      grid-area: field;
      margin: 12px 0;
      padding: 0 12px;
      text-align: right;
    }
  }    
}
`;

export { FPListDiv, ListTopAreaDiv, PortfolioListContainer, PortfolioCard };