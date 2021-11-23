import React from "react";
import {
  DetailExplanationDiv,
  DetaulContentSubTitle,
} from "../../../../css/FPDCSS.js";
function DetailExplanation(props) {
  return (
    <DetailExplanationDiv id="detail">
      <DetaulContentSubTitle>상세 설명</DetaulContentSubTitle>

      {props.WorkTypeArr.length > 0 && (
        <div className="workType">
          <p>작업 유형</p>
          {props.WorkTypeArr.map((work, idx) => {
            return <span key={idx}>{work}</span>;
          })}
        </div>
      )}

      {props.VideoPurposeArr.length > 0 && (
        <div className="videoPurpose">
          <p>영상 목적</p>
          {props.VideoPurposeArr.map((purpose, idx) => {
            return <span key={idx}>{purpose}</span>;
          })}
        </div>
      )}
      <div>
        <p>서비스 설명</p>
        <div>{props.Content}</div>
      </div>
    </DetailExplanationDiv>
  );
}

export default DetailExplanation;
