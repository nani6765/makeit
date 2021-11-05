import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ProducerTitleDiv } from "../../../css/FPDCSS.js";
import axios from "axios";

import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router";

function ProducerTitleDetail(props) {
  const user = useSelector((state) => state.user);
  let history = useHistory();

  var settings = {
    dots: true,
    infinite: props.PostInfo.detailImgArr[0] > 1,
    speed: 500,
    arrows: true,
    easing: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const GuestLikeHandler = () => {
    alert("로그인한 회원만 좋아요를 누를 수 있습니다.");
    return history.push("/login");
  };

  const likeHandler = (key) => {
    if (props.PostInfo.uid === props.user.uid) {
      alert("자신의 프로덕션에는 찜하기를 할 수 없습니다.");
      return;
    }
    let body = {
      uid: props.user.uid,
      _id: props.PostInfo.url,
      key: key,
      url: props.PostInfo.url,
      type: "ProPost",
      category: "making/ProducerPost",
    };

    axios.post("/api/making/producer/producerLike", body).then((response) => {
      if (response.data.success) {
        window.location.reload();
      } else {
        console.log("produer like handler error");
        window.location.reload();
      }
    });
  };

  return (
    <>
      <div>
        <div className="path">
          <span>
            홈 &gt; 영상제작 &gt; 제작자 탐색 &gt; {props.PostInfo.category}
          </span>
          {props.user
            ? props.PostInfo.uid === props.user.uid && (
                <Link
                  to={{
                    pathname: "/making/ProducerEdit",
                    state: { post: props.PostInfo },
                  }}
                >
                  <button className="editBtn">수정하기</button>
                </Link>
              )
            : null}
        </div>
      </div>
      <ProducerTitleDiv>
        <Slider {...settings} className="TitleImg">
          <img
            src={props.PostInfo.thumbnailArr[0].path}
            alt={props.PostInfo.thumbnailArr[0].key}
          />
          {props.PostInfo.detailImgArr.map((img, idx) => {
            return <img src={img.path} alt={img.key} key={idx} />;
          })}
        </Slider>
        <div className="titleInfo">
          <div className="like">
            <span
              onClick={() =>
                props.user
                  ? likeHandler(
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
          <div className="title">{props.PostInfo.oneLineIntroduce}</div>
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

export default withRouter(ProducerTitleDetail);
