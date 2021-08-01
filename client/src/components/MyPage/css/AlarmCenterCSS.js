/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const AlarmListDiv = styled.div`
  max-height: 70vh;
  padding: 10px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const AlarmContentDiv = styled.div`
  background: #f6f2ff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 110.5px;
  padding: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: "Icon Content .";
  grid-gap: 1rem;
  .Icon {
    grid-area: Icon;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    ${mq[0]} {
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  .Content {
    grid-area: Content;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    p {
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 0.5rem;
      &.date {
        font-size: 14px;
        color: #d9d9d9;
        font-weight: normal;
        margin-bottom: 0px;
      }
      ${mq[0]} {
        font-size: 14px;
        word-break: keep-all;
        &.date {
          font-size: 10px;
          word-break: keep-all;
        }
      }
    }
  }
  &.check {
    background: #fff;
  }
`;

const ChatContentDiv = styled.div`
  background: #f6f2ff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 110.5px;
  padding: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  grid-template-areas: "profile content date";
  grid-gap: 1rem;
  .profile {
    grid-area: profile;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 0px;
    gap: 1rem;
    p {
      font-weight: bold;
    }
  }
  .content {
    grid-area: content;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
  }
  .date {
    grid-area: date;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    marin-bottom: 0px;
    color: rgb(217, 217, 217);
    font-size: 10px;
  }
  &.check {
    background: #fff;
  }
`;

export { AlarmContentDiv, AlarmListDiv, ChatContentDiv };
