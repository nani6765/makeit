import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { RUFilterDiv } from "../../../../css/RVUCSS.js";

function RequestFilter(props) {
  const options = [
    { value: "일반 영상", label: "일반 영상" },
    { value: "유튜브 제작", label: "유튜브 제작" },
    { value: "특수영상", label: "특수영상" },
    { value: "광고/홍보 영상", label: "광고/홍보 영상" },
    { value: "온라인 생중계", label: "온라인 생중계" },
    { value: "애니메이션", label: "애니메이션" },
    { value: "촬영", label: "촬영" },
    { value: "편집/자막", label: "편집/자막" },
    { value: "기타", label: "기타" },
  ];
  const radioOptions = ["직접 촬영", "업체 촬영", "협의"];

  return (
    <RUFilterDiv>
      <label className="categorylabel">카테고리</label>
      <div className="category">
        <Select
          className="categoryList"
          options={options}
          defaultValue={options[0]}
          placeholder="카테고리"
          blurInputOnSelect="true"
          menuShouldBlockScroll="true"
          onChange={(e) => props.setCategory(e.value)}
        />
      </div>
      <label className="pricelabel">측정 예산</label>
      <div className="price">
        <input
          type="number"
          min="0"
          name="minPrice"
          onChange={(e) => props.setMinPrice(e.currentTarget.value)}
        />
        <p>원 ~ </p>
        <input
          type="number"
          min={props.MinPrice}
          name="maxPrice"
          onChange={(e) => props.setMaxPrice(e.currentTarget.value)}
        />
        <p>원</p>
      </div>
      <label className="deadlinelabel">마감 기한</label>
      <div className="deadline">
        <DatePicker
          className="date"
          selected={props.Deadline}
          onChange={(date) => props.setDeadline(date)}
          minDate={new Date()}
        />
      </div>
      <label className="filmTypelabel">촬영 여부</label>
      <div className="filmType">
        <div className="setFilmType">
          {radioOptions.map((option, idx) => {
            return (
              <label key={idx}>
                <input
                  type="radio"
                  name="flimType"
                  value={option}
                  checked={props.FilmType === option ? true : false}
                  onChange={() => {
                    props.setFilmType(option);
                  }}
                />
                {option}
              </label>
            );
          })}
        </div>
      </div>
      <label className="Uniquenesslabel">특이사항</label>
      <div className="Uniqueness">
        <input
          type="text"
          value={props.Uniqueness}
          onChange={(e) => props.setUniqueness(e.currentTarget.value)}
        />
        <p>
          ** 진행 장소 및 촬영에 요구되는 특이사항(영상목적 등)이 있다면
          적어주세요.
        </p>
      </div>
    </RUFilterDiv>
  );
}

export default RequestFilter;
