import React, { useState, useEffect } from "react";
import YOUTUBE_API from "../../../../../../config/youtubeAPI.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function YoutubeModal(props) {
  const [SearchTerm, setSearchTerm] = useState("");
  const [SearchResultArr, setSearchResultArr] = useState([]);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    console.log("SearchTerm : ", SearchTerm);
    const response = await YOUTUBE_API.get("/search", {
      params: {
        q: SearchTerm,
      },
    });
    setSearchResultArr([...response.data.items]);
  };

  const ClickFunc = (obj) => {
    props.setThumbnail(obj.snippet.thumbnails.high.url);
    props.setVideoURL(obj.id.videoId);
    props.setModalFlag(false);
  };

  return (
    <YoutubeDiv>
      <div className="content">
        <div
          className="background"
          onClick={() => props.setModalFlag(false)}
        ></div>
        <div className="searchDiv">
          <form onSubmit={SubmitHandler}>
            <p className="searchNotice">유튜브 URL, 제목을 검색해주세요.</p>
            <div className="inputDiv">
              <input
                type="text"
                value={SearchTerm || ""}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
              />
              <button type="submit">검색</button>
            </div>
          </form>
          <ul className="resultList">
            {SearchResultArr[0] &&
              SearchResultArr.map((Video, idx) => {
                return (
                  <li key={idx}>
                    <span onClick={() => ClickFunc(Video)}>선택</span>
                    <img src={Video.snippet.thumbnails.high.url} alt="" />
                    <div>
                      <p className="title">{Video.snippet.title}</p>
                      <p className="channel">{Video.snippet.channelTitle}</p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </YoutubeDiv>
  );
}

export default YoutubeModal;

const YoutubeDiv = styled.div`
  .content {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    .background {
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      z-index: 50;
    }
    .searchDiv {
      background: #ffffff;
      box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.25);
      border-radius: 11px;
      z-index: 51;
      position: fixed;
      width: 50%;
      padding: 20px;
      .searchNotice {
        color: red;
        font-size: 10px;
        opacity: 0.8;
        margin-bottom: 0.5rem;
      }
      .inputDiv {
        display: grid;
        width: 100%;
        grid-template-columns: 8fr 2fr;
        grid-template-rows: auto;
        grid-template-areas: "input btn";
        input {
          grid-area: "input";
          &:focus,
          &:active {
            outline: none;
          }
        }
        button {
          grid-area: "btn";
          background: #935ea5;
          color: white;
          font-weight: bold;
          border: 1px solid #935ea5;
        }
      }
      .resultList {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 0px;
        li {
          margin-bottom: 1rem;
          display: flex;
          align-content: center;
          align-items: center;
          span {
            width: auto;
            color: #c6c6c6;
            font-size: 6px;
            white-space: nowrap;
            cursor: pointer;
            &:hover,
            &:active {
              color: black;
            }
          }
          img {
            width: 60px;
            height: 60px;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
          }
          &:nth-last-of-type(1) {
            margin-bottom: 0px;
          }
          p {
            word-break: keep-all;
            font-size: 12px;
            &.channel {
              color: #c6c6c6;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
`;
