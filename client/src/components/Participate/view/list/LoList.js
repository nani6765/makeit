import React, { useEffect } from "react";

import LoFilter from "../filter/LoFilter.js";
import PostList from "./content/PostList.js";
import UploadButton from "../filter/UploadButton";
import Pagination from "./content/Pagination.js";

import { PartIPLoListDiv, FNBDiv } from "../../css/ParticipateCSS.js";

function LoList(props) {
  const SubCategoryList = [
    "전체",
    "세트장",
    "스튜디오",
    "식당&카페",
    "주거공간",
    "사무실",
    "기타",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.URL]);

  return (
    <>
      <PartIPLoListDiv>
        <LoFilter
          category="로케이션"
          URL={props.URL}
          setURL={props.setURL}
          SubCategoryList={SubCategoryList}
        />
        <div className="right">
          <PostList
            user={props.user}
            type="Lo"
            URL={props.URL}
            setURL={props.setURL}
          />
        </div>
      </PartIPLoListDiv>
      <FNBDiv>
        <UploadButton category="로케이션" />
        <Pagination URL={props.URL} setURL={props.setURL} />
      </FNBDiv>
    </>
  );
}

export default LoList;
