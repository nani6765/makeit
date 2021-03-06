import React, { useEffect } from "react";
import { useHistory } from "react-router";
import qs from "qs";
import {PartFilter} from "../../css/ParticipateCSS.js";

function FAUploadFilter(props) {
  let history = useHistory();

  const GenderFilterManager = (e) => {
    let temp = props.URL;
    if (temp.gender) {
      if (temp.gender.includes(e.target.id)) {
        var idx = temp.gender.indexOf(e.target.id);
        if (idx !== -1) {
          temp.gender.splice(idx, 1);
        }
      } else {
        temp.gender.push(e.target.id);
      }
    } else {
      temp.gender = [];
      temp.gender.push(e.target.id);
    }
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
  };

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
    let genderArr = ["male", "female", "noMatter"];
    if (props.URL.gender !== undefined) {
      genderArr.map((type, idx) => {
        let target = document.querySelector(`#${type}`);
        target.checked = props.URL.gender.includes(type);
      });
    } else {
      genderArr.map((type, idx) => {
        let target = document.querySelector(`#${type}`);
        target.checked = false;
      });
    }

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

    let classArr = ["short", "long", "ad", "TV", "pictorial", "classEtc"];

    if (props.URL.class !== undefined) {
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
    <PartFilter>
      <div className="select">
        <div className="labelArea">
          <span>???</span>
          <span>???</span>
        </div>

        <div className="contentArea">
          <div>
            <input
              type="checkbox"
              id="male"
              value="??????"
              onClick={(e) => {
                GenderFilterManager(e);
              }}
            />
            <label htmlFor="male">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="female"
              value="??????"
              onClick={(e) => {
                GenderFilterManager(e);
              }}
            />
            <label htmlFor="female">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="noMatter"
              value="??????"
              onClick={(e) => {
                GenderFilterManager(e);
              }}
            />
            <label htmlFor="noMatter">??????</label>
          </div>
        </div>
      </div>
      <div className="select">
        <div className="labelArea">
          <span>???</span>
          <span>???</span>
          <span>???</span>
          <span>???</span>
        </div>

        <div className="contentArea">
          <div>
            <input
              type="checkbox"
              id="video"
              value="??????"
              onClick={(e) => {
                FilmTypeFilterManager(e);
              }}
            />
            <label htmlFor="video">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="photo"
              value="??????"
              onClick={(e) => {
                FilmTypeFilterManager(e);
              }}
            />
            <label htmlFor="photo">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="filmTypeEtc"
              value="??????"
              onClick={(e) => {
                FilmTypeFilterManager(e);
              }}
            />
            <label htmlFor="filmTypeEtc">??????</label>
          </div>
        </div>
      </div>
      <div className="select">
        <div className="labelArea">
          <span>???</span>
          <span>???</span>
        </div>

        <div className="contentArea">
          <div>
            <input
              type="checkbox"
              id="short"
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="short">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="long"
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="long">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="ad"
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="ad">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="TV"
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
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="pictorial">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="classEtc"
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="classEtc">??????</label>
          </div>
        </div>
      </div>
    </PartFilter>
  );
}

export default FAUploadFilter;
