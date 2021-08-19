  /** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const PCOnly = styled.div`
  display : block;
  ${mq[0]}{
    display: none;
  }
`;

const PCExcept = styled.div`
  display : none;
  ${mq[0]}{
    display: block;
  }
`;


const FirstDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/Img/landingPage/landing1.png");
  background-size: cover;
`;
const SecondDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/Img/landingPage/landing2.png");
  background-size: cover;
`;

const ThirdDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/Img/landingPage/landing3.png");
  background-size: cover;
`;
const FourthDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/Img/landingPage/landing4.png");
  background-size: cover;
`;

const FifthDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/Img/landingPage/landing5.png");
  background-size: cover;
`;

const SixthDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/Img/landingPage/landing6.png");
  background-size: cover;
`;

export { PCOnly, PCExcept, FirstDiv, SecondDiv, ThirdDiv, FourthDiv, FifthDiv, SixthDiv };
