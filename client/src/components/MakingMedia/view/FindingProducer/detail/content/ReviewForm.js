import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ReviewUploadDiv } from "../../../../css/FindingProducerDetailCSS.js";
import axios from "axios";

function ReviewForm(props) {
  const [Review, setReview] = useState("");
  const [Star, setStar] = useState(new Array(5).fill(null));
  const [StarValue, setStarValue] = useState(0);
  const user = useSelector((state) => state.user);

  const setReviewFunc = (e) => {
    console.log("Test", e.currentTarget.value.length);
    if (e.currentTarget.value.length > 300) {
      return alert("리뷰는 300자까지 작성할 수 있습니다.");
    } else {
      setReview(e.currentTarget.value);
    }
  };

  useEffect(() => {
    console.log("user : ", user);
  }, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      uid: user.userData.uid,
      url: props.PostURL,
      grade: StarValue,
      content: Review,
    };
    axios.post("/api/making/producer/review/upload", body).then((response) => {
      if (response.data.success) {
        alert("리뷰가 등록되었습니다.");
        return window.location.reload();
      } else {
        return alert(response.data.message);
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
                <i className={fillCheck} onClick={() => setStarValue(idx)}></i>
              );
            })}
          </div>
          <button type="submit">등록</button>
        </div>
      </form>
    </ReviewUploadDiv>
  );
}

export default ReviewForm;
