import React, { useState, useEffect } from "react";
import GNBArea from "./content/List/GNBArea";
import BodyHeader from "./content/List/BodyHeader";
import PostListArea from "./content/List/PostListArea";
import BodyFooter from "./content/List/BodyFooter";

import axios from "axios";

import { CommunityHeader, CommunityBody } from "../css/CommunityListCSS";

function CommunityList() {
  const [GNB, setGNB] = useState("전체게시판");
  const [SortPost, setSortPost] = useState("new");
  const [PostList, setPostList] = useState([]);
  const [PostIdx, setPostIdx] = useState(0);

  const getPostList = (skip) => {
    let body = {
      GNB: {
        category: GNB,
      },
      sortPost: SortPost,
      //skip: skip,
      //limit: 2,
    };
    console.log("body : ", body);
    axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        let temp;
        if (PostIdx) temp = [...PostList, ...response.data.postInfo];
        else temp = [...response.data.postInfo];
        setPostList(temp);
      } else {
        alert("error");
      }
    });
  };

  useEffect(() => {
    console.log("??");
    getPostList(0);
  }, [GNB, SortPost]);

  /*
  // 무한 스크롤ㄹㄹㄹㄹ
  const ScrollFunction = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;
    // console.log("scrollHeight ", scrollHeight)
    // console.log("scrollTop ", scrollTop)
    // console.log("clientHeight ", clientHeight)
    if(scrollTop + clientHeight >= scrollHeight) {
      setPostIdx(PostIdx + 2);
    }
  };

  useEffect(() => {
    console.log(PostIdx);
    getPostList(PostIdx);
  }, [PostIdx]);

  useEffect(() => {
    window.addEventListener('scroll', ScrollFunction, true);
  }, []);*/

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
