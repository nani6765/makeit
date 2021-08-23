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

  useEffect(() => {
    let body = {
      GNB: {
        category: GNB,
      },
      sortPost: SortPost,
    };

    axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        setPostList([...response.data.postInfo]);
      } else {
        alert("error");
      }
    });
  }, [GNB, SortPost]);

  useEffect(() => {
    console.log(PostList);
  }, [PostList]);

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
