/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const PCOnly = styled.div`
  display: block;
  ${mq[0]} {
    display: none;
  }
`;

const PCExcept = styled.div`
  display: none;
  ${mq[0]} {
    display: block;
  }
`;

const FirstDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing1.png");
  background-size: cover;
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;
const SecondDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing2.png");
  background-size: cover;
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;

const ThirdDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing3.png");
  background-size: cover;
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;
const FourthDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing4.png");
  background-size: cover;
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;

const FifthDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing5.png");
  background-size: cover;
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;

const SixthDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing6.png");
  background-size: cover;
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;

export { FirstDiv, SecondDiv, ThirdDiv, FourthDiv, FifthDiv, SixthDiv };
