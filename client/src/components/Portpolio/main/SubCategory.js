import React from 'react';
import { useHistory } from 'react-router';

import { SubCategoryDiv } from "../CSS/PortpolioCSS.js";

function SubCategory(props) {
    let history = useHistory();
    const SubCategoryList = {
        MP : ["전체 목록", "공개된 포트폴리오"],
        Pr : ["진행 중 프로젝트", "마감된 프로젝트"]
    };

    return (
        <SubCategoryDiv>
            <ul>
            {
                SubCategoryList[props.URL.category].map((category, idx) => {
                    return <li key={idx} className={category === props.URL.subCategory ? "active" : null}
                    onClick={() => history.push(`/portfolio?category=${props.URL.category}&pIdx=0&subCategory=${category}`)}>{category}</li>
                })
            }
            </ul>
        </SubCategoryDiv>
    )
}

export default SubCategory
