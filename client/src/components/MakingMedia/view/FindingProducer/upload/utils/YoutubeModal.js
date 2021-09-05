import React, { useState, useEffect } from "react";
import { YoutubeDiv } from "../css/FPUploadCSS.js";
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

  /*
  useEffect(() => {
    console.log(SearchResultArr);
  }, [SearchResultArr]);
  */
  const ShowVideos = () => {};

  return (
    <YoutubeDiv>
      <div className="content">
        <div
          className="background"
          onClick={() => props.setModalFlag(false)}
        ></div>
        <div className="searchDiv">
          <form onSubmit={SubmitHandler}>
            <input
              type="text"
              value={SearchTerm || ""}
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
            />
            <button type="submit">검색</button>
          </form>
        </div>
        <div>
          {SearchResultArr[0] &&
            SearchResultArr.map((Video, idx) => {
              return (
                <div key={idx}>
                  <img src={Video.snippet.thumbnails.high.url} alt="" />
                </div>
              );
            })}
        </div>
      </div>
    </YoutubeDiv>
  );
}

export default YoutubeModal;
