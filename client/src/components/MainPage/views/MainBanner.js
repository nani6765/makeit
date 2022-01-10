import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function MainBanner() {
  const breakpoints = [1160, 480];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  let Banner = styled.div`
    width: 100%;
    max-width: 1920px;
    height: auto;
    position: relative;
    height: 280px;
    margin: 0 auto;
    ${mq[0]} {
      height: 288px;
    }
    ${mq[1]} {
      height: 178px;
    }
    div {
      width: 100%;
      height: 100%;
      padding-top: 280px;
      background-image: url("/Img/Banner/1920.png");
      background-size: 1920px;
      background-position: 50%, 50%;
      ${mq[0]} {
        padding-top: 288px;
        background-image: url("/Img/Banner/1440.png");
        background-size: 1440px;
      }
      ${mq[1]} {
        padding-top: 178px;
        background-image: url("/Img/Banner/480.png");
        background-size: 480px;
      }
    }
  `;

  return (
    <Banner>
      <div></div>
    </Banner>
  );
}

export default MainBanner;
