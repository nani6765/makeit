import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import RequestPostList from "./RequestPostList.js";
import { RequestListDiv } from "../../css/RVCSS.js";
import qs from "qs";
import axios from "axios";

function RequestVideo(props) {
  const [Skip, setSkip] = useState(0);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  const getPageLen = () => {
    let body = {
      category: props.URL.subCategory,
    };

    if (props.URL.searchTerm) {
      body.searchTerm = props.URL.searchTerm;
      setSearchTerm(props.URL.searchTerm);
    }

    axios.post("/api/making/requestVideo/postLength", body).then((response) => {
      if (response.data.success) {
        setPageLen(parseInt((response.data.len - 1) / 5) + 1);
        setSkip(0);
      }
    });
  };

  useEffect(() => {
    getPageLen();
  }, [props.URL]);

  useEffect(() => {
    let temp = [];
    for (let i = 1; i <= 10; i++) {
      temp.push(parseInt(Skip / 60) * 10 + i);
      if (parseInt(Skip / 60) * 10 + i === PageLen) break;
    }
    setPageIdxArr(temp);
  }, [PageLen, parseInt(Skip / 60)]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.URL]);

  return (
    <RequestListDiv>
      <RequestPostList URL={props.URL} />
      <div className="FNB">
        <div className="pagination">
          {PageIdxArr[0] !== 1 ? (
            <button
              onClick={() => {
                props.URL.pIdx =
                  parseInt((parseInt(props.URL.pIdx) - 10) / 10) * 10;
                props.history.push(`?${decodeURI(qs.stringify(props.URL))}`);
              }}
            >
              &lt; 이전
            </button>
          ) : null}
          <ul>
            {PageIdxArr.map((page, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => {
                    props.URL.pIdx = page - 1;
                    props.history.push(
                      `?${decodeURI(qs.stringify(props.URL))}`
                    );
                  }}
                  className={
                    props.URL.pIdx === (page - 1).toString() ? "active" : null
                  }
                >
                  <p>{page}</p>
                </li>
              );
            })}
          </ul>
          {PageIdxArr[PageIdxArr.length - 1] < PageLen && (
            <button
              onClick={() => {
                props.URL.pIdx = parseInt(parseInt(props.URL.pIdx) / 10) * 10;
                props.history.push(`?${decodeURI(qs.stringify(props.URL))}`);
              }}
            >
              다음 &gt;
            </button>
          )}
        </div>
      </div>
    </RequestListDiv>
  );
}

export default withRouter(RequestVideo);
