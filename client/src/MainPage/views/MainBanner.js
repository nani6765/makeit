import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

let BannerDiv = styled.div`
  padding-top: 80px;
  ${mq[0]} {
    padding-top: 80px;
  }
  ${mq[1]} {
    padding-top: 60px;
  }
`;

let Banner = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(/Img/BannerBackground.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-flex;
  align-items: center;
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

function ContentBanner() {
  return (
    <>
      <BannerDiv>
        <Banner>
          <img
            src={process.env.PUBLIC_URL + "/Img/BackgroundContent.png"}
            alt=""
            css={BannerImg}
          />
        </Banner>
      </BannerDiv>
    </>
  );
}

export default ContentBanner;
