import React from "react";
import { DetaulContentSubTitle, PriceRuleDiv } from "../../../../css/FPDCSS.js";

function PriceRule(props) {
  return (
    <PriceRuleDiv id="price">
      <DetaulContentSubTitle>가격 정책</DetaulContentSubTitle>
      <div>{props.PriceInfo}</div>
    </PriceRuleDiv>
  );
}

export default PriceRule;
