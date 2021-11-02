import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ShareVideoList from "./ShareVideoList.js";

import { ShareVideoDiv } from "../../css/SVCSS.js";
import Dropdown from "react-bootstrap/Dropdown";
import { ReactComponent as PenIcon } from "../../css/Img/Pen.svg";

import axios from 'axios';

function ShareVideo(props) {
  const [Sort, setSort] = useState("최신순");
  const [Skip, setSkip] = useState(0);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([]);

  const getPageLen = () => {
    axios.post("/api/making/shareVideo/getPageLen").then((response) => {
      if(response.data.success) {
        setPageLen(parseInt((response.data.len-1)/12 + 1));
      }
    })
  }

  useEffect(() => {
    getPageLen();
  }, []);

  useEffect(() => {
    setSkip(0);
  }, [Sort]);

  useEffect(() => {
    let temp = [];
    for (let i = 1; i <= 10; i++) {
      temp.push(parseInt(Skip / 120) * 10 + i);
      if (parseInt(Skip / 120) * 10 + i === PageLen) break;
    }
    setPageIdxArr(temp);
  }, [PageLen, parseInt(Skip/120)]);
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [Skip]);

  return (
    <ShareVideoDiv>
      <div className="headding">
        <Dropdown id="sort">
          <Dropdown.Toggle id="dropdown-basic">{Sort}</Dropdown.Toggle>
          <Dropdown.Menu id="dropdown-menu">
            <Dropdown.Item onClick={() => setSort("인기순")}>
              인기순
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setSort("최신순")}>
              최신순
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Link to="/Making/ShareUpload">
          <button className="postBtn">
            게시하기
            <PenIcon />
          </button>
        </Link>
      </div>

      <div className="list">
        <ShareVideoList user={props.user} Sort={Sort} Skip={Skip} />
      </div>

      <div className="FNB">
          <div className="pagination">
            {PageIdxArr[0] !== 1 ? (
              <button onClick={() => setSkip((parseInt(Skip / 120) - 1) * 120)}>
                &lt; 이전
              </button>
            ) : null}
            <ul>
              {PageIdxArr.map((page, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() =>
                      setSkip(parseInt(Skip / 120) * 120 + 12 * idx)
                    }
                    className={Skip / 12 + 1 === page ? "active" : null}
                  >
                    <p>{page}</p>
                  </li>
                );
              })}
            </ul>
            {PageIdxArr[PageIdxArr.length - 1] < PageLen && (
              <button onClick={() => setSkip((parseInt(Skip / 120) + 1) * 120)}>
                다음 &gt;
              </button>
            )}
          </div>
      </div>
    </ShareVideoDiv>
  );
}

export default ShareVideo;
