import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const headerBp = [1160, 480];
const headerbq = headerBp.map((bp) => `@media (max-width: ${bp}px)`);

let TopAreaDiv = styled.div`
  padding-top: 119px;
  ${headerbq[0]} {
    padding-top: 95px;
  }
  ${headerbq[1]} {
    padding-top: 68.350px;
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
