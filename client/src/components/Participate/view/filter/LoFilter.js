import React from "react";

import StickyBar from "./StickyBar.js";

function LoFilter(props) {
  return (
    <div className="left">
      <StickyBar category={props.category} SubCategory={props.SubCategory} setSubCategory={props.setSubCategory} SubCategoryList={props.SubCategoryList} />
    </div>
  );
}

export default LoFilter;
