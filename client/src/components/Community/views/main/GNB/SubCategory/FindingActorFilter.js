import React, { useState, useEffect } from "react";
import {
  SubCategoryDiv,
  ActorFilterDiv,
  ActorInputDiv,
} from "./SubCategoryContent.js";

function FindingActorFilter(props) {
  const [GenderFilters, setGenderFilters] = useState([]);
  const [TypeFilters, setTypeFilters] = useState([]);
  const [ClassficationFilters, setClassficationFilters] = useState([]);
  const [GenderAllChecked, setGenderAllChecked] = useState(true);
  const [TypeAllChecked, setTypeAllChecked] = useState(true);
  const [ClassficationAllChecked, setClassficationAllChecked] = useState(true);

  function GenderManager(filter) {
    let temp = [...GenderFilters];
    let tempElement = { "filters.gender": `${filter}` };
    let idx = temp.findIndex((element) => element["filters.gender"] === filter);
    if (idx === -1) {
      temp.push(tempElement);
    } else {
      temp.splice(idx, 1);
    }
    setGenderFilters([...temp]);
  }

  function TypeManager(filter) {
    let temp = [...TypeFilters];
    let tempElement = { "filters.type": `${filter}` };
    let idx = temp.findIndex((element) => element["filters.type"] === filter);
    if (idx === -1) {
      temp.push(tempElement);
    } else {
      temp.splice(idx, 1);
    }
    setTypeFilters([...temp]);
  }

  function ClassficationManager(filter) {
    let temp = [...ClassficationFilters];
    let tempElement = { "filters.classfication": `${filter}` };
    let idx = temp.findIndex(
      (element) => element["filters.classfication"] === filter
    );
    if (idx === -1) {
      temp.push(tempElement);
    } else {
      temp.splice(idx, 1);
    }
    setClassficationFilters([...temp]);
  }

  useEffect(() => {
    if (GenderAllChecked) {
      let temp = [];
      setGenderFilters([...temp]);
    }
    if (TypeAllChecked) {
      let temp = [];
      setTypeFilters([...temp]);
    }
    if (ClassficationAllChecked) {
      let temp = [];
      setClassficationFilters([...temp]);
    }
  }, [GenderAllChecked, TypeAllChecked, ClassficationAllChecked]);

  useEffect(() => {
    let temp = [...GenderFilters, ...TypeFilters, ...ClassficationFilters];
    props.setFiltersObject([...temp]);
  }, [GenderFilters, TypeFilters, ClassficationFilters]);

  return (
    <>
      <SubCategoryDiv>
        <ActorFilterDiv>
          <p className="gender">
            <span>성</span>
            <span>별</span>
          </p>
          <ActorInputDiv className="genderFilter">
            <input
              type="checkbox"
              id="genderAll"
              onChange={() => setGenderAllChecked(!GenderAllChecked)}
              defaultChecked={GenderAllChecked}
            />
            <label htmlFor="genderAll">전체</label>
            {GenderAllChecked ? (
              <input type="checkbox" id="genderMale" checked={false} disabled />
            ) : (
              <input type="checkbox" id="genderMale" />
            )}
            <label
              htmlFor="genderMale"
              data-name="남자"
              onClick={(e) => GenderManager(e.currentTarget.dataset.name)}
            >
              남자
            </label>
            {GenderAllChecked ? (
              <input
                type="checkbox"
                id="genderFemale"
                checked={false}
                disabled
              />
            ) : (
              <input type="checkbox" id="genderFemale" />
            )}
            <label
              htmlFor="genderFemale"
              data-name="여자"
              onClick={(e) => GenderManager(e.currentTarget.dataset.name)}
            >
              여자
            </label>
            {GenderAllChecked ? (
              <input type="checkbox" id="genderNone" checked={false} disabled />
            ) : (
              <input type="checkbox" id="genderNone" />
            )}
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
            <input
              type="checkbox"
              id="typeAll"
              onChange={() => setTypeAllChecked(!TypeAllChecked)}
              defaultChecked={TypeAllChecked}
            />
            <label htmlFor="typeAll">전체</label>
            {TypeAllChecked ? (
              <input type="checkbox" id="typeVideo" checked={false} disabled />
            ) : (
              <input type="checkbox" id="typeVideo" />
            )}
            <label
              htmlFor="typeVideo"
              data-name="영상"
              onClick={(e) => TypeManager(e.currentTarget.dataset.name)}
            >
              영상
            </label>
            {TypeAllChecked ? (
              <input type="checkbox" id="typeImage" checked={false} disabled />
            ) : (
              <input type="checkbox" id="typeImage" />
            )}
            <label
              htmlFor="typeImage"
              data-name="사진"
              onClick={(e) => TypeManager(e.currentTarget.dataset.name)}
            >
              사진
            </label>
            {TypeAllChecked ? (
              <input type="checkbox" id="typeOthers" checked={false} disabled />
            ) : (
              <input type="checkbox" id="typeOthers" />
            )}
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
            <input
              type="checkbox"
              id="classAll"
              defaultChecked={ClassficationAllChecked}
              onChange={() =>
                setClassficationAllChecked(!ClassficationAllChecked)
              }
            />
            <label htmlFor="classAll">전체</label>
            {ClassficationAllChecked ? (
              <input type="checkbox" id="classShort" checked={false} disabled />
            ) : (
              <input type="checkbox" id="classShort" />
            )}
            <label
              htmlFor="classShort"
              data-name="단편"
              onClick={(e) => console.log(e.currentTarget.dataset.name)}
            >
              단편
            </label>
            {ClassficationAllChecked ? (
              <input type="checkbox" id="classLong" checked={false} disabled />
            ) : (
              <input type="checkbox" id="classLong" />
            )}
            <label
              htmlFor="classLong"
              data-name="장편"
              onClick={(e) =>
                ClassficationManager(e.currentTarget.dataset.name)
              }
            >
              장편
            </label>
            {ClassficationAllChecked ? (
              <input type="checkbox" id="classAd" checked={false} disabled />
            ) : (
              <input type="checkbox" id="classAd" />
            )}
            <label
              htmlFor="classAd"
              data-name="광고"
              onClick={(e) =>
                ClassficationManager(e.currentTarget.dataset.name)
              }
            >
              광고
            </label>
            {ClassficationAllChecked ? (
              <input type="checkbox" id="classTV" checked={false} disabled />
            ) : (
              <input type="checkbox" id="classTV" />
            )}
            <label
              htmlFor="classTV"
              data-name="TV"
              onClick={(e) =>
                ClassficationManager(e.currentTarget.dataset.name)
              }
            >
              TV
            </label>
            {ClassficationAllChecked ? (
              <input
                type="checkbox"
                id="classPictorial"
                checked={false}
                disabled
              />
            ) : (
              <input type="checkbox" id="classPictorial" />
            )}
            <label
              htmlFor="classPictorial"
              data-name="화보"
              onClick={(e) =>
                ClassficationManager(e.currentTarget.dataset.name)
              }
            >
              화보
            </label>
            {ClassficationAllChecked ? (
              <input
                type="checkbox"
                id="classOthers"
                checked={false}
                disabled
              />
            ) : (
              <input type="checkbox" id="classOthers" />
            )}
            <label
              htmlFor="classOthers"
              data-name="기타"
              onClick={(e) =>
                ClassficationManager(e.currentTarget.dataset.name)
              }
            >
              기타
            </label>
          </ActorInputDiv>
        </ActorFilterDiv>
      </SubCategoryDiv>
    </>
  );
}

export default FindingActorFilter;
