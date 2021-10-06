import React from 'react'

import { DetailFilterDiv } from '../css/RVCSS.js';

function RequestDetailFilter(props) {
    const FilmTypeArr = ["직접 촬영", "업체 촬영", "협의"];
    return (
        <DetailFilterDiv>
            <p className="filterTitle">• 의뢰제목</p>
            <div className="filterContent line bold">{props.PostInfo.oneLineIntroduce}</div>
            <p className="filterTitle">• 카테고리</p>
            <div className="filterContent halfLine">{props.PostInfo.category}</div>
            <p className="filterTitle">• 측정예산</p>
            <div className="price">
                <div className="filterContent">{props.PostInfo.minPrice}</div>
                <p>원 ~</p>
                <div className="filterContent">{props.PostInfo.maxPrice}</div> 
                <p>원</p>
            </div>
            <p className="filterTitle">• 마감기한</p>
            <div className="filterContent halfLine">{props.PostInfo.deadline}</div>
            <p className="filterTitle">• 촬영여부</p>
            <div className="checkbox">
                {
                     FilmTypeArr.map((film, idx) => {
                        return (
                        <>
                        <div className={film===props.PostInfo.filmType ? "checked" : null}>
                        </div>
                        <p>{props.PostInfo.filmType}</p>
                        </>
                        )
                     })
                }
            </div>
            <p className="filterTitle">• 특이사항</p>
            <div className="filterContent line">{props.PostInfo.uniqueness}</div>
        </DetailFilterDiv>
    )
}

export default RequestDetailFilter
