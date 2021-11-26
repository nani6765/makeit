import React, {useEffect} from "react";
import Select from "react-select";

function IPUploadFilter(props) {
  const options = [
    { value: "스태프", label: "스태프" },
    { value: "배우", label: "배우" },
    { value: "1인편집자", label: "1인편집자" },
    { value: "기타", label: "기타" },
  ];

  return (
    <div>
      <Select
        options={options}
        placeholder="카테고리"
        blurInputOnSelect="true"
        menuShouldBlockScroll="true"
        defaultValue={props.Category && options[options.findIndex((obj, idx) => {if(obj.value === props.Category) return idx;})]}
        onChange={(e) => props.setCategory(e.value)}
      />
    </div>
  );
}

export default IPUploadFilter;
