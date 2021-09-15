import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import Slider from "react-slick";

import HeaderGNB from '../../common/HeaderGNB.js';
import { MakingDiv, ProducerTitleDiv } from "../../../css/FindingProducerCSS.js";


function ProducerDetail({location}) {
    const user = useSelector((state) => state.user.userData);
    const [PostInfo, setPostInfo] = useState(location.state.post);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        easing: "ease-in-out",
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        console.log(PostInfo);
    }, [PostInfo])

    return (
        <MakingDiv>
            <HeaderGNB Menu="영상 제작자 탐색"></HeaderGNB>
            <div>
                <div className="path">
                    <span>홈 &gt; 영상제작 &gt; 제작자 탐색 &gt; {PostInfo.category}</span>
                    {
                        PostInfo.uid === user.uid &&
                        <button className="editBtn">수정하기</button>
                    }
                </div>
                <ProducerTitleDiv>
                    <Slider {...settings} className="TitleImg">
                        <img src={PostInfo.thumbnailArr[0].path} alt={PostInfo.thumbnailArr[0].key}/>
                        {
                            PostInfo.detailImgArr.map((img, idx) => {
                                return (
                                    <img src={img.path} alt={img.key} key={idx} />
                                )
                            })
                        }
                    </Slider>
                    <div className="titleInfo">

                    </div>
                </ProducerTitleDiv>
            </div>
        </MakingDiv>

    )
}

export default ProducerDetail
