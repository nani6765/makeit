import React, { useState, useEffect } from "react";
import MainCategory from "./GNB/MainCategory.js";
import PostLabel from "./GNB/PostLabel.js";
import SubCategory from "./GNB/SubCategory.js";

import {
  MainCategoryDiv,
  MobileCategoryDiv,
  MainCategoryBtnDiv,
  PostLabelDiv,
  LabelDiv,
} from "./GNB/GNBContent.js";

function CommunityGNB(props) {
  const MainCategoryList = [
    "게시판",
    "파트너찾기",
    "배우찾기",
    "로케이션",
    "건의함",
  ];

  useEffect(() => {
    props.setSubCategoryName("전체");
  }, [props.MainCategoryContent]);

  return (
    <>
      <MobileCategoryDiv>
        <PostLabelDiv>
          <LabelDiv>
            <p>카테고리</p>
          </LabelDiv>
        </PostLabelDiv>
      </MobileCategoryDiv>

      <MainCategoryDiv>
        <MainCategoryBtnDiv>
          {MainCategoryList.map((category, idx) => (
            <MainCategory
              key={idx}
              category={category}
              MainCategoryContent={props.MainCategoryContent}
              setMainCategoryContent={props.setMainCategoryContent}
              setSearchTerm={props.setSearchTerm}
              setSearchCheck={props.setSearchCheck}
              SearchCheck={props.SearchCheck}
            />
          ))}
        </MainCategoryBtnDiv>
      </MainCategoryDiv>

      <PostLabel
        MainCategoryContent={props.MainCategoryContent}
        SortPost={props.SortPost}
        setSortPost={props.setSortPost}
      />

      <SubC ategory
        MainCategoryContent={props.MainCategoryContent}
        SubCategoryName={props.SubCategoryName}
        setSubCategoryName={props.setSubCategoryName}
        FiltersObject={props.FiltersObject}
        setFiltersObject={props.setFiltersObject}
      />
    </>
  );
}

export default CommunityGNB;
