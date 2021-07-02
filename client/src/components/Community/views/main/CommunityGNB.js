import React, { useState, useEffect } from "react";
import MainCategory from "./GNB/MainCategory.js";
import PostLabel from "./GNB/PostLabel.js";
import SubCategory from "./GNB/SubCategory.js";
import {
  MainCategoryDiv,
  MainCategoryBtnDiv,
  SubCategoryDiv,
} from "./GNB/GNBContent.js";

function CommunityGNB(props) {
  //const [MainCategoryContent, setMainCategoryContent] = useState("게시판");
  //const [SortPost, setSortPost] = useState("최신순");
  //const [MainCategoryArrayIdx, setMainCategoryArrayIdx] = useState(0);
  //const [SubCategoryContent, setSubCategoryContent] = useState("전체");

  const MainCategoryList = [
    "게시판",
    "파트너찾기",
    "배우찾기",
    "로케이션",
    "건의함",
  ];

  const SubCategoryList = {
    0: ["전체", "자유게시판", "홍보게시판", "질문게시판"], //게시판
    1: ["전체", "기획", "편집", "촬영", "조명", "음향", "성우", "미용", "기타"], //파트너찾기
    2: [], //프로찾기
    3: ["전체", "세트장", "스튜디오", "식당", "기타", "질문게시판"], //로케이션
    4: [], //건의함
  };

  useEffect(() => {
    props.setMainCategoryArrayIdx(
      MainCategoryList.indexOf(props.MainCategoryContent)
    );
    props.setSubCategoryContent("전체");
  }, [props.MainCategoryContent]);

  return (
    <>
      <MainCategoryDiv>
        <MainCategoryBtnDiv>
          {MainCategoryList.map((category, idx) => (
            <MainCategory
              key={idx}
              category={category}
              MainCategoryContent={props.MainCategoryContent}
              setMainCategoryContent={props.setMainCategoryContent}
            />
          ))}
        </MainCategoryBtnDiv>
      </MainCategoryDiv>
      <PostLabel
        MainCategoryContent={props.MainCategoryContent}
        SortPost={props.SortPost}
        setSortPost={props.setSortPost}
      />

      <SubCategoryDiv>
        <ul>
          {SubCategoryList[props.MainCategoryArrayIdx].map((category, idx) => (
            <li key={idx}>
              <SubCategory
                category={category}
                SubCategoryContent={props.SubCategoryContent}
                setSubCategoryContent={props.setSubCategoryContent}
              />
            </li>
          ))}
        </ul>
      </SubCategoryDiv>
    </>
  );
}

export default CommunityGNB;
