import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const PortHeader = styled.div`
  position: relative;
  height: auto;
  .bannerDiv {
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      postition: absolute;
      top: 0;
      left: 0;
      z-index: 5;
    }
    ${mq[1]} {
      height: 20vh;
    }
  }
  .category {
    width: 100%;
    background: #ede7f6;
    padding: 10px 15%;
    p {
      display: inline-block;
      color: #702c8a;
      font-size: 24px;
      font-weight: bold;
      margin: 0;
    }
    .sorting {
      display: inline-block;
      p {
        margin-left: 20px;
        color: #979393;
        font-size: 16px;
        background: #efe9e9;
        padding: 5px 10px;
        font-weight: normal;
      }
      .active {
        background: #935ea5;
        border-radius: 16px;
        color: #fff;
      }
    }
    ${mq[1]} {
      padding: 10px 5%;
    }
  }
`;

const MenuList = styled.div`
  width: 100%;
  padding: 0px 15%;
  border-bottom: 1px solid #acb0b4;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-content: center;
  ul {
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 1rem !important;
    margin-top: 3rem;
    list-style: none;
  }
  .search {
    background: #f7f7f7;
    padding: 5px;
    height: 100%;
    margin-bottom: 0.5rem;
    input {
      background: none;
      border: none;
      text-align: right;
      height: 100%;
      &::placeholder {
        color: #bfbfbf;
      }
    }
    input:focus {
      border: none;
      outline: none;
    }
    svg {
      margin-left: 5px;
      height: 100%;
      cursor: pointer;
    }
  }

  ${mq[1]} {
    padding: 0px 5%;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-end;
    ul {
      width: 100%;
      align-content: center;
      justify-content: space-evenly;
      padding-bottom: 0px !important;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .search {
      padding: 3px;
      width: 150px;
      input {
        width: 120px;
        &::placeholder {
          font-size: 10px;
        }
      }
    }
  }
`;

const MenuItem = styled.li`
  color: #acb0b4;
  background: #ffffff;
  cursor: pointer;
  text-align: center;
  margin-right: 2rem;
  padding-bottom: 2rem !important;
  height: 1rem;
  font-weight: bold;
  &.active {
    border-bottom: 3px solid #61057d;
    user-select: none;
    p {
      color: #61057d;
      font-weight: bold;
    }
  }

  ${mq[1]} {
    margin-right: 0px;
    padding-bottom: 0rem !important;
    p {
      font-size: 10px;
    }
  }
`;

export { PortHeader, MenuList, MenuItem };
