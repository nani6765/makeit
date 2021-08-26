import React, { useState, useEffect } from "react";
import GNBArea from "./content/List/GNBArea";
import BodyHeader from "./content/List/BodyHeader";
import PostListArea from "./content/List/PostListArea";
import BodyFooter from "./content/List/BodyFooter";

import axios from "axios";

import { CommunityHeader, CommunityBody } from "../css/CommunityListCSS";
import { template } from "lodash";

function CommunityList() {
  const [GNB, setGNB] = useState("전체게시판");
  const [SortPost, setSortPost] = useState("new");
  const [PostList, setPostList] = useState([]);

  const [PostSkip, setPostSkip] = useState(0);
  const [PostEnd, setPostEnd] = useState(false);
  const [PostLimit, setPostLimit] = useState(10);

  const getPostList = () => {
    let body = {
      GNB: {
        category: GNB,
      },
      sortPost: SortPost,
      skip: PostSkip,
      limit: PostLimit,
    };
    axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        let temp = [...PostList, ...response.data.postInfo];
        setPostList(temp);
        if(PostSkip + PostLimit > temp.length) {
          setPostEnd(true);
        }
      } else {
        alert("error");
      }
    });
  };

  useEffect(() => {
    setPostEnd(false);
    setPostList([]);
    if(PostSkip) {
      setPostSkip(0);
    } else {
      getPostList();
    }
  }, [GNB, SortPost]);

  const ScrollFunction = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;
    // console.log("scrollHeight ", scrollHeight)
    // console.log("scrollTop ", scrollTop)
    // console.log("clientHeight ", clientHeight)
    if(scrollTop + clientHeight >= scrollHeight) {
      setPostSkip(PostSkip => PostSkip + PostLimit);
    }
  };

  useEffect(() => {
    console.log(PostSkip, PostEnd);
    if(!PostEnd) {
      getPostList();
    } else if(PostList.length != PostSkip) {
      setPostSkip(PostList.length);
    }
  }, [PostSkip]);

  useEffect(() => {
    window.addEventListener('scroll', ScrollFunction, true);
  }, []);

  return (
    <>
      <CommunityHeader>
        <div className="bannerDiv">
          <img src="./Img/CommunityBanner.png" alt="" />
        </div>
        <GNBArea setGNB={setGNB} />
      </CommunityHeader>
      <CommunityBody>
        <BodyHeader GNB={GNB} SortPost={SortPost} setSortPost={setSortPost} />
        <PostListArea PostList={PostList} />
        <BodyFooter />
      </CommunityBody>
    </>
  );
}

export default CommunityList;
