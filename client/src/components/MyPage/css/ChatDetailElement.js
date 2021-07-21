/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ChatDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  margin-top: 10vh;
  margin-bottom: 10vh;
  ${mq[0]} {
    width: 80%;
  }
  ${mq[1]} {
    width: 100%;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
`;

const ChatContentDiv = styled.div`
  background: #f7f9fe;
  border-radius: 11px;
`;

export { ChatDiv, ChatContentDiv };
