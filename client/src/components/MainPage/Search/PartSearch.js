import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
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

function PartSearch() {
  let history = useHistory();
  let location = useLocation();

  const [URL, setURL] = useState({});
  const [SearchTerm, setSearchTerm] = useState("");
  const [PartLength, setPartLength] = useState(0);
  const [PartResult, setPartResult] = useState([]);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  const [PageLen, setPageLen] = useState(1);
  const [IsLoading, setIsLoading] = useState(false);

  const CategoryList = [
    {
      label: "전체",
      value: "all",
    },
    {
      label: "파트너 찾기",
      value: "FP",
    },
    {
      label: "배우 찾기",
      value: "FA",
    },
    {
      label: "프로 알리기",
      value: "IP",
    },
    {
      label: "로케이션",
      value: "Lo",
    },
  ];

  const setCategory = (type) => {
    switch (type) {
      case "FA":
        return "배우 찾기";
      case "FP":
        return "파트너 찾기";
      case "IP":
        return "프로 알리기";
      case "Lo":
        return "로케이션";
    
      default:
        break;
    }
  }

  const ClickFunc = (category) => {
    history.push(`/search/participate?term=${URL.term}&pIdx=0&category=${category}`);
  };

  const SearchHandler = (e) => {
    e.preventDefault();
    if (SearchTerm && !/\S/.test(SearchTerm)) {
      return;
    }
    if (!SearchTerm) {
      history.push("/");
    } else history.push(`?term=${SearchTerm}`);
  };
  
  useEffect(() => {
    let temp = qs.parse(location.search, { ignoreQueryPrefix: true });
    console.log(temp);
    if (temp.term && temp.pIdx && temp.category) {
      setURL(qs.parse(location.search, { ignoreQueryPrefix: true }));
    } else if (temp.term && (!temp.pIdx || !temp.category)) {
      history.push(`/search/participate?term=${temp.term}&pIdx=0&category=all`);
    } else {
      history.push("/");
    }
  }, [location]);

  useEffect(() => {
    if (URL.category) {
      setIsLoading(true);
      let body = {
        type: URL.category,
        term: URL.term,
        skip: URL.pIdx * 10,
        limit: 10,
      };

      axios.post("/api/participate/search", body).then((response) => {
        if (response.data.success) {
          setPartLength(response.data.postLength);
          setPartResult([...response.data.post]);
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
                  <span>"영상 참여"</span> 검색 결과 ({PartLength})
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
              {PartLength > 0 &&
                PartResult.map((part, idx) => {
                  if (part.thumbnail || part.images[0]) {
                    let thumbnailUrl;
                    if(part.thumbnail) {
                      thumbnailUrl = part.thumbnail[0].path;
                    } else {
                      thumbnailUrl = part.images[0].path;
                    }
                    return (
                      <Link
                        to={"/participate/post/"+part.url}
                        key={idx}
                      >
                        <ImageCard>
                          <div className="thumbnail">
                            <img src={thumbnailUrl} />
                          </div>
                          <p className="title">{part.title}</p>
                          <div className="content">{part.content}</div>
                          <Avatar
                            src={part.auther.photoURL}
                            size="30"
                            round={true}
                            style={{ border: "1px solid #c6c6c6" }}
                          />
                          <p className="auther">{part.auther.displayName}</p>
                          <p className="realTime">{part.realTime}</p>
                          <p className="category">{setCategory(part.type)}</p>
                        </ImageCard>
                      </Link>
                    );
                  } else {
                    return (
                      <Link
                        to={"/participate/post/"+part.url}
                        key={idx}
                      >
                        <PostCard>
                          <p className="title">{part.title}</p>
                          <div className="content">{part.content}</div>
                          <Avatar
                            src= {part.auther.photoURL}
                            size="30"
                            round={true}
                            style={{ border: "1px solid #c6c6c6" }}
                          />
                          <p className="auther">{part.auther.displayName}</p>
                          <p className="realTime">{part.realTime}</p>
                          <p className="category">{setCategory(part.type)}</p>
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

export default PartSearch;
