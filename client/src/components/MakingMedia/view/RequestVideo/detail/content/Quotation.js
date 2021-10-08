import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from "react-avatar";
import Slider from "react-slick";
import { QuotationDiv, LinkCSS, InfoDiv } from "../css/QuotationCSS.js";

function Quotation(props) {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      easing: "ease-in-out",
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
        <QuotationDiv>
            <p className="title">업체 견적</p>
            <Slider {...settings}>
                {/*
                    props.QuotationArr.map((quotation, idx) => {
                        return (
                            <InfoDiv key={idx}>
                                <Avatar
                                    src={quotation.auther.photoURL}
                                    size="45"
                                    round={true}
                                    style={{ border: "1px solid #c6c6c6" }}
                                />
                            </InfoDiv>
                        )
                    })
                */}
            </Slider>
            <div>
                <Link to={{pathname:"/making/quotationUpload", state: {url: props.url}}} css={LinkCSS}>
                    <button>우리도 견적 등록하기</button>
                </Link>
            </div>
        </QuotationDiv>
    )
}

export default Quotation
