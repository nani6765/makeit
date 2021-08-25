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

  const [PostSkip, setPostSkip] = useState(0);
  const [PostLimit, setPostLimit] = useState(5);

  const getPostList = (body) => {
    console.log("body : ", body);
    axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        let temp = [...PostList, ...response.data.postInfo];
        setPostList(temp);
        setPostSkip(Math.min(PostSkip + limit, temp.length));
      } else {
        alert("error");
      }
    });
  };

  const loadMoreHanlder = () => {
    let skip = PostSkip + skip;
    let body = {
      postNum: props.match.params.postId,
      skip: skip,
      limit: Limit,
      loadMore: skip,
    };
    getReples(body);
    setSkip(skip);
  };

  useEffect(() => {
    let body = {
      GNB: {
        category: GNB,
      },
      sortPost: SortPost,
      skip: PostSkip,
      limit: PostLimit,
    };
    getPostList(body);
  }, [GNB, SortPost]);

  const ScrollFunction = () => {
    let TargetDiv = document.querySelector("#PostList");
    if (
      Math.ceil(TargetDiv.scrollTop) + Math.ceil(TargetDiv.clientHeight) >=
      TargetDiv.scrollHeight
    ) {
      loadMoreHanlder();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollFunction, true);
  }, []);

  /*
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
