import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import ProducerList from "./ProducerList.js";
import StickyBar from "../common/StickyBar.js";
import Dropdown from "react-bootstrap/Dropdown";
import { ProducerListDiv } from "../../css/FPCSS.js";
import { ReactComponent as PenIcon } from "../../css/Img/Pen.svg";
import { ReactComponent as SearchIcon } from "../../css/Img/searchIcon.svg";
import qs from 'qs';

import axios from "axios";

function FindingProducer(props) {
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  const SearchHandler = (e) => {
    e.preventDefault();
    if (!/\S/.test(SearchTerm)) {
      return;
    }
    let temp = qs.parse(props.URLQuery);
    temp.searchTerm = SearchTerm.trim();
    temp.pIdx = 0;
    let temp2 = qs.stringify(temp);
    props.history.push(`?${decodeURI(temp2)}`);
  }

  const getPageLen = () => {
    let body = {
      category: props.URLQuery.subCategory,
    };

    if(props.URLQuery.searchTerm) {
      body.searchTerm = props.URLQuery.searchTerm;
      setSearchTerm(props.URLQuery.searchTerm);
    }

    axios.post("/api/making/producer/postLength", body).then((response) => {
      if (response.data.success) {
        setPageLen(parseInt((response.data.len - 1) / 12) + 1);
      }
    });
  };

  useEffect(() => {
    getPageLen();
  }, [props.URLQuery]);

  useEffect(() => {
    let sIdx = parseInt(props.URLQuery.pIdx/10);
    let temp = [];
    for(let i = sIdx*10 + 1; i<=Math.min(sIdx*10 + 10, PageLen); i++) {
      temp.push(i);
    }
    setPageIdxArr(temp);
  }, [PageLen, parseInt(props.URLQuery.pIdx)]);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [props.URLQuery.pIdx]);

  return (
    <ProducerListDiv>
      <div className="left">
        <StickyBar
          URLQuery={props.URLQuery}
          SubCategoryList={props.SubCategoryList}
        />
      </div>
      <div className="right">
        <div className="GNB">
          <p className="category">
            홈 &gt; 영상제작 &gt; 제작자 탐색 &gt; {props.URLQuery.subCategory}
          </p>
          <div className="filter">
            <div className="search">
                <input type="text" placeholder="검색하기" value={SearchTerm} onChange={(e) => setSearchTerm(e.currentTarget.value)} onKeyDown={(e) => {if(e.keyCode === 13) SearchHandler(e)}}/>
                <SearchIcon onClick={(e) => SearchHandler(e)}/>
            </div>
            <Dropdown id="sort">
              <Dropdown.Toggle id="dropdown-basic">{props.URLQuery.sort}</Dropdown.Toggle>
              <Dropdown.Menu id="dropdown-menu">
                <Dropdown.Item
                  onClick={() => {
                    props.URLQuery.sort = "인기순";
                    props.URLQuery.qIdx = 0;
                    props.history.push(`?${decodeURI(qs.stringify(props.URLQuery))}`);
                  }}> 
                  인기순
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    props.URLQuery.sort = "최신순";
                    props.URLQuery.qIdx = 0;
                    props.history.push(`?${decodeURI(qs.stringify(props.URLQuery))}`);
                  }}>
                  최신순
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <ProducerList
          URLQuery={props.URLQuery}
          user={props.user}
        />

        <Link to="/Making/ProducerUpload">
          <button className="postBtn">
            게시하기
            <PenIcon />
          </button>
        </Link>
        <div className="FNB">
          <div className="pagination">
            {PageIdxArr[0] !== 1 ? (
              <button
                onClick={() => {
                  props.URLQuery.pIdx = parseInt((props.URLQuery.pIdx - 10)/10)*10;
                  props.history.push(`?${decodeURI(qs.stringify(props.URLQuery))}`);
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
                      props.URLQuery.pIdx = page - 1;
                      props.history.push(`?${decodeURI(qs.stringify(props.URLQuery))}`);
                    }}
                    className={props.URLQuery.pIdx === (page - 1).toString() ? "active" : null}
                  >
                    <p>{page}</p>
                  </li>
                );
              })}
            </ul>
            {PageIdxArr[PageIdxArr.length - 1] < PageLen && (
              <button
                onClick={() => {
                  props.URLQuery.pIdx = parseInt((props.URLQuery.pIdx + 10)/10)*10;
                  props.history.push(`?${decodeURI(qs.stringify(props.URLQuery))}`);
                }}>
                다음 &gt;
              </button>
            )}
          </div>
        </div>
      </div>
    </ProducerListDiv>
  );
}

export default withRouter(FindingProducer);
