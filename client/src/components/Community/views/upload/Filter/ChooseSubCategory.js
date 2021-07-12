import React, { useState, useEffect } from 'react'
import { SubCategoryFilterDiv } from './UploadFilterContent.js';
import Select from "react-select";
import { symbol } from 'prop-types';
import { AutoScaling } from 'aws-sdk';

function ChooseSubCategory() {

    const category = [
        { value: 'all', label:'전체'},
        { value: 'free', label:'자유게시판'},
        { value: 'promotion', label:'홍보게시판'},
        { value: 'qna', label:'질문게시판'},
        { value: 'other', label:'기타'}
    ]

    const selectStyles = {
        control: (styles, {isSelected}) => ({...styles, textAlign: 'center', width: '13rem', height: '1rem', margin: '0px', border:isSelected ? '1px solid #702cba' : null}),
        option: (styles, { isSelected }) => {
            return {
            width: '13rem',
            height: '2rem',
            lineHeight: '2rem',
            backgroundColor: isSelected
            ? 'rgba(17, 17, 17, 0.16)'
            : null,
            textAlign: 'center',
            }
        },
        singleValue: styles => ({
            ...styles,
            width:'13rem',
        }),
        menuList: styles => ({
            ...styles,
            padding: '0px',
        }),
        menu: styles => ({
            ...styles,
            margin: '0px'
        })
    }

    return (
        <>
        <div style={{display:"flex", flexWrap:"nowrap", alignItems:"center"}}>
            <p style={{marginBottom:"0px", marginRight:"1rem"}}>카테고리</p>
            <Select options={category} defaultValue={category[0]} styles={selectStyles}/>    
        </div>
        </>
    )
}

export default ChooseSubCategory
