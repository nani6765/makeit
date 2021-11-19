import React from "react";
import { useHistory } from "react-router";
import qs from "qs";

function FAUploadFilter(props) {
  let history = useHistory();

  const GenderFilterManager = (e) => {
    if (e.target.checked) {
      let temp = [...props.Gender];
      temp.push(e.target.id);
      props.setGender(temp);
    } else {
      let temp = props.Gender.filter((gender) => { return e.target.id !== gender});
      props.setGender(temp);
    }
  };

  const FilmTypeFilterManager = (e) => {
    if (e.target.checked) {
      let temp = [...props.FilmType];
      temp.push(e.target.id);
      props.setFilmType(temp);
    } else {
      let temp = props.FilmType.filter((film) => { return e.target.id !== film});
      props.setFilmType(temp);
    }
  };

  const ClassificationFilterManager = (e) => {
    if (e.target.checked) {
      let temp = [...props.Classification];
      temp.push(e.target.id);
      props.setClassification(temp);
    } else {
      let temp = props.Classification.filter((classification) => { return e.target.id !== classification});
      props.setClassification(temp);
    }
  };

  return (
    <>
      <div className="select">
        <div className="labelArea">
          <span>성</span>
          <span>별</span>
        </div>

        <div className="contentArea">
          <div>
            <input
              type="checkbox"
              id="male"
              defaultChecked={props.Gender.includes("male")}
              value="남자"
              onClick={(e) => {
                GenderFilterManager(e);
              }}
            />
            <label htmlFor="male">남자</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="female"
              defaultChecked={props.Gender.includes("female")}
              value="여자"
              defaultChecked={props.GEn}
              onClick={(e) => {
                GenderFilterManager(e);
              }}
            />
            <label htmlFor="female">여자</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="noMatter"
              defaultChecked={props.Gender.includes("noMatter")}
              value="무관"
              onClick={(e) => {
                GenderFilterManager(e);
              }}
            />
            <label htmlFor="noMatter">무관</label>
          </div>
        </div>
      </div>
      <div className="select">
        <div className="labelArea">
          <span>촬</span>
          <span>영</span>
          <span>형</span>
          <span>태</span>
        </div>

        <div className="contentArea">
          <div>
            <input
              type="checkbox"
              id="video"
              defaultChecked={props.FilmType.includes("video")}
              value="영상"
              onClick={(e) => {
                FilmTypeFilterManager(e);
              }}
            />
            <label htmlFor="video">영상</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="photo"
              defaultChecked={props.FilmType.includes("photo")}
              value="사진"
              onClick={(e) => {
                FilmTypeFilterManager(e);
              }}
            />
            <label htmlFor="photo">사진</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="filmTypeEtc"
              defaultChecked={props.FilmType.includes("filmTypeEtc")}
              value="기타"
              onClick={(e) => {
                FilmTypeFilterManager(e);
              }}
            />
            <label htmlFor="filmTypeEtc">기타</label>
          </div>
        </div>
      </div>
      <div className="select">
        <div className="labelArea">
          <span>분</span>
          <span>류</span>
        </div>

        <div className="contentArea">
          <div>
            <input
              type="checkbox"
              id="short"
              defaultChecked={props.Classification.includes("short")}
              value="단편"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="short">단편</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="long"
              defaultChecked={props.Classification.includes("long")}
              value="장편"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="long">장편</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="ad"
              defaultChecked={props.Classification.includes("ad")}
              value="광고"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="ad">광고</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="TV"
              defaultChecked={props.Classification.includes("TV")}
              value="TV"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="TV">TV</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pictorial"
              defaultChecked={props.Classification.includes("pictorial")}
              value="화보"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="pictorial">화보</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="classEtc"
              defaultChecked={props.Classification.includes("classEtc")}
              value="기타"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="classEtc">기타</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAUploadFilter;
