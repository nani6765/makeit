/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const FooterMenuArea = styled.div`
  display: flex;

  div {
    margin-right: 100px;
    p {
      font-weight: bold;
      font-size: 16px;
      color: #454343;
      line-height: 16px;
      word-break: keep-all;
    }
  }
  ${mq[1]} {
    flex-direction: column;
    justify-content: normal;
    padding: 10px 20px 0;
    border-bottom: none;
    div {
      border-bottom: 1px solid #b182c2;
    }
    .mobileHidden {
      display: none;
    }
  }
`;

const FooterContentArea = styled.div`
  display: flex;
  padding: 1rem 20px;
  justify-content: center;
  font-size: 14px;
  line-height: 1.5;
  .mobileHidden {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: stretch;
    color: #454343;
    &:first-of-type {
      margin-right: 3rem;
    }
  }
  .onlyMoblie {
    display: none;
    color: #b182c2;
  }
  ${mq[0]} {
    font-size: 10px;
  }
  ${mq[1]} {
    display: block;
    text-align: center;
    .mobileHidden {
      display: none;
    }
    .onlyMoblie {
      display: block;
    }
  }
`;
const MobileFooterDiv = styled.div`
  display: none;
  background-color: white;
  flex: 1;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 75px;
  max-height: 75px;
  min-height: 75px;
  ${mq[1]} {
    display: block;
    ul {
      width: 90%;
      display: flex;
      justify-content: space-between;
      padding-top: 15px;
      padding-bottom: 15px;
      list-style: none;
      margin: 0 auto;
      li {
        width: auto;
        margin-left: 0px;
        text-align: center;
        color: #efe9e9;
        a {
          font-size: 11px;
          color: #efe9e9;
          i {
            font-size: 30px;
          }
        }
      }
      .active {
        a {
          color: #aa5ddd;
          path {
            stroke: #aa5ddd;
          }
          svg {
            rect {
              stroke: #aa5ddd;
            }
          }
        }
      }
    }
  }
`;

export { FooterMenuArea, FooterContentArea, MobileFooterDiv };
