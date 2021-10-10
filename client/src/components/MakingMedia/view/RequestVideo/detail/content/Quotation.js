import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from "react-avatar";
import Slider from "react-slick";
import ReactPlayer from 'react-player/youtube';
import { QuotationDiv, LinkCSS, QuotationInfo, InfoDiv, QuotationDetailDiv } from "../css/QuotationCSS.js";

function Quotation(props) {
    const [QTIdx, setQTIdx] = useState(-1);

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      easing: "ease-in-out",
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    const showDetail = (idx) => {
        if(QTIdx=== idx)
            setQTIdx(-1);
        else
            setQTIdx(idx);
    }

    return (
        <QuotationDiv>
            <p className="title">업체 견적</p>
            <QuotationInfo>
                <Slider {...settings} className="quotationList">
                {
                    props.QuotationArr.map((quotation, idx) => {
                        return (
                            <InfoDiv key={idx} onClick={() => {showDetail(idx)}}>
                                <div className={QTIdx === idx ? "container active" : "container"}>
                                    <Avatar
                                        src={quotation.auther.photoURL}
                                        size="70"
                                        round={true}
                                        style={{ border: "1px solid #c6c6c6", display: "block", margin: "0 auto" }}
                                    />
                                    <p>
                                        {quotation.auther.displayName}
                                        <i className="bi bi-heart"></i>
                                    </p>
                                    <p className="quotationTitle title">{quotation.oneLineIntroduce}</p>
                                    <div className="filter">
                                        <p>• 예상 금액 : {quotation.price}</p>
                                        <p>• 예상 기간 : {quotation.deadline}</p>
                                        <p>• 평균 응답 시간 : 미구현?</p>
                                    </div>
                                </div>
                            </InfoDiv>
                        )
                    })
                }
                </Slider>
                {
                    QTIdx !== -1 && (
                        <QuotationDetailDiv>
                            <p className="detailTitle title">{props.QuotationArr[QTIdx].oneLineIntroduce}</p>
                            <div className="filter">
                                <div>
                                <span>예상 금액</span><p>{props.QuotationArr[QTIdx].price}원</p>
                                </div>
                                <div>
                                <span>예상 기간</span><p>{props.QuotationArr[QTIdx].deadline}</p>
                                </div>
                                <div>
                                <span>포트폴리오</span><p className="portfolio">미구현</p>
                                </div>
                            </div>
                            <div className="content">{props.QuotationArr[QTIdx].content}</div>
                            <div className="reference">
                                <p>참고 자료</p>
                                <Slider {...settings}>
                                    {
                                        props.QuotationArr[QTIdx].videoArr.map((video, idx) => {
                                            return (
                                                <ReactPlayer url={`youtube.com/watch?v=${video.id.videoId}`} width="100%" volume="1"/>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </QuotationDetailDiv>
                    )
                }
                {
                    props.user.uid !== props.auther && (
                        <div className="btnDiv">
                            <Link to={{pathname:"/making/quotationUpload", state: {url: props.url}}} css={LinkCSS}>
                                <button>우리도 견적 등록하기</button>
                            </Link>
                        </div>
                    )
                }
            </QuotationInfo>
        </QuotationDiv>
    )
}

export default Quotation
