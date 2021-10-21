import React from 'react'

function FPUploadFilter(props) {

    const FilmTypeFilterManager = (e) => {
        if(e.target.checked) {
            let temp = [...props.FilmType];
            temp.push(e.target.value);
            props.setFilmType(temp);
        }
        else {
            props.setFilmType(props.FilmType.filter(film => film!==e.target.value));
        }
    }

    const ClassificationFilterManager = (e) => {
        if(e.target.checked) {
            let temp = [...props.Classification];
            temp.push(e.target.value);
            props.setClassification(temp);
        }
        else {
            props.setClassification(props.Classification.filter(cf => cf!==e.target.value));
        }
    }

    

    return (
        <>
            <div>
                <div className="categoryName">
                    <p>촬</p><p>영</p><p>형</p><p>태</p>
                </div>
                <div className="datailFilter">
                    <input type="checkbox" id="video" value="영상" onClick = {(e) => {FilmTypeFilterManager(e)}} />
                    <label for="video">영상</label>
                    <input type="checkbox" id="photo" value="사진" onClick = {(e) => {FilmTypeFilterManager(e)}} />
                    <label for="photo">사진</label>
                    <input type="checkbox" id="etc" value="기타" onClick = {(e) => {FilmTypeFilterManager(e)}} />
                    <label for="etc">기타</label>
                </div>
            </div>
            <div>
                <div className="categoryName">
                    <p>분</p><p>류</p>
                </div>
                <div className="datailFilter">
                    <input type="checkbox" id="plan" value="기획" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="plan">기획</label>
                    <input type="checkbox" id="edit" value="편집" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="edit">편집</label>
                    <input type="checkbox" id="filming" value="촬영" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="filming">촬영</label>
                    <input type="checkbox" id="light" value="조명" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="light">조명</label>
                    <input type="checkbox" id="sound" value="음향" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="sound">음향</label>
                    <input type="checkbox" id="voice" value="성우" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="voice">성우</label>
                    <input type="checkbox" id="beauty" value="미용" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="beauty">미용</label>
                    <input type="checkbox" id="classificationETC" value="기타" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="classificationETC">기타</label>
                </div>
            </div>
        </>
    )
}

export default FPUploadFilter
