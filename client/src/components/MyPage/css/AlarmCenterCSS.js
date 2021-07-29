/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const AlarmContentDiv = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 110.5px;
  padding: 10px 20px 10px 20px;
  margin-bottom: 20px;
`;

const ChatContent = styled.div``;

export { AlarmContentDiv, ChatContent };
