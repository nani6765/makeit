import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import ProducerList from "./ProducerList.js";
import Dropdown from "react-bootstrap/Dropdown";
import { ProducerListDiv } from "../../css/FPCSS.js";
import { ReactComponent as SearchIcon } from "../../css/Img/searchIcon.svg";
import qs from "qs";

import axios from "axios";

function FindingProducer(props) {
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
    if (!SearchTerm) {
      delete temp.searchTerm;
    }
    temp.pIdx = 0;
    let temp2 = qs.stringify(temp);
    props.history.push(`?${decodeURI(temp2)}`);
  };

  const getPageLen = () => {
    let body = {
      category: props.URL.subCategory,
    };

    if (props.URL.searchTerm) {
      body.searchTerm = props.URL.searchTerm;
      setSearchTerm(props.URL.searchTerm);
    }

    axios.post("/api/making/producer/postLength", body).then((response) => {
      if (response.data.success) {
        setPageLen(parseInt((response.data.len - 1) / 12) + 1);
      }
    });
  };

  useEffect(() => {
    getPageLen();
  }, [props.URL]);

  useEffect(() => {
    let sIdx = parseInt(props.URL.pIdx / 10);
    let temp = [];
    for (let i = sIdx * 10 + 1; i <= Math.min(sIdx * 10 + 10, PageLen); i++) {
      temp.push(i);
    }
    setPageIdxArr(temp);
  }, [PageLen, parseInt(props.URL.pIdx)]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.URL.pIdx]);

  return (
    <ProducerListDiv>
      <ProducerList URL={props.URL} user={props.user} />
      <div className="FNB">
        <div className="pagination">
          {PageIdxArr[0] !== 1 ? (
            <button
              onClick={() => {
                props.URL.pIdx = parseInt((props.URL.pIdx - 10) / 10) * 10;
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
                props.URL.pIdx = parseInt((props.URL.pIdx + 10) / 10) * 10;
                props.history.push(`?${decodeURI(qs.stringify(props.URL))}`);
              }}
            >
              다음 &gt;
            </button>
          )}
        </div>
      </div>
    </ProducerListDiv>
  );
}

export default withRouter(FindingProducer);
