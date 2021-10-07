import React, { useState, useEffect } from "react";
import { YoutubeDiv } from "../css/QuotationUploadCSS.js";
import YOUTUBE_API from "../../../../../../config/youtubeAPI.js";

function YoutubeModal(props) {
  const [SearchTerm, setSearchTerm] = useState("");
  const [SearchResultArr, setSearchResultArr] = useState([]);
  const [CheckFlag, setCheckFlag] = useState([false, false, false, false, false, false]);

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

  function InputCheckHandler(e, snippet, flagIdx) {
    let temp = [...props.VideoArr];
    let flagTemp = [...CheckFlag];
    if (e.target.checked) {
      temp.push(snippet);
      props.setVideoArr([...temp]);
      flagTemp[flagIdx] = true;
      setCheckFlag([...flagTemp]);
    } else {
      let removed = [];
      let idx = temp.findIndex((obj) => obj.id.videoId === snippet.id.videoId);
      removed = temp.splice(idx, 1);
      props.setVideoArr([...temp]);
      flagTemp[flagIdx] = false;
      setCheckFlag([...flagTemp]);
    }
  }

  useEffect(() => {
    let temp = [false, false, false, false, false, false];
    console.log("search result", SearchResultArr);
    console.log("video List", props.VideoArr);
    SearchResultArr.map((video, idx) => {
      if(props.VideoArr.findIndex((obj) => obj.id.videoId === video.id.videoId) != -1) {
        temp[idx]=true;
      }
    })
    setCheckFlag([...temp]);
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
                let flag = false;
                return (
                  <li key={idx}>
                    <div>
                      <input
                        type="checkbox"
                        checked={CheckFlag[idx]}
                        onChange={(e) => InputCheckHandler(e, Video, idx)}
                        value={''|| ""}
                        disabled={props.VideoArr.length >= 6 ? true : false}
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
