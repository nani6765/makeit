import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import GNBArea from "./content/List/GNBArea";
import BodyHeader from "./content/List/BodyHeader";
import PostListArea from "./content/List/PostListArea";
import BodyFooter from "./content/List/BodyFooter";
import qs from "qs";

import axios from "axios";

import { CommunityHeader, CommunityBody } from "../css/CommunityListCSS";

function CommunityList() {
  let history = useHistory();
  let location = useLocation();

  const [URL, setURL] = useState("");
  const [PostList, setPostList] = useState([]);
  const [PostSkip, setPostSkip] = useState(0);
  const [PostEnd, setPostEnd] = useState(false);
  const [PostLimit, setPostLimit] = useState(10);
  const [Loading, setLoading] = useState(false);

  const getPostList = () => {
    setLoading(true);
    let temp = qs.parse(location.search, { ignoreQueryPrefix: true });
    console.log("temp", temp);
    let body = {
      GNB: { category: temp.category },
      sortPost: temp.sort,
      skip: PostSkip,
      limit: PostLimit,
    };

    axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        let temp = [...response.data.postInfo];
        setPostList(temp);
        /*
        if (temp.length) {
          setPostList(temp);
          setPostSkip((PostSkip) => {
            return Math.min(PostSkip + PostLimit, temp.length);
          });
        }
        */
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
      setURL("category=전체게시판&sort=new");
    }
  }, []);

  useEffect(() => {
    getPostList();
  }, [location.search]);

  useEffect(() => {
    if (URL != location.search.slice(1)) {
      history.push(`?${URL}`);
    }
  }, [URL]);

  /*
  useEffect(() => {
    if (!PostSkip && !PostList.length) {
      getPostList();
    }
  }, [PostSkip, PostList]);
  */

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
            <BodyFooter />
          </>
        )}
      </CommunityBody>
    </>
  );
}

export default CommunityList;
