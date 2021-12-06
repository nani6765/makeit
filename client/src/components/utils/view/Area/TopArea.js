import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const headerBp = [1920, 1440, 1024, 960, 768, 480, 360, 320];
const headerbq = headerBp.map((bp) => `@media (max-width: ${bp}px)`);

let TopAreaDiv = styled.div`
  padding-top: 115px;
  ${headerbq[1]} {
    padding-top: 119px;
  }
  ${headerbq[2]} {
    padding-top: 91px;
  }
  ${headerbq[3]} {
    padding-top: 82px;
  }
  ${headerbq[5]} {
    padding-top: 72px;
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
