import React from "react";
import StickyBar from "./StickyBar.js";

function IPFilter(props) {
  return (
    <div className="left">
      <StickyBar
        category="프로알리기"
        SubCategoryList={props.SubCategoryList}
        URL={props.URL}
      />
    </div>
  );
}

export default IPFilter;
