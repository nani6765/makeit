import React, { useEffect } from "react";
import { useHistory } from "react-router";
import qs from "qs";

function FPUploadFilter(props) {
  let history = useHistory();

  const FilmTypeFilterManager = (e) => {
    let temp = props.URL;

    if (temp.filmType) {
      if (temp.filmType.includes(e.target.id)) {
        var idx = temp.filmType.indexOf(e.target.id);
        if (idx !== -1) {
          temp.filmType.splice(idx, 1);
        }
      } else {
        temp.filmType.push(e.target.id);
      }
    } else {
      temp.filmType = [];
      temp.filmType.push(e.target.id);
    }
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
  };

  const ClassificationFilterManager = (e) => {
    let temp = props.URL;
    if (temp.class) {
      if (temp.class.includes(e.target.id)) {
        var idx = temp.class.indexOf(e.target.id);
        if (idx !== -1) {
          temp.class.splice(idx, 1);
        }
      } else {
        temp.class.push(e.target.id);
      }
    } else {
      temp.class = [];
      temp.class.push(e.target.id);
    }
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
  };

  useEffect(() => {
    let typeArr = ["video", "photo", "filmTypeEtc"];

    if (props.URL.filmType != undefined) {
      typeArr.map((type, idx) => {
        let target = document.querySelector(`#${type}`);
        target.checked = props.URL.filmType.includes(type);
      });
    } else {
      typeArr.map((type, idx) => {
        let target = document.querySelector(`#${type}`);
        target.checked = false;
      });
    }

    let classArr = [
      "plan",
      "edit",
      "filming",
      "light",
      "acoustic",
      "voiceActor",
      "beauty",
      "classEtc",
    ];

    if (props.URL.class != undefined) {
      classArr.map((type, idx) => {
        let target = document.querySelector(`#${type}`);
        target.checked = props.URL.class.includes(type);
      });
    } else {
      classArr.map((type, idx) => {
        let target = document.querySelector(`#${type}`);
        target.checked = false;
      });
    }
  }, [props.URL]);

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
