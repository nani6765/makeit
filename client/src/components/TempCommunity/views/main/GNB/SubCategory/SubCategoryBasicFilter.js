import React from "react";

function SubCategoryBasicFilter(props) {
  return (
    <span
      style={
        props.category === props.SubCategoryName ? { fontWeight: "bold" } : null
      }
      onClick={() => props.setSubCategoryName(props.category)}
    >
      {props.category}
    </span>
  );
}

export default SubCategoryBasicFilter;
