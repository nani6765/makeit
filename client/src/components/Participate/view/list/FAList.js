import React, { useEffect } from "react";
import FAFilter from "../filter/FAFilter";
import PostList from "../list/content/PostList.js";
import UploadButton from "../filter/UploadButton";

import { PartFilter, FNBDiv } from "../../css/ParticipateCSS.js";

function FAList(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.URL]);

  return (
    <>
      <PartFilter style={{ borderRadius: "15px" }}>
        <FAFilter user={props.user} URL={props.URL} setURL={props.setURL} />
      </PartFilter>
      {props.URL.category === "FA" && (
        <PostList type="FA" PostList={props.PostList} user={props.user} />
      )}
      <FNBDiv>
        <UploadButton category="배우찾기" />
      </FNBDiv>
    </>
  );
}

export default FAList;
