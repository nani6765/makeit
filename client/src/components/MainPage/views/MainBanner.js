import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function MainBanner() {
  const breakpoints = [1200, 576];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  let Banner = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    ${mq[0]} {
      height: 200px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  `;

  return (
    <>
      <div>
        <Banner>
          <img src={process.env.PUBLIC_URL + "/Img/MainBanner.png"} alt="" />
        </Banner>
      </div>
    </>
  );
}

export default MainBanner;
