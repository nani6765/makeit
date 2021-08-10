import React, { useState, useEffect } from "react";
import CommunityGNB from "./main/CommunityGNB.js";
import PostList from "./main/PostList.js";
import CommunityFNB from "./main/FNB/CommunityFNB.js";
import axios from "axios";

import MobileFooter from "../../HeaderAndFooter/Footer/MobileFooter.js";
function CommunityMain(props) {
  const [AxiosCheck, setAxiosCheck] = useState(false);
  const [PostArray, setPostArray] = useState([]); //글 목록

  const [MainCategoryContent, setMainCategoryContent] = useState("게시판"); //MainCategory
  const [SortPost, setSortPost] = useState("최신순"); //PostLabel
  const [SubCategoryName, setSubCategoryName] = useState("전체"); //SubCategory
  const [PageTotalIdx, setPageTotalIdx] = useState(0);
  const [PageIdx, setPageIdx] = useState(1);
  const [SearchTerm, setSearchTerm] = useState("");
  const [SearchCheck, setSearchCheck] = useState(false);
  const [FiltersObject, setFiltersObject] = useState([]);

  useEffect(() => {
    console.log("unmount??");
  })

  useEffect(() => {
    if (props.location.state === undefined) {
      setMainCategoryContent("게시판");
    } else {
      setMainCategoryContent(props.location.state.category);
    }
  }, []);

  useEffect(() => {
    setPageIdx(1);
  }, [MainCategoryContent, SortPost, SubCategoryName]);

  useEffect(() => {
    let body = {
      category: {
        category: MainCategoryContent,
        subCategory: SubCategoryName,
      },
      sortPost: SortPost,
      PageIdx: PageIdx,
      term: SearchTerm,
      filter: [...FiltersObject],
    };

    axios.post("/api/community/", body).then((response) => {
      if (response.data.success) {
        setPostArray([...response.data.postInfo]);
        setPageTotalIdx(response.data.totalIdx);
        setAxiosCheck(true);
      } else {
        alert("error");
      }
    });
  }, [
    MainCategoryContent,
    SortPost,
    SubCategoryName,
    PageIdx,
    SearchCheck,
    FiltersObject,
  ]);

  useEffect(() => {
    setSearchTerm("");
  }, [MainCategoryContent, SubCategoryName]);

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
        setSearchTerm={setSearchTerm}
        setSearchCheck={setSearchCheck}
        SearchCheck={SearchCheck}
        FiltersObject={FiltersObject}
        setFiltersObject={setFiltersObject}
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
            SearchTerm={SearchTerm}
            setSearchTerm={setSearchTerm}
            SearchCheck={SearchCheck}
            setSearchCheck={setSearchCheck}
            SearchCheck={SearchCheck}
          />
        </>
      ) : null}
      <MobileFooter Path="community" />
    </>
  );
}

export default CommunityMain;
