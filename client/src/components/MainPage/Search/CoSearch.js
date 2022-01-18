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

function CoSearch() {
  let history = useHistory();
  let location = useLocation();

  const [URL, setURL] = useState({});
  const [CommunityLength, setCommunityLength] = useState(0);
  const [CommunityResult, setCommunityResult] = useState([]);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  const [PageLen, setPageLen] = useState(1);
  const [IsLoading, setIsLoading] = useState(false);
  const [SearchTerm, setSearchTerm] = useState("");

  const CategoryList = [
    "전체게시판",
    "자유게시판",
    "질문게시판",
    "홍보게시판",
    "건의함",
  ];

  const SearchHandler = (e) => {
    e.preventDefault();
    if (SearchTerm && !/\S/.test(SearchTerm)) {
      return;
    }
    if (!SearchTerm) {
      history.push("/");
    } else history.push(`?term=${SearchTerm}`);
  };

  const ClickFunc = (category) => {
    history.push(
      `/search/community?term=${URL.term}&pIdx=0&category=${category}`
    );
  };

  useEffect(() => {
    let temp = qs.parse(location.search, { ignoreQueryPrefix: true });
    console.log(temp);
    if (temp.term && temp.pIdx && temp.category) {
      setURL(qs.parse(location.search, { ignoreQueryPrefix: true }));
    } else if (temp.term && (!temp.pIdx || !temp.category)) {
      history.push(
        `/search/community?term=${temp.term}&pIdx=0&category=전체게시판`
      );
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

      axios.post("/api/community/search", body).then((response) => {
        if (response.data.success) {
          setCommunityLength(response.data.postLength);
          setCommunityResult([...response.data.post]);
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
                  <span>"커뮤니티"</span> 검색 결과 ({CommunityLength})
                </p>
              </div>
              <GNBDiv>
                <ul>
                  {CategoryList.map((category, idx) => {
                    return (
                      <GNBItem
                        className={category === URL.category ? "active" : null}
                        onClick={() => ClickFunc(category)}
                        key={idx}
                      >
                        <p>{category}</p>
                      </GNBItem>
                    );
                  })}
                </ul>
              </GNBDiv>
              {CommunityLength > 0 &&
                CommunityResult.map((coPost, idx) => {
                  console.log(coPost.images);
                  if (coPost.images.length !== 0) {
                    return (
                      <Link to={"/community/post/" + coPost.url} key={idx}>
                        <ImageCard>
                          <div className="thumbnail">
                            <img src={coPost.images[0].path} />
                          </div>
                          <p className="title">{coPost.title}</p>
                          <div className="content">{coPost.content}</div>
                          <Avatar
                            src={coPost.auther.photoURL}
                            size="30"
                            round={true}
                            style={{ border: "1px solid #c6c6c6" }}
                          />
                          <p className="auther">{coPost.auther.displayName}</p>
                          <p className="realTime">{coPost.realTime}</p>
                          <p className="category">{coPost.category}</p>
                        </ImageCard>
                      </Link>
                    );
                  } else {
                    return (
                      <Link to={"/community/" + coPost.url} key={idx}>
                        <PostCard>
                          <p className="title">{coPost.title}</p>
                          <div className="content">{coPost.content}</div>
                          <Avatar
                            src={coPost.auther.photoURL}
                            size="30"
                            round={true}
                            style={{ border: "1px solid #c6c6c6" }}
                          />
                          <p className="auther">{coPost.auther.displayName}</p>
                          <p className="realTime">{coPost.realTime}</p>
                          <p className="category">{coPost.category}</p>
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

export default withRouter(CoSearch);
