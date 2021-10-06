import React from 'react'
import { Link } from "react-router-dom";

import { ReactComponent as SurprisingImg } from "../../../../css/Img/Surprising.svg";
import { NoQuotationDiv } from "../css/RVCSS.js";

function NoQuotation() {
    return (
        <NoQuotationDiv>
            <p className="title">업체 견적</p>
            <div>
                <SurprisingImg />
                <p>아무도 견적을 등록하지 않았어요!</p>
                <button>첫 견적 등록하기</button>
            </div>
        </NoQuotationDiv>
    )
}

export default NoQuotation
