/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const FooterDiv = styled.div`
    height: auto;
    min-height: 300px;
    background: #cdabe9;
  }
`;

const FooterArea = styled.div`
    width:70%;
    margin: 0 auto;
    padding-top:5vh;
    padding-bottom:5vh;
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
  height: auto;
  ${mq[1]} {
    display: block;
    ul {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding-top: 15px;
      padding-bottom: 15px;
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
        }
      }
    }
  }
`;

export { FooterDiv, FooterArea, MobileFooterDiv };
