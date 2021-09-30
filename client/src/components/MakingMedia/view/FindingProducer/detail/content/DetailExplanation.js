import React from "react";
import {
  DetailExplanationDiv,
  DetaulContentSubTitle,
} from "../../../../css/FindingProducerDetailCSS.js";
function DetailExplanation(props) {
  return (
    <DetailExplanationDiv id="detail">
      <DetaulContentSubTitle>상세 설명</DetaulContentSubTitle>

      {props.WorkTypeArr.length > 0 && (
        <div className="workType">
          <p>작업 유형</p>
          {props.WorkTypeArr.map((work, idx) => {
            return <span>{work}</span>;
          })}
        </div>
      )}

      {props.VideoPurposeArr.length > 0 && (
        <div className="videoPurpose">
          <p>영상 목적</p>
          {props.VideoPurposeArr.map((purpose, idx) => {
            return <span>{purpose}</span>;
          })}
        </div>
      )}
      <div>
        <p>서비스 설명</p>
        <div>{props.Description}</div>
      </div>
    </DetailExplanationDiv>
  );
}

export default DetailExplanation;