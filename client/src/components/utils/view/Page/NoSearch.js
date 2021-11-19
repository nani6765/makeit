import React from "react";
import { PageDiv } from "./PageCSS.js";

function NoSearch() {
  return (
    <PageDiv>
      <h1>검색결과가 없습니다.</h1>
      <img src={process.env.PUBLIC_URL + "/Img/Surprise.png"} />
      <p>단어의 철자가 정확한지 확인해 주시기 바랍니다.</p>
    </PageDiv>
  );
}

export default NoSearch;
