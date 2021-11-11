import React, { useEffect } from "react";
import FAFilter from "../filter/FAFilter";
import PostList from "../list/content/PostList.js";
import UploadButton from "../filter/UploadButton";
import Pagination from "./content/Pagination";

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
      <PostList user={props.user} type="FA" />
      <FNBDiv>
        <UploadButton category="배우찾기" />
        <Pagination />
      </FNBDiv>
    </>
  );
}

export default FAList;
