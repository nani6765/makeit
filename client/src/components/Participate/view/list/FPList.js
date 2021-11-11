import React, { useEffect } from "react";
import FPFilter from "../filter/FPFilter";
import PostList from "./content/PostList";
import UploadButton from "../filter/UploadButton";
import Pagination from "./content/Pagination";

import { PartFilter, FNBDiv } from "../../css/ParticipateCSS.js";

function FPList(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.URL]);

  return (
    <>
      <PartFilter style={{ borderRadius: "15px" }}>
        <FPFilter URL={props.URL} setURL={props.setURL} />
      </PartFilter>
      <PostList type="FP" />
      <FNBDiv>
        <UploadButton category="파트너찾기" />
        <Pagination />
      </FNBDiv>
    </>
  );
}

export default FPList;
