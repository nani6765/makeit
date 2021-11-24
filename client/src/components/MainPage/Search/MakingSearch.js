import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";
import Pagination from "./Pagination.js";

import axios from "axios";
import qs from "qs";
import Loading from "../../utils/view/Page/Loading.js";

import Avatar from "react-avatar";
import {
  SearchBody,
  SearchInput,
  PostCard,
  ImageCard,
  GNBDiv,
  GNBItem,
  PagiCSS,
} from "../css/SearchCSS.js";
import SearchIcon from "./search.svg";

function MakingSearch() {
  let history = useHistory();
  let location = useLocation();

  const [URL, setURL] = useState({});
  const [SearchTerm, setSearchTerm] = useState("");
  const [MakingLength, setMakingLength] = useState(0);
  const [MakingResult, setMakingResult] = useState([]);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  const [PageLen, setPageLen] = useState(1);
  const [IsLoading, setIsLoading] = useState(false);

  const CategoryList = [
    {
      label: "전체",
      value: "all",
    },
    {
      label: "영상 제작자 탐색",
      value: "proPost",
    },
    {
      label: "영상 의뢰하기",
      value: "reqVideo",
    },
    {
      label: "제작 영상 알리기",
      value: "shareVideo",
    },
  ];

  const SearchHandler = (e) => {
    e.preventDefault();
    if (SearchTerm && !/\S/.test(SearchTerm)) {
      return;
    }
    if (!SearchTerm) {
      history.push("/");
    } else
      history.push(`/search/making?term=${SearchTerm}&pIdx=0&category=all`);
  };

  const ClickFunc = (category) => {
    history.push(`/search/making?term=${URL.term}&pIdx=0&category=${category}`);
  };

  const setMakingURL = (type) => {
    switch (type) {
      case "영상 제작자 탐색":
        return "/making/producerPost/";
      case "영상 의뢰하기":
        return "/making/requestPost/";
      case "제작 영상 알리기":
        return "/making/shareVideo/";
      default:
        return;
    }
  };

  useEffect(() => {
    let temp = qs.parse(location.search, { ignoreQueryPrefix: true });
    console.log(temp);
    if (temp.term && temp.pIdx && temp.category) {
      setURL(qs.parse(location.search, { ignoreQueryPrefix: true }));
    } else if (temp.term && (!temp.pIdx || !temp.category)) {
      history.push(`/search/making?term=${temp.term}&pIdx=0&category=all`);
    } else {
      history.push("/");
    }
  }, [location]);

  useEffect(() => {
    if (URL.term) {
      setIsLoading(true);
      let body = {
        term: URL.term,
        skip: URL.pIdx * 10,
        limit: 10,
      };
      if (URL.category) {
        body.category = URL.category;
      }

      axios.post("/api/making/search", body).then((response) => {
        if (response.data.success) {
          setMakingLength(response.data.postLength);
          setMakingResult([...response.data.post]);
          setPageLen(parseInt(response.data.postLength / 10) + 1);
        }
        setIsLoading(false);
      });
    }
  }, [URL]);

  useEffect(() => {
    let sIdx = parseInt(parseInt(URL.pIdx) / 10);
    let temp = [];
    for (let i = sIdx * 10 + 1; i <= Math.min(sIdx * 10 + 10, PageLen); i++) {
      temp.push(i);
    }
    setPageIdxArr(temp);
  }, [parseInt(URL.pIdx / 10), PageLen]);

  return (
    <>
      {IsLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBody>
            <div>
              <SearchInput>
                <input
                  type="text"
                  defaultValue={URL.term}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) SearchHandler(e);
                  }}
                />
                <button onClick={(e) => SearchHandler(e)}>
                  <img src={SearchIcon} />
                </button>
              </SearchInput>
            </div>
            <div className="result">
              <div className="resultHeader" style={{ border: "none" }}>
                <p>
                  <span>"영상 제작"</span> 검색 결과 ({MakingLength})
                </p>
              </div>
              <GNBDiv>
                <ul>
                  {CategoryList.map((category, idx) => {
                    return (
                      <GNBItem
                        className={
                          category.value === URL.category ? "active" : null
                        }
                        onClick={() => ClickFunc(category.value)}
                        key={idx}
                      >
                        <p>{category.label}</p>
                      </GNBItem>
                    );
                  })}
                </ul>
              </GNBDiv>
              {MakingLength > 0 &&
                MakingResult.map((making, idx) => {
                  if (making.thumbnailUrl !== undefined) {
                    return (
                      <Link
                        to={setMakingURL(making.type) + making.url}
                        key={idx}
                      >
                        <ImageCard>
                          <div className="thumbnail">
                            <img src={making.thumbnailUrl} />
                          </div>
                          <p className="title">{making.oneLineIntroduce}</p>
                          <div className="content">{making.content}</div>
                          <Avatar
                            src={making.auther.photoURL}
                            size="30"
                            round={true}
                            style={{ border: "1px solid #c6c6c6" }}
                          />
                          <p className="auther">{making.auther.displayName}</p>
                          <p className="realTime">{making.realTime}</p>
                          <p className="category">{making.type}</p>
                        </ImageCard>
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        to={setMakingURL(making.type) + making.url}
                        key={idx}
                      >
                        <PostCard>
                          <p className="title">{making.oneLineIntroduce}</p>
                          <div className="content">{making.content}</div>
                          <Avatar
                            src={making.auther.photoURL}
                            size="30"
                            round={true}
                            style={{ border: "1px solid #c6c6c6" }}
                          />
                          <p className="auther">{making.auther.displayName}</p>
                          <p className="realTime">{making.realTime}</p>
                          <p className="category">{making.type}</p>
                        </PostCard>
                      </Link>
                    );
                  }
                })}
            </div>
          </SearchBody>
          {!IsLoading && (
            <PagiCSS>
              <Pagination URL={URL} PageLen={PageLen} PageIdxArr={PageIdxArr} />
            </PagiCSS>
          )}
        </>
      )}
    </>
  );
}

export default MakingSearch;
