import React, { useState, useEffect, useRef } from "react";
import Avatar from "react-avatar";
import axios from "axios";
import { useSelector } from "react-redux";

import Modal from "../../../../../../utils/view/Modal/UserModal.js";
import { ReviewDiv } from "../../../../../css/FPDCSS.js";

function Review(props) {
  const user = useSelector((state) => state.user);

  //Review
  const [StarArr, setStarArr] = useState(new Array(5).fill(null));
  const [ReviewUser, setReviewUser] = useState("");
  const [hambucControl, sethambucControl] = useState(false);

  //EditReview
  const [EditFlag, setEditFlag] = useState(false);
  const [EditReview, setEditReview] = useState("");
  const [EditStar, setEditStar] = useState(new Array(5).fill(null));
  const [EditStarValue, setEidtStarValue] = useState(props.Review.grade);

  useEffect(() => {
    let body = { uid: props.Review.uid };
    axios.post("/api/making/producer/getUser", body).then((response) => {
      setReviewUser(...response.data.user);
    });
  }, []);

  useEffect(() => {
    if (EditFlag) {
      sethambucControl(false);
      setEditReview(props.Review.content);
    }
  }, [EditFlag]);

  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

  const setReviewFunc = (e) => {
    if (e.currentTarget.value.length > 300) {
      return alert("리뷰는 300자까지 작성할 수 있습니다.");
    } else {
      setEditReview(e.currentTarget.value);
    }
  };

  const EditSubmit = (e) => {
    e.preventDefault();
    if (EditReview === "") {
      return alert("리뷰 내용을 채워주세요!");
    }

    let body = {
      url: props.PostURL,
      uid: user.userData.uid,
      originGrade: props.Review.grade,
      grade: EditStarValue,
      content: EditReview,
    };

    console.log(body);
    axios.post("/api/making/producer/review/update", body).then((response) => {
      if (response.data.success) {
        alert("리뷰 수정이 완료되었습니다.");
        window.location.reload();
      } else {
        console.log(response.data.err);
      }
    });
  };

  return (
    <ReviewDiv>
      <div className="avatar">
        <Avatar
          className="avatar"
          src={ReviewUser.photoURL}
          round={true}
          size="40px"
        />
      </div>
      <div className="author">
        <p>{ReviewUser.displayName}</p>
      </div>
      {user.userData && user.userData.uid === ReviewUser.uid && (
        <div className="hambuc" ref={innerRef}>
          {!EditFlag && (
            <i
              className="bi bi-three-dots"
              onClick={() => sethambucControl(true)}
            ></i>
          )}
          {hambucControl && (
            <Modal
              modalType="review"
              setEditFlag={setEditFlag}
              Info={props.Review}
            />
          )}
        </div>
      )}
      <div className="review">
        {EditFlag
          ? EditStar.map((temp, idx) => {
              let fillCheck =
                EditStarValue >= idx ? "bi bi-star-fill" : "bi bi-star";
              return (
                <i
                  key={idx}
                  className={fillCheck}
                  onClick={() => setEidtStarValue(idx)}
                ></i>
              );
            })
          : StarArr.map((temp, idx) => {
              let fillCheck =
                props.Review.grade >= idx ? "bi bi-star-fill" : "bi bi-star";
              return <i key={idx} className={fillCheck}></i>;
            })}
        {EditFlag
          ? `${EditStarValue + 1}`
          : `${props.Review.grade + 1} | ${props.Review.realTime}`}
      </div>
      <div className="desc">
        {EditFlag ? (
          <>
            <textarea
              style={{ width: "100%" }}
              rows="3"
              value={EditReview}
              onChange={(e) => setReviewFunc(e)}
            ></textarea>
            <div className="maxLength">{EditReview.length}/300</div>
          </>
        ) : (
          props.Review.content
        )}
      </div>
      <div className="info">
        {EditFlag ? (
          <div className="btnDiv">
            <button className="cancel" onClick={() => setEditFlag(false)}>
              취소
            </button>
            <button className="submit" onClick={(e) => EditSubmit(e)}>
              확인
            </button>
          </div>
        ) : null}
      </div>
    </ReviewDiv>
  );
}

function useOuterClick(callback) {
  const callbackRef = useRef();
  const innerRef = useRef();
  useEffect(() => {
    callbackRef.current = callback;
  });
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      )
        callbackRef.current(e);
    }
  }, []);
  return innerRef;
}

export default Review;
