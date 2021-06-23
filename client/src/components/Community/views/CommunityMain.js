import React, { useState } from "react";
import CommunityGNB from "./main/CommunityGNB.js";
import PostLabel from "./main/PostLabel.js";
import PostPage from "./main/PostPage.js";

function CommunityMain() {
  const [category, setcategory] = useState("자유게시판");
  const [sortPost, setsortPost] = useState("최신순");

  return (
    <>
      <CommunityGNB category={category} setCategory={setcategory} />
      <PostLabel
        category={category}
        sortPost={sortPost}
        setsortPost={setsortPost}
      />
      <PostPage category={category} sortPost={sortPost} />
    </>
  );
}

export default CommunityMain;
