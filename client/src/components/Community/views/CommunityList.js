import React, { useState, useEffect } from "react";
import GNBArea from "./content/List/GNBArea";
import BodyHeader from "./content/List/BodyHeader";
import PostListArea from "./content/List/PostListArea";
import BodyFooter from "./content/List/BodyFooter";

import axios from "axios";

import { CommunityHeader, CommunityBody } from "../css/CommunityListCSS";
import { getEventListener } from "events";

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
        if(temp.length) {
          setPostList(temp);
          setPostSkip((PostSkip) => {
            return Math.min(PostSkip + PostLimit, temp.length);
          })
        }
      } else {
        alert("error");
      }
    });
  };

  useEffect(() => {
    if(!PostSkip && !PostList.length) {
      getPostList();
    } else {
      setPostSkip(0);
      setPostList([]);
    }
  }, [GNB, SortPost]);

  useEffect(() => {
    if(!PostSkip && !PostList.length) {
      getPostList();
    }
  }, [PostSkip, PostList])
  
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
        <PostListArea PostList={PostList} getPostList={getPostList} />
        <BodyFooter />
      </CommunityBody>
    </>
  );
}

export default CommunityList;
