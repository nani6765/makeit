import React, { useEffect } from "react";
import { SubCategoryDiv } from "./GNBContent.js";
import SubCategoryBasicFilter from "./SubCategory/SubCategoryBasicFilter.js";
import FindingActorFilter from "./SubCategory/FindingActorFilter.js";

function SubCategory(props) {
  const LocationSubCategory = [
    "전체",
    "세트장",
    "스튜디오",
    "식당",
    "기타",
    "질문게시판",
  ];

  const BoardSubCategoty = ["전체", "자유게시판", "홍보게시판", "질문게시판"];

  const SwitchSubCategory = () => {
    switch (props.MainCategoryContent) {
      case "게시판":
        return (
          <SubCategoryDiv>
            <ul style={{paddingLeft:'0px'}}>
              {BoardSubCategoty.map((category, idx) => (
                <li key={idx}>
                  <SubCategoryBasicFilter
                    category={category}
                    SubCategoryName={props.SubCategoryName}
                    setSubCategoryName={props.setSubCategoryName}
                  />
                </li>
              ))}
            </ul>
          </SubCategoryDiv>
        );
      case "파트너찾기":
        return null;
      case "배우찾기":
        return (
          <FindingActorFilter
            FiltersObject={props.FiltersObject}
            setFiltersObject={props.setFiltersObject}
          />
        );
      case "로케이션":
        return (
          <SubCategoryDiv>
            <ul>
              {LocationSubCategory.map((category, idx) => (
                <li key={idx} style={{ listStyle: "none" }}>
                  <SubCategoryBasicFilter
                    category={category}
                    SubCategoryName={props.SubCategoryName}
                    setSubCategoryName={props.setSubCategoryName}
                  />
                </li>
              ))}
            </ul>
          </SubCategoryDiv>
        );
      case "건의함":
        return null;
    }
  };

  return <>{SwitchSubCategory()}</>;
}

export default SubCategory;
