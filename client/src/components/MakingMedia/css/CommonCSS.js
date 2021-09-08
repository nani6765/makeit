/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MakingDiv = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  padding-top: 2vh;
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

const DescriptionDiv = styled.div`
  background: #c4c4c4;
  width: 100%;
  height: auto;
  left: 0px;
  text-align: center;
  line-height: 200%;
  padding: 30px;
  font-size: 20px;
  ${mq[1]} {
    font-size: 12px;
  }
`;

const StickyBarDiv = styled.div`
  position: sticky;
  top: 100px;
  left: 0px;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  text-align: center;
  .category {
    height: 40px;
    color: #702c8a;
    font-size: 20px;
    font-weight: bold;
  }
  .subCategory {
    margin-top: 10px;
    p {
      height: 35px;
    }
    p.active {
      font-weight: bold;
    }
  }
`;

export { MakingDiv, MenuList, MenuItem, DescriptionDiv, StickyBarDiv };
