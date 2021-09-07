import React, { useState } from "react";

import ContentHeadingArea from "../utils/ContentHeadingArea.js";
import FooterBtnArea from "../utils/FooterBtnArea.js";

import { PriceDiv } from "../css/FPContentCSS.js";

function Price(props) {
  return (
    <PriceDiv>
      <ContentHeadingArea HeadingTitle="가격 설정" />
      <FooterBtnArea
        setCurrentProcess={props.setCurrentProcess}
        NextStep="수정/환불안내"
      />
    </PriceDiv>
  );
}

export default Price;
