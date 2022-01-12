import React, { useState } from "react";

import TimeLineModal from "./TimeLineModal";
import { TimeLineSection } from "../../../CSS/Project/ProjectUploadCSS";

function TimeLine(props) {
  const [ModalFlag, setModalFlag] = useState(false);

  const AddTimeLine = (e) => {
    e.preventDefault();
    setModalFlag(true);
  };

  const subStr = (text) => {
    let temp = text;
    if (temp.length > 15) {
      let result = temp.substring(0, 14) + "...";
      return result;
    } else {
      return temp;
    }
  };

  const DeleteHandler = (idx) => {
    let temp = [...props.TimeLineArr];
    let deleted = temp.splice(idx, 1);
    props.setTimeLineArr([...temp]);
  };
  return (
    <>
      <TimeLineSection>
        <label>타임라인</label>
        {props.TimeLineArr.map((timeLine, idx) => {
          return (
            <div className="list" key={idx} onClick={() => DeleteHandler(idx)}>
              <p>
                {subStr(timeLine.content)} ({timeLine.startDate} ~
                {timeLine.endDate})
              </p>
            </div>
          );
        })}
        <div>
          <button className="add" onClick={(e) => AddTimeLine(e)}>
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </TimeLineSection>
      {ModalFlag && (
        <TimeLineModal
          setModalFlag={setModalFlag}
          TimeLineArr={props.TimeLineArr}
          setTimeLineArr={props.setTimeLineArr}
        />
      )}
    </>
  );
}

export default TimeLine;
