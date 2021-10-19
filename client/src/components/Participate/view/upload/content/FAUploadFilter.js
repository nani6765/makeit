import React from 'react'

function FAUploadFilter(props) {

    const GenderFilterManager = (e) => {
        if(e.target.checked) {
            let temp = [...props.Gender];
            temp.push(e.target.value);
            props.setGender(temp);
        }
        else {
            props.setGender(props.Gender.filter(gender => gender!==e.target.value));
        }
    }

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
                <p>성 별</p>
                <div className="datailFilter">
                    <input type="checkbox" id="male" value="남자" onClick = {(e) => {GenderFilterManager(e)}} />
                    <label for="male">남자</label>
                    <input type="checkbox" id="female" value="여자" onClick = {(e) => {GenderFilterManager(e)}} />
                    <label for="female">여자</label>
                    <input type="checkbox" id="noMatter" value="무관" onClick = {(e) => {GenderFilterManager(e)}} />
                    <label for="noMatter">무관</label>
                </div>
            </div>
            <div>
                <p>촬영 형태</p>
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
                <p>분 류</p>
                <div className="datailFilter">
                    <input type="checkbox" id="short" value="단편" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="short">단편</label>
                    <input type="checkbox" id="long" value="장편" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="long">장편</label>
                    <input type="checkbox" id="ad" value="광고" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="ad">광고</label>
                    <input type="checkbox" id="TV" value="TV" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="TV">TV</label>
                    <input type="checkbox" id="pictorial" value="화보" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="pictorial">화보</label>
                    <input type="checkbox" id="classificationETC" value="기타" onClick = {(e) => {ClassificationFilterManager(e)}} />
                    <label for="classificationETC">기타</label>
                </div>
            </div>
        </>
    )
}

export default FAUploadFilter
