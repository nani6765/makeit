import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import GNBArea from "./content/List/GNBArea";
import PostListArea from "./content/List/PostListArea";
import Pagination from "./content/List/Pagination";
import qs from "qs";
import NoSearch from "../../utils/view/Page/NoSearch.js";

import axios from "axios";

import {
  CommunityHeader,
  CommunityBody,
  FNBDiv,
} from "../css/CommunityListCSS";
import { ReactComponent as SearchIcon } from "../css/img/searchIcon.svg";

function CommunityList() {
  let location = useLocation();
  let history = useHistory();

  const [URL, setURL] = useState("");
  const [PostList, setPostList] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [SearchTerm, setSearchTerm] = useState("");

  async function getPostList() {
    setLoading(true);
    let temp = qs.parse(location.search, { ignoreQueryPrefix: true });

    if (location.search.slice(1) != URL) {
      setURL(location.search.slice(1));
      if (temp.pIdx) {
        setSkip(parseInt(temp.pIdx));
      } else {
        setSkip(0);
      }
      if (temp.searchTerm) {
        setSearchTerm(temp.searchTerm);
      } else {
        setSearchTerm("");
      }
    }

    let body = {
      GNB: { category: temp.category },
      sortPost: temp.sort,
      skip: temp.pIdx * 10,
      limit: 10,
    };

    if (temp.searchTerm) {
      body.searchTerm = temp.searchTerm;
    }

    await axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        let temp = [...response.data.postInfo];
        setPostList(temp);
        setPageLen(parseInt((response.data.pageLen - 1) / 10) + 1);
      } else {
        alert("error");
      }
      setLoading(false);
    });
  }

  const SearchHandler = (e) => {
    e.preventDefault();
    if (!/\S/.test(SearchTerm)) {
      return;
    }
    let temp = qs.parse(URL);
    temp.searchTerm = SearchTerm.trim();
    temp.pIdx = 0;
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
  };

  useEffect(() => {
    if (location.search) {
      setURL(location.search.slice(1));
    } else {
      setURL("category=전체게시판&sort=최신순&pIdx=0");
      history.push(`?category=전체게시판&sort=최신순&pIdx=0`);
    }
  }, [location]);

  useEffect(() => {
    getPostList();
  }, [location.search]);

  useEffect(() => {
    let sIdx = parseInt(Skip / 10);
    let temp = [];
    for (let i = sIdx * 10 + 1; i <= Math.min(sIdx * 10 + 10, PageLen); i++) {
      temp.push(i);
    }
    setPageIdxArr(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parseInt(Skip / 10), PageLen]);

  return (
    <>
      <CommunityHeader>
        <div className="bannerDiv">
          <img src="./Img/CommunityBanner.png" alt="" />
        </div>
        <GNBArea URL={URL} setURL={setURL} />
      </CommunityHeader>
      <CommunityBody>
        {URL === "" || Loading ? (
          <p>loading</p>
        ) : (
          <>
            {qs.parse(URL).searchTerm && (
              <div className="searchResult">
                <span className="term">"{qs.parse(URL).searchTerm}"</span> 검색
                결과
              </div>
            )}
            {qs.parse(URL).searchTerm && PostList.length === 0 && <NoSearch />}
            <PostListArea PostList={PostList} getPostList={getPostList} />
            <FNBDiv>
              <Pagination
                PageLen={PageLen}
                PageIdxArr={PageIdxArr}
                Skip={Skip}
                URL={URL}
              />
              <div className="search">
                <input
                  type="text"
                  value={SearchTerm}
                  onChange={(e) => setSearchTerm(e.currentTarget.value)}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) SearchHandler(e);
                  }}
                />
                <SearchIcon onClick={(e) => SearchHandler(e)} />
              </div>
            </FNBDiv>
          </>
        )}
      </CommunityBody>
    </>
  );
}

export default CommunityList;
