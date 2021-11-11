import React from "react";

import StickyBar from "./StickyBar.js";

function LoFilter(props) {
  return (
    <div className="left">
      <StickyBar
        category="로케이션"
        SubCategoryList={props.SubCategoryList}
        URL={props.URL}
      />
    </div>
  );
}

export default LoFilter;
