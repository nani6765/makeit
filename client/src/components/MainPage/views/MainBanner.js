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
    background-image: url(${process.env.PUBLIC_URL + "/Img/MainBG.png"});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    img {
      width: 20%;
      height: 35%;
      margin-top: 3rem;
    }
    ${mq[0]} {
      height: 200px;
      img {
        width: 35%;
        height: 45%;
        margin-top: 2.5rem;
      }
    }
    ${mq[1]} {
      height: 150px;
      img {
        width: 40%;
        height: 40%;
        margin-top: 1.5rem;
      }
    }
  `;

  return (
    <>
      <div>
        <Banner>
          <img src={process.env.PUBLIC_URL + "/Img/MainBanner.png"} />
        </Banner>
      </div>
    </>
  );
}

export default MainBanner;
