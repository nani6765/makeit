import React from "react";
import PageDiv from "./PageCSS.js";

function NoURL() {
  return (
    <PageDiv>
      <h1>해당 페이지는 존재하지 않는 페이지입니다.</h1>
      <img src={process.env.PUBLIC_URL + "/Img/Surprise.png"} />
      <p>
        삭제된 글이거나, <br /> 페이지 URL을 다시 확인해주세요.
      </p>
    </PageDiv>
  );
}

export default NoURL;
