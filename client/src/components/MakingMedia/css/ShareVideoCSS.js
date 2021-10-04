/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ShareVideoDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
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
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0px;
`;

export { ShareVideoDiv, MenuList };
