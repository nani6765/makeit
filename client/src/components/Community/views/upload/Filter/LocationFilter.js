import React, { useEffect } from 'react'
import Select from "react-select";

function LocationFilter(props) {
    const category = [
        { value: 'set', label:'세트장'},
        { value: 'studio', label:'스튜디오'},
        { value: 'restaurant', label:'레스토랑'},
        { value: 'other', label:'기타'},
        { value: 'qna', label: '질문게시판'},
    ]
    
    useEffect(() => {
        props.setSubCategory(category[0].label);
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
            <Select options={category} defaultValue={category[0]} styles={selectStyles} onChange = {(e) => props.setSubCategory(e.label)}/>    
        </div>
        </>
    )
}

export default LocationFilter
