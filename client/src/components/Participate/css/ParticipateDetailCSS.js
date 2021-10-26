/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const DetailHeaderDiv = styled.div`
    background: #FAF6F6;
    color: #702C8A;
    width: 100%;
    height: auto;
    padding: 10px 15%;
    h1 {
        cursor: pointer;
        font-weight: bold;
        font-size: 30px;
    }
`;

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
  grid-template-rows: 25px 25px auto 1fr auto auto;
  grid-template-areas:
    "avatar author . hambuc"
    "avatar date . ."
    "title title title title"
    "video video video video"
    "desc desc desc desc"
    ". . . like";
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
    justify-content: flex-start;
    align-items: center;
    margin-left: 1rem;
    p {
      font-weight: bold;
      margin-bottom: 0px;
    }
  }
  .date {
    grid-area: date;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1rem;
    p {
      margin-bottom: 0px;
    }
  }
  .hambuc {
    grid-area: hambuc;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #c4c4c4;
    position: relative;
  }
  .title {
    grid-area: title;
    font-weight: bold;
    font-size: 24px;
    margin-top: 1rem;
    margin-bottom: 1rem;
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
  .image {
    grid-area: video;
    margin-top: 30px;
    img {
      width: 300px;
      ${mq[0]} {
        width: 100%;
      }
    }
  }
  .desc {
    margin-top: 1rem;
    grid-area: desc;
    margin-top: 1rem;
    margin-bottom: 1rem;
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

export { DetailHeaderDiv, DetailDiv };