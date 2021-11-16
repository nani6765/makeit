/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MakingHeader = styled.div`
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05);
`;

const MakingDiv = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  padding-bottom: 10vh;
  ${mq[1]} {
    width: 90%;
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  width: 70%;
  margin: 0 auto;
  padding: 1rem 0;
`;

const MenuItem = styled.li`
  background: #ffffff;
  cursor: pointer;
  text-align: center;
  margin-right: 2rem;
  p {
    font-weight: bold;
    user-select: none;
    ${mq[1]} {
      font-size: 10px;
    }
  }
  .active {
    color: #61057D;
  }
`;

const StickyBarDiv = styled.div`
  position: sticky;
  top: 100px;
  left: 0px;
  width: 100%;
  padding: 10px;
  background-color: #fff;
  user-select: none;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  .subCategory {
    margin-top: 10px;
    p {
      height: auto;
      cursor: pointer;
      font-size: 15px;
      line-height: 15px;
      margin-left: 1.5rem;
      margin-bottom: 1rem;
      font-weight: bold;
      &:first-of-type {
        margin-left: 0.5rem;
      }
    }
    p.active {
      color: #5A278B;
    }
  }
`;

const LinkCSS = css`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

export { MakingHeader, MakingDiv, MenuList, MenuItem, StickyBarDiv, LinkCSS };
