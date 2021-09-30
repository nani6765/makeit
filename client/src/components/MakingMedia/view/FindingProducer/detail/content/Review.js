import React from "react";
import ReviewForm from "./ReviewForm.js";

import { DetaulContentSubTitle } from "../../../../css/FindingProducerDetailCSS.js";

function Review(props) {
  return (
    <div id="review">
      <DetaulContentSubTitle>서비스 평가</DetaulContentSubTitle>
      <ReviewForm PostURL={props.Url} />
    </div>
  );
}

export default Review;
