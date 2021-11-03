/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const FooterDiv = styled.div`
  display: flex;
  background: #cdabe9;
  ${mq[1]} {
    margin-bottom: 75px;
  }
`;

const FooterArea = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
  ${mq[1]} {
    width: 90%;
  }
`;

const FooterMenuArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 20px;
  border-bottom: 1px solid #ececec;
  div {
    margin-right: 20px;
    p {
      font-weight: 700;
      font-size: 14px;
      color: #eee;
      padding: 16px 0;
      line-height: 1.43;
      word-break: keep-all;
      ${mq[0]} {
        font-size: 12px;
      }
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
  justify-content: flex-start;
  font-size: 12px;
  line-height: 1.5;
  .mobileHidden {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: stretch;
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

export {
  FooterDiv,
  FooterArea,
  FooterMenuArea,
  FooterContentArea,
  MobileFooterDiv,
};
