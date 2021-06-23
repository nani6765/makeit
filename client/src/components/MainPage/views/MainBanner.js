import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function MainBanner() {
  const breakpoints = [1200, 576];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  let Banner = styled.img`
    width: 100%;
    height: 450px;
    overflow: hidden;
    ${mq[0]} {
      height: 300px;
    }
  `;

  let BannerImg = css`
    display: block;
    margin: 0 auto;
    width: 80%;
    ${mq[0]} {
      width: 100%;
      height: 50%;
    }
  `;

  return (
    <>
      <div>
        <Banner src={process.env.PUBLIC_URL + "/Img/MainBanner.jpg"} alt="" />
      </div>
    </>
  );
}

export default MainBanner;
