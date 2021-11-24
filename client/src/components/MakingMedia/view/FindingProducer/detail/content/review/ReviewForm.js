import React, { useState, useEffect } from "react";
import { ReviewUploadDiv } from "../../../../../css/FPDCSS.js";
import { withRouter, useHistory } from "react-router";
import axios from "axios";

function ReviewForm(props) {
  const [Review, setReview] = useState("");
  const [Star, setStar] = useState(new Array(5).fill(null));
  const [StarValue, setStarValue] = useState(0);
  let history = useHistory();

  const setReviewFunc = (e) => {
    if (e.currentTarget.value.length > 300) {
      return alert("리뷰는 300자까지 작성할 수 있습니다.");
    } else {
      setReview(e.currentTarget.value);
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (Review === "") {
      return alert("리뷰 내용을 채워주세요!");
    }
    let body = {
      uid: props.user.uid,
      url: props.PostURL,
      grade: StarValue,
      content: Review,
    };

    axios.post("/api/making/producer/review/upload", body).then((response) => {
      if (response.data.success) {
        alert("리뷰가 등록되었습니다.");
        return window.location.reload();
      } else {
        return alert("response.data.message");
      }
    });
  };

  return (
    <ReviewUploadDiv>
      <form action="" onSubmit={(e) => SubmitHandler(e)}>
        <textarea
          style={{ width: "100%" }}
          rows="3"
          value={Review}
          onChange={(e) => setReviewFunc(e)}
        ></textarea>
        <div className="maxLength">{Review.length}/300</div>
        <div className="submit">
          <div>
            <p>별점</p>
            {Star.map((temp, idx) => {
              let fillCheck =
                StarValue >= idx ? "bi bi-star-fill" : "bi bi-star";
              return (
                <i
                  key={idx}
                  className={fillCheck}
                  onClick={() => setStarValue(idx)}
                ></i>
              );
            })}
          </div>
          <button type="submit">등록</button>
        </div>
      </form>
    </ReviewUploadDiv>
  );
}

export default withRouter(ReviewForm);
