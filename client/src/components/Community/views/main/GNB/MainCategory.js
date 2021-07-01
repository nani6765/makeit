import React from "react";
import { GNBCategoryBtn } from "./GNBContent.js";

function MainCateGory(props) {
  return (
    <>
      <GNBCategoryBtn
        style={
          props.category === props.MainCategoryContent
            ? { backgroundColor: "#FAF5F5" }
            : null
        }
        onClick={() => {
          props.setMainCategoryContent(props.category);
        }}
      >
        {props.category}
      </GNBCategoryBtn>
    </>
  );
}

export default MainCateGory;
