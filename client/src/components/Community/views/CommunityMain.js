import React, { useState, useEffect } from "react";
import CommunityGNB from "./main/CommunityGNB.js";
import PostList from "./main/PostList.js";
import CommunityFNB from "./main/CommunityFNB.js";
import MobileFooter from "../../HeaderAndFooter/MobileFooter.js";
import axios from "axios";

function CommunityMain() {
  const [AxiosCheck, setAxiosCheck] = useState(false);
  const [PostArray, setPostArray] = useState([]); //글 목록

  const [MainCategoryContent, setMainCategoryContent] = useState("게시판"); //MainCategory
  const [SortPost, setSortPost] = useState("최신순"); //PostLabel
  const [SubCategoryName, setSubCategoryName] = useState("전체"); //SubCategory
  const [PageTotalIdx, setPageTotalIdx] = useState(0);
  const [PageIdx, setPageIdx] = useState(1);

  useEffect(() => {
    setPageIdx(1);
  }, [MainCategoryContent, SortPost, SubCategoryName]);

  useEffect(() => {
    let body = {
      filter: {
        category: MainCategoryContent,
        subCategory: SubCategoryName,
      },
      sortPost: SortPost,
      PageIdx: PageIdx,
    };
    console.log("body", body);

    axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        setPostArray([...response.data.postInfo]);
        setPageTotalIdx(response.data.totalIdx);
        setAxiosCheck(true);
      } else {
        alert("error");
      }
    });
  }, [MainCategoryContent, SortPost, SubCategoryName, PageIdx]);

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
        SubCategoryName={SubCategoryName}
        setSubCategoryName={setSubCategoryName}
      />

      {/*Post결과*/}
      {AxiosCheck ? (
        <>
          <PostList PostArray={PostArray} />
          {/* 페이지번호, 검색 */}
          <CommunityFNB
            PageTotalIdx={PageTotalIdx}
            PageIdx={PageIdx}
            setPageIdx={setPageIdx}
          />
        </>
      ) : null}

      <MobileFooter path="/community" />
    </>
  );
}

export default CommunityMain;
