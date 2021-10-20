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
  z-index: 10;
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
  grid-template-areas: "logo nav search loginDiv";
  ${mq[0]} {
    -webkit-box-align: center;
    place-items: center;
    grid-template-rows: 40px 40px;
    grid-template-columns: 120px 1fr 50px 50px;
    grid-template-areas:
      "logo searchArea loginDiv loginDiv"
      "nav nav nav nav";
  }
  ${mq[1]} {
    width: 100%;
    -webkit-box-align: center;
    place-items: center;
    grid-template-rows: 60px;
    grid-template-columns: 50px 50px 1fr 50px 50px;
    grid-template-areas: "hambuck . logo loginDiv loginDiv";
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

const HeaderLoginDiv = styled.div`
  grid-area: loginDiv;
  height: 100%;
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  .loginBtn {
    background: #702c8a;
    border-radius: 6px;
    color: white;
    border: none;
    padding: 10px 20px 10px 20px;
    font-weight: bold;
  }
  .bell {
    color: #702c8a;
    font-weight: bold;
    font-size: 20px;
  }
  .profile {
    img {
      width: 30px;
      height: 30px;
    }
  }
  .hambuc {
    grid-area: hambuc;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    position: relative;
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

const ModalDiv = styled.div`
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  position: absolute;
  right: 13px;
  top: 22px;
  min-width: 150px;
  min-height: 70px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 100%;
      margin: 0;
      padding: 0;
      border: none;
      text-aling: center;
      background-color: rgba(255, 255, 255, 1);
    }
    .new {
      &:hover,
      &:focus {
        text-decoration-line: none;
      }
      &::after {
        content: "new";
        color: #fff !important;
        margin-left: 0.25rem !important;
        border-radius: 50rem !important;
        background-color: #dc3545 !important;
        display: inline-block;
        padding: 0.25em 0.4em;
        font-size: 75%;
        font-weight: 700;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
      }
    }
    .logout {
      margin-top: 10px;
      display: inline;
      color: #d70000;
      i {
        margin-right: 1rem;
      }
    }
  }
`;

export {
  HeaderDiv,
  HeaderGrid,
  HeaderLogo,
  HeaderNav,
  HeaderSearch,
  HeaderLoginDiv,
  MobileLogo,
  MobileHambuck,
  MobileSideBackDiv,
  MobileSlideDiv,
  MobileSlideDivContent,
  ModalDiv,
};
