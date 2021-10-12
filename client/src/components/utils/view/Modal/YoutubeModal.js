import React, { useState, useEffect } from "react";
import YOUTUBE_API from "../../../../config/youtubeAPI.js";

import { YoutubeDiv } from "./ModalCSS.js";

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