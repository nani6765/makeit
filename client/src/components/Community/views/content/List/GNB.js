import React from 'react'
import { GNBDiv, GNBCategoryBtn } from '../../../css/CommunityListCSS'

function GNB() {

    const MainCategoryList = [
        "전체",
        "자유게시판",
        "홍보게시판",
        "질문게시판",
        "건의함",
    ];

    return (
        <GNBDiv>
            {
                MainCategoryList.map((category, idx) => {
                    return (
                    <>
                    <button key={idx}>{category}</button>
                    </>
                    );
                })
            }
        </GNBDiv>
    )
}

export default GNB
