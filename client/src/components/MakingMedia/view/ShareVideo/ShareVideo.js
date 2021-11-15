import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import ShareVideoList from "./ShareVideoList.js";

import { ShareVideoDiv } from "../../css/SVCSS.js";
import Dropdown from "react-bootstrap/Dropdown";
import { ReactComponent as PenIcon } from "../../css/Img/Pen.svg";
import { ReactComponent as SearchIcon } from "../../css/Img/searchIcon.svg";
import qs from 'qs';
import axios from 'axios';

function ShareVideo(props) {
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  const SearchHandler = (e) => {
    e.preventDefault();
    if (SearchTerm && !/\S/.test(SearchTerm)) {
      return;
    }
    let temp = qs.parse(props.URL);
    temp.searchTerm = SearchTerm.trim();
    if(!SearchTerm) {
      delete temp.searchTerm;
    }
    temp.pIdx = 0;
    let temp2 = qs.stringify(temp);
    props.history.push(`?${decodeURI(temp2)}`);
  }

  const getPageLen = () => {
    let body = {};

    if(props.URL.searchTerm) {
      body.searchTerm = props.URL.searchTerm;
      setSearchTerm(props.URL.searchTerm);
    }
    axios.post("/api/making/shareVideo/getPageLen", body).then((response) => {
      if(response.data.success) {
        setPageLen(parseInt((response.data.len-1)/9) + 1);
      }
    })
  }

  useEffect(() => {
    getPageLen();
  }, [props.URL]);


  useEffect(() => {
    let sIdx = parseInt(props.URL.pIdx/10);
    let temp = [];
    for(let i = sIdx*10 + 1; i<=Math.min(sIdx*10 + 10, PageLen); i++) {
      temp.push(i);
    }
    setPageIdxArr(temp);
  }, [PageLen, parseInt(props.URL.pIdx)]);
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [props.URL.pIdx]);

  return (
    <ShareVideoDiv>
      <div className="headding">
          <div className="filter">
            <div className="search">
                <input type="text" placeholder="검색하기" value={SearchTerm} onChange={(e) => setSearchTerm(e.currentTarget.value)} onKeyDown={(e) => {if(e.keyCode === 13) SearchHandler(e)}}/>
                <SearchIcon onClick={(e) => SearchHandler(e)}/>
            </div>
            <Dropdown id="sort">
              <Dropdown.Toggle id="dropdown-basic">{props.URL.sort}</Dropdown.Toggle>
              <Dropdown.Menu id="dropdown-menu">
                <Dropdown.Item
                  onClick={() => {
                    props.URL.sort = "인기순";
                    props.URL.qIdx = 0;
                    props.history.push(`?${decodeURI(qs.stringify(props.URL))}`);
                  }}> 
                  인기순
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    props.URL.sort = "최신순";
                    props.URL.qIdx = 0;
                    props.history.push(`?${decodeURI(qs.stringify(props.URL))}`);
                  }}>
                  최신순
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

        <Link to="/Making/ShareUpload">
          <button className="postBtn">
            게시하기
            <PenIcon />
          </button>
        </Link>
      </div>

      <div className="list">
        <ShareVideoList user={props.user} URL={props.URL} />
      </div>

      <div className="FNB">
          <div className="pagination">
            {PageIdxArr[0] !== 1 ? (
              <button
                onClick={() => {
                  props.URL.pIdx = parseInt((parseInt(parseInt(props.URL.pIdx)) - 10)/10)*10;
                  props.history.push(`?${decodeURI(qs.stringify(props.URL))}`);
                }}>
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
                      props.history.push(`?${decodeURI(qs.stringify(props.URL))}`);
                    }}
                    className={props.URL.pIdx === (page - 1).toString() ? "active" : null}
                  >
                    <p>{page}</p>
                  </li>
                );
              })}
            </ul>
            {PageIdxArr[PageIdxArr.length - 1] < PageLen && (
              <button
                onClick={() => {
                  props.URL.pIdx = parseInt((parseInt(parseInt(props.URL.pIdx)) + 10)/10)*10;
                  props.history.push(`?${decodeURI(qs.stringify(props.URL))}`);
                }}>
                다음 &gt;
              </button>
            )}
          </div>
      </div>
    </ShareVideoDiv>
  );
}

export default withRouter(ShareVideo);
