import React from "react";
import { ContentGNBUL } from "../../../../css/FindingProducerDetailCSS.js";
function ContentGNB() {
  return (
    <ContentGNBUL>
      <a href="#detail">
        <li>상세 설명</li>
      </a>
      <a href="#price">
        <li>가격정책</li>
      </a>
      <a href="#edit">
        <li>수정/환불 안내</li>
      </a>
      <a href="#review">
        <li>서비스 평가</li>
      </a>
    </ContentGNBUL>
  );
}

export default ContentGNB;
