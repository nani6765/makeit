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
  display: grid;
  grid-template-columns: 50px auto 1fr auto;
  grid-template-rows: 50px auto 1fr auto auto;
  grid-template-areas:
    "avatar author . date"
    "title title title title"
    "video video video video"
    "desc desc desc desc"
    ". . . like";
  grid-gap: 0.5rem;
  ${mq[1]} {
    width: 90%;
    padding: 20px;
  }
  .avatar {
    grid-area: avatar;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .author {
    grid-area: author;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    p {
      font-weight: bold;
      margin-bottom: 0px;
    }
  }
  .date {
    grid-area: date;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    p {
      margin-bottom: 0px;
    }
  }
  .title {
    grid-area: title;
    font-weight: bold;
    font-size: 24px;
    p {
      margin-bottom: 0px;
    }
  }
  .video {
    grid-area: video;
    height: auto;
    #PCView {
      display: block;
    }
    #MobView {
      display: none;
    }
    ${mq[1]} {
      #PCView {
        display: none;
      }
      #MobView {
        display: block;
      }
    }
  }
  .desc {
    margin-top: 1rem;
    grid-area: desc;
  }
  .like {
    grid-area: like;
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    svg {
      cursor: pointer;
      margin-right: 1rem;
    }
  }
`;

const RepleBtnDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  button {
    background: #faf5f5;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 22px;
    padding: 5px 25px 5px 25px;
  }
  .total {
    color: black;
    i {
      margin-right: 5px;
    }
  }
  .left {
    font-weight: 600;
    color: #702c8a;
  }
`;

export { DetailDiv, RepleBtnDiv };
