import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { PartFilter } from "../../css/ParticipateCSS.js";

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

    if (props.URL.filmType !== undefined) {
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
              id="plan"
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="plan">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="edit"
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="edit">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="filming"
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="filming">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="light"
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="light">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="acoustic"
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="acoustic">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="voiceActor"
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="voiceActor">??????</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="beauty"
              value="??????"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label htmlFor="beauty">??????</label>
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

export default FPUploadFilter;
