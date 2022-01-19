import React, {useEffect} from 'react';
import { useHistory } from "react-router";
import qs from "qs";

import { Filter } from "../CSS/PortpolioCSS.js";

function PFFilter(props) {
    let history = useHistory();

    const PortfolioTypeFilterManager = (e) => {
      let temp = props.URL;
      if (temp.class) {
        if (temp.class.includes(e.target.id)) {
          var idx = temp.class.indexOf(e.target.id);
          if (idx !== -1) {
            temp.class.splice(idx, 1);
          }
        } else {
          temp.class.push(e.target.id);
        }
      } else {
        temp.class = [];
        temp.class.push(e.target.id);
      }
      let temp2 = qs.stringify(temp);
      history.push(`?${decodeURI(temp2)}`);
    };
    
  const FilmTypeFilterManager = (e) => {
    let temp = props.URL;

    if (temp.filmType) {
      if (temp.filmType.includes(e.target.id)) {
        var idx = temp.filmType.indexOf(e.target.id);
        if (idx !== -1) {
          temp.filmType.splice(idx, 1);
        }
      } else {
        temp.filmType.push(e.target.id);
      }
    } else {
      temp.filmType = [];
      temp.filmType.push(e.target.id);
    }
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
  };


    const ClassificationFilterManager = (e) => {
        let temp = props.URL;
        if (temp.class) {
          if (temp.class.includes(e.target.id)) {
            var idx = temp.class.indexOf(e.target.id);
            if (idx !== -1) {
              temp.class.splice(idx, 1);
            }
          } else {
            temp.class.push(e.target.id);
          }
        } else {
          temp.class = [];
          temp.class.push(e.target.id);
        }
        let temp2 = qs.stringify(temp);
        history.push(`?${decodeURI(temp2)}`);
      };

    const FieldFilterManager = (e) => {
      let temp = props.URL;
      if (temp.class) {
        if (temp.class.includes(e.target.id)) {
          var idx = temp.class.indexOf(e.target.id);
          if (idx !== -1) {
            temp.class.splice(idx, 1);
          }
        } else {
          temp.class.push(e.target.id);
        }
      } else {
        temp.class = [];
        temp.class.push(e.target.id);
      }
      let temp2 = qs.stringify(temp);
      history.push(`?${decodeURI(temp2)}`);
    };

    const InputReset = () => {
        let TargetDiv = document.querySelector(".select");
        let InputList = TargetDiv.querySelectorAll("input[type=checkbox]:checked");
        for(let i = 0; i < InputList.length; i++){
            InputList[i].checked = false;
        }
        return true;
    }


    const ResetHandler = async (e) => {
        e.preventDefault();
        await InputReset();     
        history.push(`/portfolio?category=PF&sort=인기순&pIdx=0`)
    }

    return (
        <Filter>
          <div className="select">
            <div className='left'>
                <div className="labelArea">구분</div>
                <div className="contentArea">
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="prod"
                    value="프로덕션"
                    onClick={(e) => {
                        PortfolioTypeFilterManager(e);
                    }}
                    />
                    <label htmlFor="prod">프로덕션</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="pro"
                    value="프로"
                    onClick={(e) => {
                        PortfolioTypeFilterManager(e);
                    }}
                    />
                    <label htmlFor="pro">프로</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="portfolioEtc"
                    value="기타"
                    onClick={(e) => {
                        PortfolioTypeFilterManager(e);
                    }}
                    />
                    <label htmlFor="portfolioEtc">기타</label>
                </div>
                </div>
            </div>
            <div className='right'>
                
                <div className="labelArea">촬영형태</div>
                <div className="contentArea">
                    <div>
                        <input
                        className='filterInput'
                        type="checkbox"
                        id="video"
                        value="영상"
                        onClick={(e) => {
                            FilmTypeFilterManager(e);
                        }}
                        />
                        <label htmlFor="video">영상</label>
                    </div>
                    <div>
                        <input
                        className='filterInput'
                        type="checkbox"
                        id="photo"
                        value="사진"
                        onClick={(e) => {
                            FilmTypeFilterManager(e);
                        }}
                        />
                        <label htmlFor="photo">사진</label>
                    </div>
                    <div>
                        <input
                        className='filterInput'
                        type="checkbox"
                        id="filmtypeEtc"
                        value="기타"
                        onClick={(e) => {
                            FilmTypeFilterManager(e);
                        }}
                        />
                        <label htmlFor="filmtypeEtc">기타</label>
                    </div>
                </div>
                <div className='reset'>
                    <button onClick={(e) => ResetHandler(e)}>
                        <i className="bi bi-arrow-counterclockwise"></i>            
                    </button>
                </div>
            
            </div>
            <div className='left'>
                <div className="labelArea">분류</div>
                <div className="contentArea">
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="short"
                    value="단편"
                    onClick={(e) => {
                        ClassificationFilterManager(e);
                    }}
                    />
                    <label htmlFor="short">단편</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="long"
                    value="장편"
                    onClick={(e) => {
                        ClassificationFilterManager(e);
                    }}
                    />
                    <label htmlFor="long">장편</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="ad"
                    value="광고"
                    onClick={(e) => {
                        ClassificationFilterManager(e);
                    }}
                    />
                    <label htmlFor="ad">광고</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="tv"
                    value="TV"
                    onClick={(e) => {
                        ClassificationFilterManager(e);
                    }}
                    />
                    <label htmlFor="tv">TV</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="pictorial"
                    value="화보"
                    onClick={(e) => {
                        ClassificationFilterManager(e);
                    }}
                    />
                    <label htmlFor="pictorial">화보</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="classEtc"
                    value="기타"
                    onClick={(e) => {
                        ClassificationFilterManager(e);
                    }}
                    />
                    <label htmlFor="classEtc">기타</label>
                </div>
                </div>
            </div>
            <div className='right'>
                <div className="labelArea">프로분야</div>
                <div className="contentArea">
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="plan"
                    value="기획"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="plan">기획</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="edit"
                    value="편집"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="edit">편집</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="filming"
                    value="촬영"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="filming">촬영</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="light"
                    value="조명"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="light">조명</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="acoustic"
                    value="음향"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="acoustic">음향</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="voiceActor"
                    value="성우"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="voiceActor">성우</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="beauty"
                    value="미용"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="beauty">미용</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="fieldEtc"
                    value="기타"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="fieldEtc">기타</label>
                </div>
                </div>
            </div>
          </div>
        </Filter>
    )
}

export default PFFilter
