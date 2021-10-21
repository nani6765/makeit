import React from "react";
import Select from "react-select";

function LoUploadFilter(props) {
  const options = [
    { value: "세트장", label: "세트장" },
    { value: "스튜디오", label: "스튜디오" },
    { value: "식당&카페", label: "식당&카페" },
    { value: "주거공간", label: "주거공간" },
    { value: "사무실", label: "사무실" },
    { value: "기타", label: "기타" },
  ];

  return (
    <div>
      <Select
        options={options}
        placeholder="카테고리"
        blurInputOnSelect="true"
        menuShouldBlockScroll="true"
        onChange={(e) => props.setCategory(e.value)}
      />
    </div>
  );
}

export default LoUploadFilter;
