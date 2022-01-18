import styled from "@emotion/styled";

const breakpoints = [1160, 480];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  top: 0;
  background-color: white;
  padding-top: 50px;
  padding-bottom: 25px;
  .PC {
    display: block;
  }
  .Mobile {
    display: none;
  }
  ${mq[0]} {
    padding-top: 32px;
    padding-bottom: 23px;
    .PC {
      display: none;
    }
    .Mobile {
      display: block;
    }
  }
  ${mq[1]} {
    padding-top: 20px;
    padding-bottom: 16px;
  }
`;

const HeaderMarginDiv = styled.div`
  max-width: 1160px;
  margin: 0 auto !important;
`;

const HeaderGrid = styled.div`
  display: grid;
  height: auto;
  grid-template-columns: 179.06px 1fr 200px 120px;
  grid-template-rows: auto;
  grid-template-areas: "logo nav search loginDiv";
  ${mq[0]} {
    grid-template-columns: 120px 1fr 120px;
    grid-template-areas: "hambuck logo loginDiv";
  }
  ${mq[1]} {
    grid-template-columns: 100px 1fr 100px;
    grid-template-areas: "hambuck logo loginDiv";
  }
`;

const HeaderLogo = styled.div`
  grid-area: logo;
  width: 100%;
  height: auto;
  ${mq[0]}{
    display: flex;
    justify-content: center;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      &:nth-of-type(1) {
        width: 33.83px;
        height: 33px;
      }
      &:nth-of-type(2) {
        margin-left: 16px;
        margin-top: 8px;
        width: 129.23px;
        height: 20px;
        ${mq[0]}{
          margin-left: 0px;
          margin-top: 0px;
          width: 202px;
          height: 32px;
        }
        ${mq[1]}{
          margin-left: 0px;
          margin-top: 0px;
          width: 101px;
          height: 16px;
        }
      }
    }
`;

const HeaderNav = styled.div`
  grid-area: nav;
  width: 100%;
  height: auto;
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: rows;
    list-style-type: none;
    margin-left: 28px;
    padding: 0;
    overflow: hidden;
    li {
      padding: 10px;
      margin-right: 22px;
      a {
        color: black;
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
        &:hover {
          color: #5a278b;
        }
      }
      .active {
        color: #5a278b;
      }
      &:nth-last-of-type(1) {
        margin-right: 0px;
      }
    }
  }
`;

const HeaderSearch = styled.div`
  grid-area: search;
  height: auto;
  align-items: center;
  display: flex;
  div {
    width: 100%;
    form {
      padding: 5px;
      border: 1px solid #5a278b;
      box-sizing: border-box;
      border-radius: 30px;
      display: flex;
      justify-content: space-between;
      input {
        width: 85%;
        background: none;
        border: none;
        text-align: right;
        &::placeholder {
          color: #bfbfbf;
        }
      }
      input:focus {
        outline: none;
      }
      button {
        width: 15%;
        height: inherit;
        display: inline-block;
        border: none;
        padding: 0;
        background: none;
        svg {
          cursor: pointer;
        }
      }
    }
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
  //로그인 버튼
  a {
    ${mq[0]} {
      width: 100px;
      margin-right: 20px;
      height: 100%;
    }
    ${mq[1]} {
      margin-right: 10px;
    }
    .loginBtn {
      background: #ffffff;
      border: 1px solid #dbdbdb;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 10px;
      color: #ada4a4;
      ${mq[0]} {
        width: 100%;
        padding: 5px 10px;
        height: 100%;
        font-size: 18px;
      }
      ${mq[1]} {
        font-size: 16px;
      }
    }
  }
  //(1) : 벨, (2) : 프로필이미지
  .hambuc {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  ${mq[0]} {
    margin-right: 20px;
  }
  ${mq[1]} {
    padding-right: 10px;
    justify-content: flex-end;
    .hambuc {
      &:nth-last-of-type(1) {
        margin-left: 10px;
      }
      &:nth-last-of-type(2) {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const MobileHambuck = styled.div`
  grid-area: hambuck;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  background-color: white;
  i {
    color: #a95ddd;
    font-size: 30px;
  }
  ${mq[0]} {
    margin-left: 20px;
    justify-content: flex-start;
  }
  ${mq[1]} {
    display: block;
    margin-left: 10px;
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
  HeaderMarginDiv,
  HeaderGrid,
  HeaderLogo,
  HeaderNav,
  HeaderSearch,
  HeaderLoginDiv,
  MobileHambuck,
  MobileSideBackDiv,
  MobileSlideDiv,
  MobileSlideDivContent,
  ModalDiv,
};
