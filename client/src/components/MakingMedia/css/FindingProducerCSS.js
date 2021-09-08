/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MakingDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
  ${mq[1]} {
    width: 90%;
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuItem = styled.li`
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 22px;
  color: #702c8a;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  &.active {
    background: #faf5f5;
  }
`;

const ProducerListDiv = styled.div`
  display: inline-block;
  margin-top: 30px;
  margin-left: 20px;
  width: 70%;
  height: auto;
  padding: auto 0px;
  .GNB {
    height: 4vh;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: center;
    align-items: center;
    .category {
      color: #A7A5A8;
      font-size: 15px;
    }
    #sort {
      #dropdown-basic {
        padding: 3px 15px;
        margin: 0px;
        border: 1.5px solid #EAEAEA;
        background: #fff;
        color: black;
        border-radius: 16px;

        font-size: 15px;
      }
    }
  }
`;

const ProducerListContainer = styled.div`
  display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 5%;
	grid-template-areas:
  "1 2 3"
  "4 5 6"
  "7 8 9"
  "10 11 12";

  margin-top: 10px;

  .producercard {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 15px;

    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    box-sizing: border-box;
    border-radius: 22px;

    .thumbnail {
      margin-top: 10px;
      width: 100%;
      height: 45%;
      border-radius: 15px;
    }
    .info {
      margin-top: 15px;
      color: #A7A5A8;
      align-items: center;
      i {
        color: #FF5151;
        margin-left: 5px;
      }
    }
    .title {
      display: block;
      position: relative;
      height: auto;
      max-height: 60px;
      margin-top: 5px;
      font-size:18px;
      line-height: 30px;
      font-weight: 600;
      word-break: keep-all;
      overflow: hidden;
    }
    .priceAndGrade {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .price {
        text-align: right;
        font-size: 18px;
        font-weight: 600;
      }
      .grade {
        margin-top: 5px;
        color: #CCD2E3;
        i {
          color: #FFE459;
          margin-right: 5px;
        }
      }
    }
    ${mq[1]} {
      margin-bottom: 30px;
    }
  }
  ${mq[0]} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
    "1 2"
    "3 4"
    "5 6"
    "7 8"
    "9 10"
    "11 12";
  }
  ${mq[1]} {
    display: block;
    width: 100%;
  }
`;

const ProducerDetailDiv = styled.div`
  width: 70%;
  height: auto;
  margin: 0 auto;
  padding-top: 2vh;
  padding-bottom: 10vh;
  ${mq[1]} {
    width: 90%;
  }
  .category {
    color: #A7A5A8;
    font-size: 13px;
  }
  .mainInfo {
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
      0px 9px 30px rgba(163, 1, 79, 0.05);
    box-sizing: border-box;
    border-radius: 22px;
    .likeshare {
      color: #CCD2E3;
      font-size: 13px;
      .like i {
        color: #FF5151;
      }
    }
  }
`;

export { MakingDiv, MenuList, MenuItem, ProducerListDiv, ProducerListContainer, ProducerDetailDiv };
