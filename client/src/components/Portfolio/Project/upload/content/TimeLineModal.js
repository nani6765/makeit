import React, { useState } from "react";
import { ModalDiv } from "../../../CSS/Project/ProjectUploadCSS.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
registerLocale("ko", ko);

function TimeLineModal(props) {
  const [StartDay, setStartDay] = useState(new Date());
  const [EndDay, setEndDay] = useState(new Date());
  const [Content, setContent] = useState("");

  const dateToString = (date) => {
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0")
    );
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!Content) {
      return alert("내용을 채워주세요!");
    }

    let temp = {
      startDate: dateToString(StartDay),
      endDate: dateToString(EndDay),
      content: Content,
    };

    let tempArr = [...props.TimeLineArr];
    tempArr.push(temp);

    props.setTimeLineArr([...tempArr]);
    props.setModalFlag(false);
  };

  return (
    <ModalDiv>
      <div className="modalContent">
        <label className="startLabel">시작예정일</label>
        <div className="startPicker">
          <DatePicker
            selected={StartDay}
            minDate={Date.now()}
            locale="ko"
            onChange={(date) => setStartDay(date)}
          />
        </div>
        <label className="endLabel">마감예정일</label>
        <div className="endPicker">
          <DatePicker
            selected={EndDay}
            locale="ko"
            minDate={StartDay}
            onChange={(date) => setEndDay(date)}
          />
        </div>
        <label className="inputLabel">내용</label>
        <input
          className="input"
          type="text"
          value={Content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
        <div className="btnDiv">
          <button
            onClick={(e) => {
              e.preventDefault();
              props.setModalFlag(false);
            }}
          >
            취소
          </button>
          <button onClick={(e) => SubmitHandler(e)}>저장</button>
        </div>
      </div>
    </ModalDiv>
  );
}

export default TimeLineModal;
