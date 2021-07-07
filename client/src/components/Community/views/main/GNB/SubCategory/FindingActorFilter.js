import React from "react";
import {
  SubCategoryDiv,
  ActorFilterDiv,
  ActorInputDiv,
} from "./SubCategoryContent.js";

function FindingActorFilter() {
  return (
    <SubCategoryDiv>
      <ActorFilterDiv>
        <p className="gender">
          <span>성</span>
          <span>별</span>
        </p>
        <ActorInputDiv className="genderFilter">
          <input type="checkbox" name="" id="genderAll" />
          <label htmlFor="genderAll">전체</label>
          <input type="checkbox" name="" id="genderMale" />
          <label htmlFor="genderMale">남자</label>
          <input type="checkbox" name="" id="genderFemale" />
          <label htmlFor="genderFemale">여자</label>
          <input type="checkbox" name="" id="genderNone" />
          <label htmlFor="genderNone">무관</label>
        </ActorInputDiv>
        <p className="type">
          <span>촬영</span>
          <span>형태</span>
        </p>
        <ActorInputDiv className="typeFilter">
          <input type="checkbox" name="" id="typeAll" />
          <label htmlFor="typeAll">전체</label>
          <input type="checkbox" name="" id="typeVideo" />
          <label htmlFor="typeVideo">영상</label>
          <input type="checkbox" name="" id="typeImage" />
          <label htmlFor="typeImage">사진</label>
          <input type="checkbox" name="" id="typeOthers" />
          <label htmlFor="typeOthers">기타</label>
        </ActorInputDiv>
        <p className="classfication">
          <span>분</span>
          <span>류</span>
        </p>
        <ActorInputDiv className="classficationFilter">
          <input type="checkbox" name="" id="classAll" />
          <label htmlFor="classAll">전체</label>
          <input type="checkbox" name="" id="classShort" />
          <label htmlFor="classShort">단편</label>
          <input type="checkbox" name="" id="classLong" />
          <label htmlFor="classLong">장편</label>
          <input type="checkbox" name="" id="classAd" />
          <label htmlFor="classAd">광고</label>
          <input type="checkbox" name="" id="classTV" />
          <label htmlFor="classTV">TV</label>
          <input type="checkbox" name="" id="classPictorial" />
          <label htmlFor="classPictorial">화보</label>
          <input type="checkbox" name="" id="classOthers" />
          <label htmlFor="classOthers">기타</label>
        </ActorInputDiv>
      </ActorFilterDiv>
    </SubCategoryDiv>
  );
}

export default FindingActorFilter;
