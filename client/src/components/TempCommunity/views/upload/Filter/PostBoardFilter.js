import { set } from 'mongoose';
import React, { useState, useEffect } from 'react'
import { Switch } from 'react-router-dom';
import Select from "react-select";

function PostBoardFilter(props) {

    const category = [
        { value: 'free', label:'자유게시판'},
        { value: 'promotion', label:'홍보게시판'},
        { value: 'qna', label:'질문게시판'},
        { value: 'other', label:'기타'}
    ]

    const [SubCategoryIdx, setSubCategoryIdx] = useState(0);
    const [SubCategoryCheck, setSubCategoryCheck] = useState(false);

    useEffect(() => {
        switch (props.SubCategory) {
            case "자유게시판":
                setSubCategoryIdx(0);
                break;
            case "홍보게시판":
                 setSubCategoryIdx(1);
                break;
            case "질문게시판":
                 setSubCategoryIdx(2);
                break;
            case "기타":
                 setSubCategoryIdx(3);
                break;
            default:
                 setSubCategoryIdx(0);
                break;
        }
        setSubCategoryCheck(true);
        props.setSubCategory("자유게시판" || props.SubCategory);
    }, [props.SubCategory])

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
            {SubCategoryCheck ? 
            <Select options={category} defaultValue={category[SubCategoryIdx]} styles={selectStyles} onChange = {(e) => props.setSubCategory(e.label)}/>    
         : null}
         </div>
        </>
    )
}

export default PostBoardFilter
