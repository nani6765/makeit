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
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing_1_bg.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 80%;
    margin: 0 auto;
    color: white;
    .Title {
      font-size: 4.5rem;
      margin-bottom: 1.75rem;
      font-weight: bold;
      span {
        color: #fff445;
      }
    }
    .SubTitle {
      font-size: 2.25rem;
    }
  }

  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;
const SecondDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing_2_bg.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
  .content {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }
`;

const ThirdDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing_3_bg.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 80%;
    margin: 0 auto;
    color: white;
    .Title {
      font-size: 4.5rem;
      margin-bottom: 1.75rem;
      font-weight: bold;
      line-height: 6rem;
      margin-bottom: 0px;
    }
    hr {
      border: 1px solid #fff445;
      background-color: #fff445;
      width: 80px;
      margin: 0;
      margin-top: 2.5rem;
      margin-bottom: 1.25rem;
    }
    .SubTitle {
      font-size: 2rem;
      line-height: 2.5rem;
      font-weight: 300;
    }
  }
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;
const FourthDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing_4_bg.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: auto;
    color: #412280;
    margin-left: 30rem;
    .Title {
      width: auto;
      font-size: 4.5rem;
      margin-bottom: 1.75rem;
      font-weight: bold;
      line-height: 6rem;
      margin-bottom: 0px;
    }
    .SubTitle {
      width: auto;
      font-size: 2rem;
      line-height: 2.5rem;
      font-weight: 300;
    }

    hr {
      border: 1px solid #412280;
      background-color: #412280;
      width: 80px;
      margin: 0;
      margin-top: 2.5rem;
      margin-bottom: 1.25rem;
    }
  }
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;

const FifthDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing_5_bg.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 80%;
    margin: 0 auto;
    color: white;
    .Title {
      font-size: 4.5rem;
      margin-bottom: 1.75rem;
      font-weight: bold;
      line-height: 6rem;
      margin-bottom: 0px;
    }
    hr {
      border: 1px solid #fff445;
      background-color: #fff445;
      width: 80px;
      margin: 0;
      margin-top: 2.5rem;
      margin-bottom: 1.25rem;
    }
    .SubTitle {
      font-size: 2rem;
      line-height: 2.5rem;
      font-weight: 300;
    }
  }
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;

const SixthDiv = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("https://kr.object.ncloudstorage.com/makeit/admin/LandingPage/Landing_6_bg.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: auto;
    color: #412280;
    text-align: center;
    .Title {
      font-size: 4.5rem;
      margin-bottom: 1.75rem;
      line-height: 6rem;
      font-weight: bold;
    }
  }
  ${mq[1]} {
    height: calc(100vh - 60px);
  }
`;

export {
  PCOnly,
  PCExcept,
  FirstDiv,
  SecondDiv,
  ThirdDiv,
  FourthDiv,
  FifthDiv,
  SixthDiv,
};
