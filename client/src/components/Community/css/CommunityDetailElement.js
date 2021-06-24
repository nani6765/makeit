/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const DetailDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  padding: 30px;
  .content {
    display: grid;
    grid-template-columns: 50px 100px 1fr 50px;
    grid-template-rows: 25px 25px auto auto;
    grid-template-areas:
      "avatar author author hambuc"
      "avatar date date ."
      "title title title title"
      "desc desc desc desc";
    .avatar {
      grid-area: avatar;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .author {
      grid-area: author;
      text-align: left;
      font-weight: bold;
      margin-left: 1rem;
      margin-bottom: 0px;
    }
    .hambuc {
      grid-area: hambuc;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #c4c4c4;
      position: relative;
    }
    .date {
      grid-area: date;
      text-align: left;
      color: #5b4949;
      margin-left: 1rem;
      margin-bottom: 0px;
    }
    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .desc {
      grid-area: desc;
      text-align: left;
      word-break: keep-all;
    }
  }
  ${mq[1]} {
    width: 90%;
    padding: 20px;
  }
`;

const ModalDiv = styled.div`
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  position: absolute;
  right: 20px;
  top: 20px;
  min-width: 90px;
  min-height: 60px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  .edit {
    display: inline;
    i {
      margin-right: 1rem;
    }
  }
  .delete {
    display: inline;
    color: #d70000;
    i {
      margin-right: 1rem;
    }
  }
`;

const GNBMobileContentDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export { DetailDiv, GNBMobileContentDiv, ModalDiv };
