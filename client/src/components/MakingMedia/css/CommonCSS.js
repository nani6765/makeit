/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MakingHeader = styled.div`
.category {
  margin-top: 10px;
  width: 100%;
  padding: 10px 15%;
  background: #EDE7F6;
  color: #702C8A;
  font-size: 24px;
  font-weight: bold;
}
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
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 70%;
  padding-top: 15px;
  margin: 0 auto;
  height: 100px;
`;

const MenuItem = styled.li`
  background: #ffffff;
  color: #702c8a;
  cursor: pointer;
  text-align: center;
  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
    ${mq[1]} {
      width: 30px;
      height: 30px;
    }
  }
  p {
    color: #702C8A;
    font-weight: bold;
    user-select: none;
    ${mq[1]} {
      font-size: 10px;
    }
  }
  &:hover {
    svg {
      width: 60px;
      height: 60px;
      ${mq[1]} {
        width: 35px;
        height: 35px;
      }
    }
  }
`;

const StickyBarDiv = styled.div`
  position: sticky;
  top: 100px;
  left: 0px;
  width: 100%;
  padding: 10px;
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
      height: auto;
      cursor: pointer;
      font-size: 15px;
      line-height: 15px;
      margin-bottom: 1.5rem;
      &:nth-last-of-type(1) {
        margin-bottom: 0px;
      }
    }
    p.active {
      font-weight: bold;
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

export { MakingHeader, MakingDiv, MenuList, MenuItem, StickyBarDiv, LinkCSS };
