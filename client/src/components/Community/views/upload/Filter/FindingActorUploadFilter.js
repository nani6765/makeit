import React, { useState, useEffect } from "react";
import { ActorFilterDiv, ActorInputDiv } from "./UploadFilterContent.js";

function FindingActorUploadFilter(props) {
  const [GenderFilter, setGenderFilter] = useState([]);
  const [TypeFilter, setTypeFilter] = useState([]);
  const [ClassficationFilter, setClassficationFilter] = useState([]);

  useEffect(() => {
    if (
      GenderFilter.length > 0 &&
      TypeFilter.length > 0 &&
      ClassficationFilter.length > 0
    ) {
      props.setFilterCheck(true);
    } else {
      props.setFilterCheck(false);
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
        <label
          htmlFor="genderMale"
          data-name="남자"
          onClick={(e) => GenderManager(e.currentTarget.dataset.name)}
        >
          남자
        </label>
        <input type="checkbox" name="" id="genderFemale" />
        <label
          htmlFor="genderFemale"
          data-name="여자"
          onClick={(e) => GenderManager(e.currentTarget.dataset.name)}
        >
          여자
        </label>
        <input type="checkbox" name="" id="genderNone" />
        <label
          htmlFor="genderNone"
          data-name="무관"
          onClick={(e) => GenderManager(e.currentTarget.dataset.name)}
        >
          무관
        </label>
      </ActorInputDiv>

      <p className="type">
        <span>촬영</span>
        <span>형태</span>
      </p>
      <ActorInputDiv className="typeFilter">
        <input type="checkbox" name="" id="typeVideo" />
        <label
          htmlFor="typeVideo"
          data-name="영상"
          onClick={(e) => TypeManager(e.currentTarget.dataset.name)}
        >
          영상
        </label>
        <input type="checkbox" name="" id="typeImage" />
        <label
          htmlFor="typeImage"
          data-name="사진"
          onClick={(e) => TypeManager(e.currentTarget.dataset.name)}
        >
          사진
        </label>
        <input type="checkbox" name="" id="typeOthers" />
        <label
          htmlFor="typeOthers"
          data-name="기타"
          onClick={(e) => TypeManager(e.currentTarget.dataset.name)}
        >
          기타
        </label>
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
        <label
          htmlFor="classLong"
          data-name="장편"
          onClick={(e) => ClassficationManager(e.currentTarget.dataset.name)}
        >
          장편
        </label>
        <input type="checkbox" name="" id="classAd" />
        <label
          htmlFor="classAd"
          data-name="광고"
          onClick={(e) => ClassficationManager(e.currentTarget.dataset.name)}
        >
          광고
        </label>
        <input type="checkbox" name="" id="classTV" />
        <label
          htmlFor="classTV"
          data-name="TV"
          onClick={(e) => ClassficationManager(e.currentTarget.dataset.name)}
        >
          TV
        </label>
        <input type="checkbox" name="" id="classPictorial" />
        <label
          htmlFor="classPictorial"
          data-name="화보"
          onClick={(e) => ClassficationManager(e.currentTarget.dataset.name)}
        >
          화보
        </label>
        <input type="checkbox" name="" id="classOthers" />
        <label
          htmlFor="classOthers"
          data-name="기타"
          onClick={(e) => ClassficationManager(e.currentTarget.dataset.name)}
        >
          기타
        </label>
      </ActorInputDiv>
    </ActorFilterDiv>
  );
}

export default FindingActorUploadFilter;
