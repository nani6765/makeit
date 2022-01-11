import React from "react";
import { useHistory } from "react-router";

function FPUploadFilter(props) {
  let history = useHistory();

  const FilmTypeFilterManager = (e) => {
    if (e.target.checked) {
      let temp = [...props.FilmType];
      temp.push(e.target.id);
      props.setFilmType(temp);
    } else {
      let temp = props.FilmType.filter((film) => {
        return e.target.id !== film;
      });
      props.setFilmType(temp);
    }
  };

  const ClassificationFilterManager = (e) => {
    if (e.target.checked) {
      let temp = [...props.Classification];
      temp.push(e.target.id);
      props.setClassification(temp);
    } else {
      let temp = props.Classification.filter((classification) => {
        return e.target.id !== classification;
      });
      props.setClassification(temp);
    }
  };

  return (
    <>
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
              id="plan"
              defaultChecked={props.Classification.includes("plan")}
              value="기획"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="plan">기획</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="edit"
              defaultChecked={props.Classification.includes("edit")}
              value="편집"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="edit">편집</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="filming"
              defaultChecked={props.Classification.includes("filming")}
              value="촬영"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="filming">촬영</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="light"
              defaultChecked={props.Classification.includes("light")}
              value="조명"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="light">조명</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="acoustic"
              defaultChecked={props.Classification.includes("acoustic")}
              value="음향"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="acoustic">음향</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="voiceActor"
              defaultChecked={props.Classification.includes("voiceActor")}
              value="성우"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="voiceActor">성우</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="beauty"
              defaultChecked={props.Classification.includes("beauty")}
              value="미용"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="beauty">미용</label>
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

export default FPUploadFilter;
