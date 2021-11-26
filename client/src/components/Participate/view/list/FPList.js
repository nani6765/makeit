import React, { useEffect } from "react";
import FPFilter from "../filter/FPFilter";
import PostList from "./content/PostList";
import UploadButton from "../filter/UploadButton";

import { PartFilter, FNBDiv } from "../../css/ParticipateCSS.js";

function FPList(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.URL]);

  return (
    <>
      {props.Loading ? (
        <p>isLoading</p>
      ) : (
        props.URL.category === "FP" && (
          <PostList type="FP" PostList={props.PostList} user={props.user} />
        )
      )}
    </>
  );
}

export default FPList;
