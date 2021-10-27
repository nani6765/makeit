import React, { useState, useEffect } from "react";
import axios from "axios";

import IPFilter from "../filter/IPFilter.js";
import PostList from "./content/PostList.js";
import UploadButton from "../filter/UploadButton";
import Pagination from "./content/Pagination.js";

import { PartIPLoListDiv, FNBDiv } from "../../css/ParticipateCSS.js";


function IPList(props) {
  const [SubCategory, setSubCategory] = useState("전체");
  const [Skip, setSkip] = useState(0);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([]);

  const SubCategoryList = [
    "전체",
    "스태프",
    "배우",
    "1인 편집자",
    "기타"
  ];

  useEffect(() => {
    let body = {
      type: "IP",
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
      <IPFilter category="프로 알리기" SubCategory={SubCategory} setSubCategory={setSubCategory} SubCategoryList={SubCategoryList} />
      <div className="right">
        <PostList type="IP" SubCategory={SubCategory} Skip={Skip} Sort/>
      </div>
    </PartIPLoListDiv>
    <FNBDiv>   
      <UploadButton category="프로알리기" />
      <Pagination PageIdxArr={PageIdxArr} Skip={Skip} setSkip={setSkip} PageLen={PageLen} />
    </FNBDiv>
    </>
  );
}

export default IPList;
