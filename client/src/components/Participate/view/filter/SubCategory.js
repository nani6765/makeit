import React from 'react';
import { useHistory } from 'react-router';

import { SubCategoryDiv } from "../../css/ParticipateCSS.js";

function SubCategory(props) {
    let history = useHistory();
    const SubCategoryList = {
        IP : ["전체", "스태프", "배우", "1인편집자", "기타"],
        Lo : [
            "전체",
            "세트장",
            "스튜디오",
            "식당&카페",
            "주거공간",
            "사무실",
            "기타",
            ]
        };

    return (
        <SubCategoryDiv>
            <ul>
            {
                SubCategoryList[props.URL.category].map((category, idx) => {
                    return <li key={idx} className={category === props.URL.subCategory ? "active" : null}
                    onClick={() => history.push(`/participate?category=${props.URL.category}&sort=hot&pIdx=0&subCategory=${category}`)}>{category}</li>
                })
            }
            </ul>
        </SubCategoryDiv>
    )
}

export default SubCategory
