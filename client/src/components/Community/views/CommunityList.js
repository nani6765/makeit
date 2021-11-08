import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import GNBArea from "./content/List/GNBArea";
import BodyHeader from "./content/List/BodyHeader";
import PostListArea from "./content/List/PostListArea";
import Pagination from "./content/List/Pagination";
import qs from "qs";

import axios from "axios";

import { CommunityHeader, CommunityBody, FNBDiv } from "../css/CommunityListCSS";

function CommunityList() {
  let location = useLocation();

  const [URL, setURL] = useState("");
  const [PostList, setPostList] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  const [PostLimit, setPostLimit] = useState(10);
  const [Loading, setLoading] = useState(false);

  const getPostList = () => {
    setLoading(true);
    let temp = qs.parse(location.search, { ignoreQueryPrefix: true });

    if (location.search.slice(1) != URL) {
      setURL(location.search.slice(1));
      setSkip(temp.pIdx);
    }

    let body = {
      GNB: { category: temp.category },
      sortPost: temp.sort,
      skip: temp.pIdx * 10,
      limit: PostLimit,
    };

    axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        let temp = [...response.data.postInfo];
        setPostList(temp);
        setPageLen(parseInt((response.data.pageLen - 1)/10) + 1);
      } else {
        alert("error");
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    if (location.search) {
      setURL(location.search.slice(1));
    } else {
      setURL("category=전체게시판&sort=new&pIdx=1");
    }
  }, []);

  useEffect(() => {
    getPostList();
  }, [location.search]);

  useEffect(() => {
    console.log(Skip);
  }, [Skip]);

  useEffect(() => {
    let sIdx = parseInt(Skip/10);
    let temp = [];
    for(let i = sIdx*10 + 1; i<=Math.min(sIdx*10 + 9, PageLen); i++) {
      temp.push(i);
    }
    setPageIdxArr(temp);
    console.log(PageLen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parseInt(Skip/10), PageLen])

  useEffect(() => {
    console.log("PageIdxArr", PageIdxArr);
  }, [PageIdxArr]);


  return (
    <>
      <CommunityHeader>
        <div className="bannerDiv">
          <img src="./Img/CommunityBanner.png" alt="" />
        </div>
        <GNBArea URL={URL} setURL={setURL} />
        <BodyHeader URL={URL} setURL={setURL} />
      </CommunityHeader>
      <CommunityBody>
        {URL === "" || Loading ? (
          <p>loading</p>
        ) : (
          <>
            <PostListArea PostList={PostList} getPostList={getPostList} />
            <FNBDiv>
              <Pagination PageLen={PageLen} PageIdxArr={PageIdxArr} Skip={Skip} URL={URL}/>
            </FNBDiv>
          </>
        )}
      </CommunityBody>
    </>
  );
}

export default CommunityList;
