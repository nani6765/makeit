import React, { useEffect } from "react";

import PostList from "./content/PostList.js";
import UploadButton from "../filter/UploadButton";

import { PartIPLoListDiv, FNBDiv } from "../../css/ParticipateCSS.js";

function LoList(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.URL]);

  return (
    <>
      <PartIPLoListDiv>
        {props.Loading ? (
          <p>isLoading</p>
        ) : (
          props.URL.category === "Lo" && (
            <PostList type="Lo" PostList={props.PostList} user={props.user} />
          )
        )}
      </PartIPLoListDiv>
    </>
  );
}

export default LoList;
