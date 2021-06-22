import React, { useState } from "react";
import CommunityGNB from "./main/CommunityGNB.js";
import PostList from "./main/PostList.js";

function CommunityMain() {
  const [category, setcategory] = useState("자유게시판");
  return (
    <>
      <CommunityGNB category={category} setCategory={setcategory} />
      <PostList category={category} />
    </>
  );
}

export default CommunityMain;
