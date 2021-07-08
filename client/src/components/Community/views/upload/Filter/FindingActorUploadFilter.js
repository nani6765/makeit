import React, { useState, useEffect } from "react";
import { ActorFilterDiv, ActorInputDiv } from "./UploadFilterContent.js";

function FindingActorUploadFilter(props) {
  const [GenderFilter, setGenderFilter] = useState([]);
  const [TypeFilter, setTypeFilter] = useState([]);
  const [ClassficationFilter, setClassficationFilter] = useState([]);

  useEffect(() => {
    if (GenderFilter.length > 0 && TypeFilter > 0 && ClassficationFilter > 0) {
      props.setFilterCheck(true);
    }
  }, [GenderFilter, TypeFilter, ClassficationFilter]);

  return (
    <ActorFilterDiv>
      <p className="gender">
        <span>성</span>
        <span>별</span>
      </p>
      <ActorInputDiv className="genderFilter">
        <input type="checkbox" name="" id="genderMale" />
        <label htmlFor="genderMale" onClick={() => console.log("남자")}>
          남자
        </label>
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
        <input type="checkbox" name="" id="classShort" />
        <label
          htmlFor="classShort"
          data-name="단편"
          onClick={(e) => console.log(e.currentTarget.dataset.name)}
        >
          단편
        </label>
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
  );
}

export default FindingActorUploadFilter;
