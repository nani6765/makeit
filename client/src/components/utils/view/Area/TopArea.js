import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

let TopAreaDiv = styled.div`
  padding-top: 123px;
  ${mq[0]} {
    padding-top: 123px;
  }
  ${mq[1]} {
    padding-top: 123px;
  }
`;

function TopArea() {
  return (
    <>
      <TopAreaDiv />
    </>
  );
}

export default TopArea;
