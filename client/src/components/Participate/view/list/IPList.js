import React, { useEffect } from "react";

import PostList from "./content/PostList.js";
import UploadButton from "../filter/UploadButton";

import { PartIPLoListDiv, FNBDiv } from "../../css/ParticipateCSS.js";

function IPList(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.URL]);

  return (
    <>
      <PartIPLoListDiv>
        <div className="right">
          {props.Loading ? (
            <p>isLoading</p>
          ) : (
            props.URL.category === "IP" && (
              <PostList type="IP" PostList={props.PostList} user={props.user} />
            )
          )}
        </div>
      </PartIPLoListDiv>
    </>
  );
}

export default IPList;
