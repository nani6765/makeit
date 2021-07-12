import React, { useState, useEffect } from 'react'
import { SubCategoryFilterDiv } from './UploadFilterContent.js';

function ChooseSubCategory() {
    const [SubCategory, setSubCategory] = useState("전체");
    
    useEffect(() => {
        console.log(SubCategory);
    }, [SubCategory]);

    return (
        <>
            <SubCategoryFilterDiv>
                <span>카테고리</span>
                <select value={SubCategory} onChange={(e) => {setSubCategory(e.target.value)}}>
                    <option value="all">전체</option>
                    <option value="free">자유게시판</option>
                    <option value="promotion">홍보게시판</option>
                    <option value="qna">질문게시판</option>
                    <option value="other">기타</option>
                </select>
            </SubCategoryFilterDiv>
        </>
    )
}

export default ChooseSubCategory
