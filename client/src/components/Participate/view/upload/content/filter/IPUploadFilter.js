import React from "react";
import Select from "react-select";

function IPUploadFilter(props) {
  const options = [
    { value: "배우", label: "배우" },
    { value: "세트장", label: "세트장" },
    { value: "편집", label: "편집" },
    { value: "촬영", label: "촬영" },
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

export default IPUploadFilter;
