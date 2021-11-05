import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import Slider from "react-slick";
import ReactPlayer from "react-player/youtube";
import QuotationCard from "./QuotationCard.js";
import {
  QuotationDiv,
  LinkCSS,
  QuotationInfo,
  InfoDiv,
  QuotationDetailDiv,
} from "../../../../css/RVDCSS.js";

function Quotation(props) {
  const [QTIdx, setQTIdx] = useState(-1);
  const user = useSelector((state) => state.user.userData);

  var settings = {
    dots: false,
    speed: 500,
    infinite: props.QuotationArr.length > 3,
    easing: "ease-in-out",
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const showDetail = (idx) => {
    if (QTIdx === idx) setQTIdx(-1);
    else setQTIdx(idx);
  };

  return (
    <QuotationDiv>
      <p className="title">업체 견적</p>
      <QuotationInfo>
        <Slider {...settings} className="quotationList" >
          {props.QuotationArr.map((quotation, idx) => {
            if (quotation.isPublic) {
              if (!user || (props.auther !== user.uid && quotation.uid !== user.uid)) {
                return (
                  <InfoDiv
                    key={idx}
                    style={{ cursor: "default", height: "100%" }}
                  >
                  <div
                    className="container"
                  >
                    <Avatar
                      src="https://kr.object.ncloudstorage.com/makeit/user/profile.png"
                      size="70"
                      round={true}
                      style={{
                        border: "1px solid #c6c6c6",
                        display: "block",
                        margin: "0 auto",
                      }}
                    />
                    <p>
                       김미프
                      <i className="bi bi-heart"></i>
                    </p>
                    <p className="quotationTitle title">
                      의뢰를 작성한 회원에게만 <br />공개되는 게시글입니다.
                    </p>
                    <div className="filter">
                      <p>• 예상 금액 : 비공개</p>
                      <p>• 예상 기간 : 비공개</p>
                      <p>• 평균 응답 시간 : 미구현?</p>
                    </div>
                  </div>
                  </InfoDiv>
                );
              }
            }
            
            return (
              <InfoDiv
                key={idx}
                style={{ cursor: "default", height: "100%" }}
              >
                <QuotationCard user={user} idx={idx} showDetail={showDetail} setQTIdx={setQTIdx} quotation={quotation} containerCN={QTIdx === idx ? "container active" : "container"} />
              </InfoDiv>
            );
          })}
        </Slider>
        {QTIdx !== -1 && (
          <QuotationDetailDiv>
            <p className="detailTitle title">
              {props.QuotationArr[QTIdx].oneLineIntroduce}
            </p>
            <div className="filter">
              <div>
                <span>예상 금액</span>
                <p>{props.QuotationArr[QTIdx].price}원</p>
              </div>
              <div>
                <span>예상 기간</span>
                <p>{props.QuotationArr[QTIdx].deadline}</p>
              </div>
              <div>
                <span>포트폴리오</span>
                <p className="portfolio">미구현</p>
              </div>
            </div>
            <div className="content">{props.QuotationArr[QTIdx].content}</div>
            <div className="reference">
              <p>참고 자료</p>
              <Slider
                {
                  ...{
                    dots: false,
                    speed: 500,
                    infinite: props.QuotationArr[QTIdx].videoArr.length > 3,
                    easing: "ease-in-out",
                    slidesToShow: 3,
                    slidesToScroll: 1,
              }}>
                {props.QuotationArr[QTIdx].videoArr.map((video, idx) => {
                  return (
                    <ReactPlayer
                      url={`youtube.com/watch?v=${video.id.videoId}`}
                      width="100%"
                      volume="1"
                    />
                  );
                })}
              </Slider>
            </div>
          </QuotationDetailDiv>
        )}
        {user != null
          ? user.uid !== props.auther && (
              <div className="btnDiv">
                <Link
                  to={{
                    pathname: "/making/quotationUpload",
                    state: { url: props.url },
                  }}
                  css={LinkCSS}
                >
                  <button>우리도 견적 등록하기</button>
                </Link>
              </div>
            )
          : null}
      </QuotationInfo>
    </QuotationDiv>
  );
}

export default Quotation;
