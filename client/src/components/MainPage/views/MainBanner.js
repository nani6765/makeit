import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function MainBanner() {
  const breakpoints = [1920, 1440, 1024, 960, 480, 360, 320];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  let Banner = styled.div`
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: 100%;
      display: none;
      &:nth-of-type(1) {
        display: block;
      }
      ${mq[0]} {
        &:nth-of-type(1) {
          display: block;
        }
        &:nth-of-type(2) {
          display: none;
        }
        &:nth-of-type(3) {
          display: none;
        }
        &:nth-of-type(4) {
          display: none;
        }
        &:nth-of-type(5) {
          display: none;
        }
        &:nth-of-type(6) {
          display: none;
        }
        &:nth-of-type(7) {
          display: none;
        }
      }
      ${mq[1]} {
        &:nth-of-type(1) {
          display: none;
        }
        &:nth-of-type(2) {
          display: block;
        }
        &:nth-of-type(3) {
          display: none;
        }
        &:nth-of-type(4) {
          display: none;
        }
        &:nth-of-type(5) {
          display: none;
        }
        &:nth-of-type(6) {
          display: none;
        }
        &:nth-of-type(7) {
          display: none;
        }
      }
      ${mq[2]} {
        &:nth-of-type(1) {
          display: none;
        }
        &:nth-of-type(2) {
          display: none;
        }
        &:nth-of-type(3) {
          display: block;
        }
        &:nth-of-type(4) {
          display: none;
        }
        &:nth-of-type(5) {
          display: none;
        }
        &:nth-of-type(6) {
          display: none;
        }
        &:nth-of-type(7) {
          display: none;
        }
      }
      ${mq[3]} {
        &:nth-of-type(1) {
          display: none;
        }
        &:nth-of-type(2) {
          display: none;
        }
        &:nth-of-type(3) {
          display: none;
        }
        &:nth-of-type(4) {
          display: block;
        }
        &:nth-of-type(5) {
          display: none;
        }
        &:nth-of-type(6) {
          display: none;
        }
        &:nth-of-type(7) {
          display: none;
        }
      }
      ${mq[4]} {
        &:nth-of-type(1) {
          display: none;
        }
        &:nth-of-type(2) {
          display: none;
        }
        &:nth-of-type(3) {
          display: none;
        }
        &:nth-of-type(4) {
          display: none;
        }
        &:nth-of-type(5) {
          display: block;
        }
        &:nth-of-type(6) {
          display: none;
        }
        &:nth-of-type(7) {
          display: none;
        }
      }
      ${mq[5]} {
        &:nth-of-type(1) {
          display: none;
        }
        &:nth-of-type(2) {
          display: none;
        }
        &:nth-of-type(3) {
          display: none;
        }
        &:nth-of-type(4) {
          display: none;
        }
        &:nth-of-type(5) {
          display: none;
        }
        &:nth-of-type(6) {
          display: block;
        }
        &:nth-of-type(7) {
          display: none;
        }
      }
      ${mq[6]} {
        &:nth-of-type(1) {
          display: none;
        }
        &:nth-of-type(2) {
          display: none;
        }
        &:nth-of-type(3) {
          display: none;
        }
        &:nth-of-type(4) {
          display: none;
        }
        &:nth-of-type(5) {
          display: none;
        }
        &:nth-of-type(6) {
          display: none;
        }
        &:nth-of-type(7) {
          display: block;
        }
      }
    }
  `;

  return (
    <>
      <Banner>
        <img src={process.env.PUBLIC_URL + "/Img/Banner/1920.jpg"} />
        <img src={process.env.PUBLIC_URL + "/Img/Banner/1440.png"} />
        <img src={process.env.PUBLIC_URL + "/Img/Banner/1024.png"} />
        <img src={process.env.PUBLIC_URL + "/Img/Banner/960.png"} />
        <img src={process.env.PUBLIC_URL + "/Img/Banner/480.png"} />
        <img src={process.env.PUBLIC_URL + "/Img/Banner/360.png"} />
        <img src={process.env.PUBLIC_URL + "/Img/Banner/320.png"} />
      </Banner>
    </>
  );
}

export default MainBanner;
