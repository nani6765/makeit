import React from "react";

import ContentHeadingArea from "../utils/ContentHeadingArea.js";
import { PriceDiv } from "../css/FPContentCSS.js";
function Price(props) {
  return (
    <PriceDiv>
      <ContentHeadingArea HeadingTitle="가격 설정" />
      <div className="inputDiv">
        <div>
          <input className="form-check-input" type="radio" />
          <p>직접 등록</p>
        </div>
        <div>
          <input className="form-check-input" type="radio" />
          <p>가격 문의</p>
        </div>
      </div>
    </PriceDiv>
  );
}

export default Price;
