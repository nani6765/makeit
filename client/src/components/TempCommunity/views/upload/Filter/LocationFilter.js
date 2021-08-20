import React, { useState, useEffect } from 'react'
import Select from "react-select";

function LocationFilter(props) {
    const [SubCategoryIdx, setSubCategoryIdx] = useState(0);
    const [SubCategoryCheck, setSubCategoryCheck] = useState(false);
    const category = [
        { value: 'set', label:'세트장'},
        { value: 'studio', label:'스튜디오'},
        { value: 'restaurant', label:'식당'},
        { value: 'other', label:'기타'},
        { value: 'qna', label: '질문게시판'},
    ]
    
    useEffect(() => {
        switch (props.SubCategory) {
            case "세트장":
                setSubCategoryIdx(0);
                break;
            case "스튜디오":
                 setSubCategoryIdx(1);
                break;
            case "식당":
                 setSubCategoryIdx(2);
                break;
            case "기타":
                 setSubCategoryIdx(3);
                break;
            case "질문게시판":
                 setSubCategoryIdx(4);
                break;
            default:
                 setSubCategoryIdx(0);
                break;
        }
        setSubCategoryCheck(true);
        props.setSubCategory(category[0].label || props.SubCategory);
    }, [])

    const selectStyles = {
        control: (styles, {isSelected}) => ({...styles, textAlign: 'center', width: '13rem', height: '1rem', margin: '0px', border:isSelected ? '1px solid #702cba' : null}),
        option: ({ isSelected }) => {
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

export default LocationFilter
