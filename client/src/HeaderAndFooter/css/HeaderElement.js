/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 50;
  top: 0;
  ${mq[0]} {
    width: 100%;
    height: 80px;
  }
  ${mq[1]} {
    width: 100%;
    height: 60px;
  }
`;

const HeaderGrid = styled.div`
  display: grid;
  width: 70%;
  margin: 0 auto;
  height: 100%;
  background-color: white;
  grid-template-columns: 150px 1fr 200px 120px;
  grid-template-rows: 80px;
  grid-template-areas: "logo nav search login";
  ${mq[0]} {
    -webkit-box-align: center;
    place-items: center;
    grid-template-rows: 40px 40px;
    grid-template-columns: 120px 1fr 50px 50px;
    grid-template-areas:
      "logo searchArea msearch profile"
      "nav nav nav nav";
  }
  ${mq[1]} {
    width: 100%;
    -webkit-box-align: center;
    place-items: center;
    grid-template-rows: 60px;
    grid-template-columns: 50px 50px 1fr 50px 50px;
    grid-template-areas: "hambuck . logo bell profile";
  }
`;

const HeaderLogo = styled.div`
  grid-area: logo;
  height: 100%;
  width: 100%;
  padding: 10px 10px 20px 10px;
  img {
    width: 100%;
    height: 100%;
  }
  ${mq[0]} {
    padding: 5px;
  }
  ${mq[1]} {
    padding: 10px 0px 10px 0px;
    margin: 0 auto;
    text-align: center;
    img {
      margin: 0 auto;
      width: 75%;
      max-width: 120px;
      height: 100%;
    }
  }
`;

const HeaderNav = styled.div`
  grid-area: nav / nav / nav / nav;
  width: 100%;
  height: 100%;
  ul {
    height: inherit;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    li {
      width: auto;
      height: inherit;
      display: inline-flex;
      align-items: center;
      margin-left: 35px;
      a {
        color: black;
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 25px;
      }
    }
  }
  ${mq[0]} {
    width: 100%;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        width: auto;
        margin-left: 0px;
        text-align: center;
        a {
          width: 100%;
        }
      }
    }
  }
  ${mq[1]} {
    display: none;
  }
`;

const HeaderSearch = styled.div`
  grid-area: search;
  height: 100%;
  align-items: center;
  display: flex;
  form {
    width: 100%;
    height: 40%;
    input {
      height: 100%;
      width: 95%;
      padding: 5px 20px 5px 20px;
      border-radius: 20px;
      border: 2.5px solid #816afe;
      background-image: url("/Img/search.png");
      background-repeat: no-repeat;
      background-position: calc(100% - 5%) calc(100% - 50%);
    }
    input:focus {
      outline: none;
    }
  }
  ${mq[0]} {
    display: none;
  }
`;

const HeaderLogin = styled.div`
  grid-area: login;
  height: 100%;
  text-align: center;
  div {
    height: inherit;
    display: inline-flex;
    align-items: center;
    button {
      background-color: #702b8a;
      border: none;
      border-radius: 15px;
      padding: 5px 15px 5px 15px;
      color: white;
      font-family: Noto Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 25px;
    }
  }
  ${mq[0]} {
    display: none;
  }
`;

const MobileLogo = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  background-color: white;
  grid-area: mlogo;
  justify-content: flex-start;
  padding: 5px;
  img {
    width: 100%;
    height: 100%;
  }
  ${mq[0]} {
    display: flex;
  }
  ${mq[1]} {
    display: none;
  }
`;

const MobileSearch = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  background-color: white;
  grid-area: msearch;
  justify-content: flex-end;
  i {
    color: #a95ddd;
    font-size: 20px;
  }
  ${mq[0]} {
    display: flex;
  }
  ${mq[1]} {
    display: none;
  }
`;

const MobileHambuck = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  background-color: white;
  grid-area: hambuck;
  ${mq[0]} {
    display: none;
  }
  ${mq[1]} {
    display: flex;
    justify-content: center;
    i {
      color: #a95ddd;
      font-size: 30px;
    }
  }
`;

const MobileBell = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  background-color: white;
  grid-area: bell;
  ${mq[0]} {
    display: none;
  }
  ${mq[1]} {
    display: flex;
    justify-content: flex-end;
    i {
      color: #a95ddd;
      font-size: 20px;
    }
  }
`;

const MobileProfile = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  background-color: white;
  grid-area: profile;
  justify-content: flex-end;
  i {
    color: #a95ddd;
    font-size: 20px;
  }
  ${mq[0]} {
    display: flex;
  }
  ${mq[1]} {
    justify-content: center;
    i {
      font-size: 20px;
    }
  }
`;

const MobileSideBackDiv = styled.div`
  position: fixed;
  z-index: 80;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
`;

const MobileSlideDiv = styled.div`
  position: fixed;
  width: 80vw;
  height: 100%;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: -80vw;
  background-color: white;
`;

const MobileSlideDivContent = styled.div`
  padding: 30px 20px 30px 20px;
`;

export {
  HeaderDiv,
  HeaderGrid,
  HeaderLogo,
  HeaderNav,
  HeaderSearch,
  HeaderLogin,
  MobileLogo,
  MobileSearch,
  MobileHambuck,
  MobileBell,
  MobileProfile,
  MobileSideBackDiv,
  MobileSlideDiv,
  MobileSlideDivContent,
};
