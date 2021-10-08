import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from "react-avatar";
import Slider from "react-slick";
import { QuotationDiv, LinkCSS, QuotationInfo, InfoDiv } from "../css/QuotationCSS.js";

function Quotation(props) {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      easing: "ease-in-out",
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
        <QuotationDiv>
            <p className="title">업체 견적</p>
            <QuotationInfo>
                <Slider {...settings} className="quotationList">
                {
                    props.QuotationArr.map((quotation, idx) => {
                        return (
                            <InfoDiv key={idx}>
                                <div className='container'>
                                    <Avatar
                                        src={quotation.auther.photoURL}
                                        size="70"
                                        round={true}
                                        style={{ border: "1px solid #c6c6c6" }}
                                    />
                                    <p>
                                        {quotation.auther.displayName}
                                        <i className="bi bi-heart"></i>
                                    </p>
                                    <p className="title">{quotation.oneLineIntroduce}</p>
                                </div>
                            </InfoDiv>
                        )
                    })
                }
                </Slider>
                <div className="btnDiv">
                    <Link to={{pathname:"/making/quotationUpload", state: {url: props.url}}} css={LinkCSS}>
                        <button>우리도 견적 등록하기</button>
                    </Link>
                </div>
            </QuotationInfo>
        </QuotationDiv>
    )
}

export default Quotation
