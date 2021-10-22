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
          <div className="select">
        <div className="labelArea">
          <span>촬</span>
          <span>영</span>
          <span>형</span>
          <span>태</span>
        </div>

        <div className="contentArea">
          <div>
            <input
              type="checkbox"
              id="video"
              value="영상"
              onClick={(e) => {
                FilmTypeFilterManager(e);
              }}
            />
            <label for="video">영상</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="photo"
              value="사진"
              onClick={(e) => {
                FilmTypeFilterManager(e);
              }}
            />
            <label for="photo">사진</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="etc"
              value="기타"
              onClick={(e) => {
                FilmTypeFilterManager(e);
              }}
            />
            <label for="etc">기타</label>
          </div>
        </div>
      </div>
      <div className="select">
        <div className="labelArea">
          <span>분</span>
          <span>류</span>
        </div>

        <div className="contentArea">
          <div>
            <input
              type="checkbox"
              id="a"
              value="기획"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label for="a">기획</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="b"
              value="편집"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label for="b">편집</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="c"
              value="촬영"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label for="c">촬영</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="d"
              value="조명"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label for="d">조명</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="e"
              value="음향"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label for="e">음향</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="f"
              value="성우"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label for="f">성우</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="g"
              value="미용"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label for="g">미용</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="h"
              value="기타"
              onClick={(e) => {
                ClassificationFilterManager(e);
              }}
            />
            <label for="h">기타</label>
          </div>
        </div>
      </div>
        </>
    )
}

export default FPUploadFilter
