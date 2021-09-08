import React, { useState, useEffect } from 'react'

import Slider from "react-slick";
import { ProducerDetailDiv } from "../../css/FindingProducerCSS.js";

function ProducerDetail(props) {
    const [LikeFlag, setLikeFlag] = useState(false);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        draggable: false,
        easing: "ease-in-out",
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        console.log(LikeFlag)
    }, [LikeFlag])

    return (
        <ProducerDetailDiv>
            <p className="category">
                홈 &gt; 영상제작 &gt; 영상 제작자 탐색 &gt; 일반 영상
            </p>
            <div className="mainInfo">
                <Slider {...settings}>
                    <img src="/Img/MainBanner.jpg" className="infoimg" />
                    <img src="/Img/MainBanner.jpg" className="infoimg" />
                    <img src="/Img/MainBanner.jpg" className="infoimg" />
                    <img src="/Img/MainBanner.jpg" className="infoimg" />
                </Slider>
                <div className="info">
                    <p className="likeshare">
                        <span className="like" onClick={()=> setLikeFlag(!LikeFlag)}>
                            찜하기
                            {LikeFlag
                            ? <i className="bi bi-heart"></i>
                            : <i className="bi bi-heart"></i>
                            }
                        </span>
                        <span className="share">
                            찜하기
                        </span>
                    </p>
                </div>
            </div>
        </ProducerDetailDiv>
    )
}

export default ProducerDetail
