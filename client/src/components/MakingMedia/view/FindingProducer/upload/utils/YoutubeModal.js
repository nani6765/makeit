import React, { useState, useEffect } from "react";
import { YoutubeDiv } from "../css/FPUtilsCSS.js";
import YOUTUBE_API from "../../../../../../config/youtubeAPI.js";

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

  function InputCheckHandler(e, snippet) {
    let temp = [...props.VideoArr];
    if (e.target.checked) {
      temp.push(snippet);
      props.setVideoArr([...temp]);
    } else {
      let removed = [];
      if (temp.length === 1) {
        props.setVideoArr([...removed]);
      } else {
        let idx = temp.findIndex(
          (obj) => obj.id.videoId === snippet.id.videoId
        );
        removed = temp.splice(idx, 1);
        console.log("removed", removed);
        props.setVideoArr([...removed]);
      }
    }
  }

  useEffect(() => {
    console.log(SearchResultArr);
  }, [SearchResultArr]);

  useEffect(() => {
    console.log("VideoArr", props.VideoArr);
  }, [props.VideoArr]);

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
                    <div>
                      <input
                        type="checkbox"
                        onChange={(e) => InputCheckHandler(e, Video)}
                        disabled={props.VideoArr.length >= 5 ? true : false}
                      />
                    </div>

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
