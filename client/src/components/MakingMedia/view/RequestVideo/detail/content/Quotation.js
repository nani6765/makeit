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
              if (user != null) {
                if (props.auther !== user.uid && quotation.uid !== user.uid) {
                  return (
                    <InfoDiv
                      key={idx}
                      style={{ cursor: "default", height: "100%" }}
                    >
                      <div className="container">
                        <div className="private">
                          작성자에게만
                          <br />
                          공개된 견적입니다.
                        </div>
                      </div>
                    </InfoDiv>
                  );
                }
              }
            }
            
            return (
              <QuotationCard key={idx} idx={idx} quotation={quotation} containerCN={QTIdx === idx} />
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
