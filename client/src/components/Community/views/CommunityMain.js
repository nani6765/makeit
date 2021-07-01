import React, { useState } from "react";
import CommunityGNB from "./main/CommunityGNB.js";
import PostPage from "./main/PostPage.js";
import MobileFooter from "../../HeaderAndFooter/MobileFooter.js";
function CommunityMain() {
  const [category, setcategory] = useState("자유게시판");
  const [sortPost, setsortPost] = useState("최신순");

  return (
    <>
      <CommunityGNB category={category} setCategory={setcategory} />
      <PostPage category={category} sortPost={sortPost} />
      <MobileFooter path="/community" />
    </>
  );
}

export default CommunityMain;
