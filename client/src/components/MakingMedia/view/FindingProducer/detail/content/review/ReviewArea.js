import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm.js";
import Review from "./Review.js";
import axios from "axios";

import { DetaulContentSubTitle } from "../../../../../css/FPDCSS.js";

function ReviewArea(props) {
  const [ReviewList, setReviewList] = useState([]);

  useEffect(() => {
    let body = { url: props.PostURL };
    axios.post("/api/making/producer/review", body).then((response) => {
      console.log(response);
      setReviewList([...response.data.review]);
    });
  }, []);

  return (
    <div id="review" style={{ marginTop: "1rem" }}>
      <DetaulContentSubTitle>서비스 평가</DetaulContentSubTitle>
      <ReviewForm PostURL={props.PostURL} />
      {ReviewList[0] &&
        ReviewList.map((review, idx) => {
          console.log(idx, " : ", review);
          return <Review key={idx} Review={review} PostURL={props.PostURL} />;
        })}
    </div>
  );
}

export default ReviewArea;
