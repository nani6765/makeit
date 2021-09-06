/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MakingDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
  ${mq[1]} {
    width: 90%;
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuItem = styled.li`
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 22px;
  color: #702c8a;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  &.active {
    background: #faf5f5;
  }
`;

const ProducerListDiv = styled.div`
  position: relative;
  margin-top: 30px;
  width: 70%;
  height: auto;
  padding: auto 0px;
  left: 30%;
  div {
    height: 4vh;
    align-items: center;
    .category {
      float:left;
      height: 100%;
      color: #A7A5A8;
      font-size: 15px;
      line-height: 100%;
    }
    #sort {
      float: right;
      #dropdown-basic {
        border: 1.5px solid #EAEAEA;
        background: #fff;
        color: black;
        border-radius: 16px;
        padding: 0px;
        margin: 0px;
      }
    }
  }
`;

const ProducerDiv = styled.div`
  width: 30%;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  box-sizing: border-box;
  border-radius: 22px;
`;

export { MakingDiv, MenuList, MenuItem, ProducerListDiv, ProducerDiv };
