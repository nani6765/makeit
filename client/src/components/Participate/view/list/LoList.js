import React, { useState, useEffect } from "react";
import axios from "axios";

import LoFilter from "../filter/LoFilter.js";
import PostList from "./content/PostList.js";
import UploadButton from "../filter/UploadButton";
import Pagination from "./content/Pagination.js";

import { PartIPLoListDiv, FNBDiv } from "../../css/ParticipateCSS.js";


function LoList(props) {
  const [SubCategory, setSubCategory] = useState("전체");
  const [Skip, setSkip] = useState(0);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([]);

  const SubCategoryList = [
    "전체",
    "세트장",
    "스튜디오",
    "식당&카페",
    "주거공간",
    "사무실",
    "기타"
  ];

  useEffect(() => {
    let body = {
      type: "Lo",
      subCategory: SubCategory,
    }

    axios.post("/api/participate/getPageLen", body).then((response) => {
      if(response.data.success) {
        setPageLen(parseInt(response.data.len/12) + 1);
        setSkip(0);
      }
    })
  }, [SubCategory]);

  useEffect(() => {
    let sIdx = parseInt((Skip-1)/10);
    let temp = [];
    for(let i = sIdx*10 + 1; i<=Math.min(sIdx*10 + 10, PageLen); i++) {
      temp.push(i);
    }
    setPageIdxArr(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parseInt((Skip-1)/10), PageLen]);

  return (
    <>
      <PartIPLoListDiv>
        <LoFilter category="로케이션" SubCategory={SubCategory} setSubCategory={setSubCategory} SubCategoryList={SubCategoryList} />
        <div className="right">
          <PostList type="Lo" SubCategory={SubCategory} Skip={Skip*12} Sort={props.Sort}/>
        </div>
      </PartIPLoListDiv>
      <FNBDiv>   
        <UploadButton category="Lo" />
        <Pagination PageIdxArr={PageIdxArr} Skip={Skip} setSkip={setSkip} PageLen={PageLen} />
      </FNBDiv>
    </>
  );
}

export default LoList;
