import React, { useState } from "react";
import CommunityGNB from "./main/CommunityGNB.js";
import PostPage from "./main/PostPage.js";
import MobileFooter from "../../HeaderAndFooter/MobileFooter.js";

function CommunityMain() {
  const [MainCategoryContent, setMainCategoryContent] = useState("게시판");
  const [SortPost, setSortPost] = useState("최신순");
  const [MainCategoryArrayIdx, setMainCategoryArrayIdx] = useState(0);
  const [SubCategoryContent, setSubCategoryContent] = useState("전체");

  return (
    <>
      <CommunityGNB
        MainCategoryContent={MainCategoryContent}
        setMainCategoryContent={setMainCategoryContent}
        SortPost={SortPost}
        setSortPost={setSortPost}
        MainCategoryArrayIdx={MainCategoryArrayIdx}
        setMainCategoryArrayIdx={setMainCategoryArrayIdx}
        SubCategoryContent={SubCategoryContent}
        setSubCategoryContent={setSubCategoryContent}
      />

      <PostPage
        MainCategoryContent={MainCategoryContent}
        SortPost={SortPost}
        SubCategoryContent={SubCategoryContent}
      />

      <MobileFooter path="/community" />
    </>
  );
}

export default CommunityMain;
