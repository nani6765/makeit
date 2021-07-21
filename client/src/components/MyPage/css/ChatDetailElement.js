/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ChatDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  margin-top: 10vh;
  margin-bottom: 10vh;
  ${mq[0]} {
    width: 80%;
  }
  ${mq[1]} {
    width: 100%;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
`;

const ChatContentDiv = styled.div`
  background: #f7f9fe;
  border-radius: 11px;
  padding: 5px;
`;

const ChatContentDate = styled.p`
  text-align: center;
  color: #c4c4c4;
`;

const ChatForContentDiv = styled.div`
  max-height: 70vh;
  overflow: none;
  overflow-y: scroll;
`;

const ChatMeContentGrid = css`
  max-width: 70%;
  margin-left: 30%;
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: auto;
  grid-template-areas: ". date content";
  grid-gap: 1rem;
  margin-bottom: 1rem;
  .date {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 50px;
    margin-bottom: 0px;
    font-size: 10px;
  }
  .content {
    text-align: right;
    p {
      display: inline-block;
      background: #ffffff;
      border-radius: 30px;
      padding: 10px 15px 10px 15px;
      margin-bottom: 0px;
    }
  }
`;

const ChatYouContentGrid = css`
  max-width: 70%;
  margin-left: 30%;
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: "content date .";
  grid-gap: 1rem;
  margin-bottom: 1rem;
  .date {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    min-width: 50px;
    margin-bottom: 0px;
    font-size: 10px;
  }
  .content {
    text-align: left;
    p {
      display: inline-block;
      background: #ffffff;
      border-radius: 30px;
      padding: 10px 15px 10px 15px;
      margin-bottom: 0px;
    }
  }
`;

export {
  ChatDiv,
  ChatContentDiv,
  ChatContentDate,
  ChatForContentDiv,
  ChatMeContentGrid,
  ChatYouContentGrid,
};
