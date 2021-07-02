import React from "react";

function SubCategory(props) {
  return (
    <span
      style={
        props.category === props.SubCategoryContent
          ? { fontWeight: "bold" }
          : null
      }
      onClick={() => props.setSubCategoryContent(props.category)}
    >
      {props.category}
    </span>
  );
}

export default SubCategory;
