import React, { useState, useEffect } from "react";
import CommunityGNB from "./main/CommunityGNB.js";
import PostList from "./main/PostList.js";
import CommunityFNB from "./main/CommunityFNB.js";
import MobileFooter from "../../HeaderAndFooter/MobileFooter.js";
import axios from "axios";

function CommunityMain() {
  const [MainCategoryContent, setMainCategoryContent] = useState("게시판"); //MainCategory
  const [SortPost, setSortPost] = useState("최신순"); //PostLabel
  const [SubCategoryName, setSubCategoryName] = useState("전체"); //SubCategory
  const [MainCategoryArrayIdx, setMainCategoryArrayIdx] = useState(0); //Page번호
  const [AxiosCheck, setAxiosCheck] = useState(false);
  const [PostArray, setPostArray] = useState([]); //글 목록

  useEffect(() => {
    let body = {
      filter: {
        category: MainCategoryContent,
        subCategory: SubCategoryName,
      },
      sortPost: SortPost,
    };
    console.log("body", body);

    axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        setPostArray([...response.data.postInfo]);
        setAxiosCheck(true);
      } else {
        alert("error");
      }
    });
  }, [MainCategoryContent, SortPost, SubCategoryName]);

  useEffect(() => {
    console.log("PostArray", PostArray);
  }, [PostArray]);

  return (
    <>
      {/* 메인카테고리, 서브카테고리, 포스트라벨(최신순/인기순) */}
      <CommunityGNB
        MainCategoryContent={MainCategoryContent}
        setMainCategoryContent={setMainCategoryContent}
        SortPost={SortPost}
        setSortPost={setSortPost}
        MainCategoryArrayIdx={MainCategoryArrayIdx}
        setMainCategoryArrayIdx={setMainCategoryArrayIdx}
        SubCategoryName={SubCategoryName}
        setSubCategoryName={setSubCategoryName}
      />

      {/*Post결과*/}
      {AxiosCheck ? <PostList PostArray={PostArray} /> : null}

      {/* 페이지번호, 검색 */}
      <CommunityFNB />

      <MobileFooter path="/community" />
    </>
  );
}

export default CommunityMain;
