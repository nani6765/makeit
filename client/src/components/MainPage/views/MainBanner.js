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
    height: 450px;
    overflow: hidden;
    background-image: url("/Img/BannerBackground.png");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
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
        <Banner>
          <img
            css={BannerImg}
            src={process.env.PUBLIC_URL + "/Img/BackgroundContent.png"}
            alt=""
          />
        </Banner>
      </div>
    </>
  );
}

export default MainBanner;
