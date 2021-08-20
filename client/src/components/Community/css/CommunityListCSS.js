/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const CommunityHeader = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas: "Banner";

`
const BannerImg = css`
  width: 100%;
  height: 100%;
  grid-area: Banner;
`;

const GNBDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  grid-area: GNB;
  button {
      width: 80%;
      background: #FFFFFF;
      border: 1px solid #D5D5D5;
      box-sizing: border-box;
      border-radius: 22px;
      color: #702C8A;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
  }
  
`;



export { CommunityHeader, BannerImg, GNBDiv };
