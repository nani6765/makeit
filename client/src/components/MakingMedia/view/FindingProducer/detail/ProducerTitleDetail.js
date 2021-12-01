import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import UserModal from "../../../../utils/view/Modal/UserModal.js";
import GuestModal from "../../../../utils/view/Modal/GuestModal.js";
import { ProducerTitleDiv } from "../../../css/FPDCSS.js";
import axios from "axios";

import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router";

function ProducerTitleDetail(props) {
  const user = useSelector((state) => state.user);
  const [LikeLoading, setLikeLoading] = useState(false);
  let history = useHistory();

  const [hambucControl, sethambucControl] = useState(false);

  var settings = {
    dots: true,
    infinite: props.PostInfo.detailImgArr[0] > 1,
    speed: 500,
    arrows: true,
    easing: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

  const GuestLikeHandler = () => {
    alert("로그인한 회원만 좋아요를 누를 수 있습니다.");
    return history.push("/login");
  };

  const likeHandler = async (e, key) => {
    setLikeLoading(true);

    if (props.PostInfo.uid === props.user.uid) {
      alert("자신의 프로덕션에는 찜하기를 할 수 없습니다.");
      return;
    }
    if (e.detail > 1) {
      return window.location.reload();
    }

    let body = {
      uid: props.user.uid,
      _id: props.PostInfo._id,
      key: key,
      url: props.PostInfo.url,
      type: "ProPost",
      category: "making/ProducerPost",
    };
    try {
      await axios.post("/api/util/like", body).then((response) => {
        if (response.data.success) {
          window.location.reload();
        } else {
          console.log("produer like handler error");
          window.location.reload();
        }
      });
    } finally {
      setLikeLoading(false);
    }
  };

  return (
    <>
      <div>
        <div className="path">
          <span>
            홈 &gt; 영상제작 &gt; 제작자 탐색 &gt; {props.PostInfo.category}
          </span>
        </div>
      </div>
      <ProducerTitleDiv>
        <Slider {...settings} className="TitleImg">
          <img src={props.PostInfo.thumbnailUrl} />
          {props.PostInfo.detailImgArr.map((img, idx) => {
            return <img src={img.path} alt={img.key} key={idx} />;
          })}
        </Slider>
        <div className="titleInfo">
          <div className="top">
            <div className="like">
              <span
                disabled={LikeLoading}
                onClick={(e) =>
                  props.user
                    ? likeHandler(
                        e,
                        props.PostInfo.likeArray.includes(props.user.uid)
                      )
                    : GuestLikeHandler()
                }
              >
                찜하기
                {props.user &&
                props.PostInfo.likeArray.includes(props.user.uid) ? (
                  <i className="bi bi-heart-fill"></i>
                ) : (
                  <i className="bi bi-heart"></i>
                )}
              </span>
              <span>|</span>
              <span>
                공유하기
                <i className="bi bi-share-fill share"></i>
              </span>
            </div>
            {user.userData && (
              <div className="hambuc" ref={innerRef}>
                <i
                  className="bi bi-three-dots"
                  onClick={() => sethambucControl(true)}
                ></i>
                {hambucControl &&
                  (user.userData.uid === props.PostInfo.uid ? (
                    <UserModal
                      modalType="/making/producer"
                      Info={props.PostInfo}
                      path="/making"
                      category="영상 제작자 탐색"
                    />
                  ) : (
                    <GuestModal modalType="post" postInfo={props.PostInfo} />
                  ))}
              </div>
            )}
          </div>
          <div className="oneLineIntro">{props.PostInfo.oneLineIntroduce}</div>
          <div className="price">
            {props.PostInfo.priceInfo === "직접 입력"
              ? props.PostInfo.priceDirectInput
              : props.PostInfo.priceInfo}
          </div>
          <div className="review">
            <i className="bi bi-star-fill"></i>
            <span>
              {props.PostInfo.grade
                ? (props.PostInfo.grade / props.PostInfo.gradeArrayNum).toFixed(
                    1
                  )
                : props.PostInfo.grade}{" "}
              | {props.PostInfo.gradeArrayNum}개의 평가
            </span>
          </div>
        </div>
      </ProducerTitleDiv>
    </>
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

export default withRouter(ProducerTitleDetail);
