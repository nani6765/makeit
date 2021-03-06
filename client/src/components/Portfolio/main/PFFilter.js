import React, {useEffect} from 'react';
import { useHistory } from "react-router";
import qs from "qs";

import { Filter } from "../CSS/PortpolioCSS.js";

function PFFilter(props) {
    let history = useHistory();

    const PortfolioTypeFilterManager = (e) => {
      let temp = props.URL;
      if (temp.type) {
        if (temp.type.includes(e.target.id)) {
          var idx = temp.type.indexOf(e.target.id);
          if (idx !== -1) {
            temp.type.splice(idx, 1);
          }
        } else {
          temp.type.push(e.target.id);
        }
      } else {
        temp.type = [];
        temp.type.push(e.target.id);
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
      if (temp.field) {
        if (temp.field.includes(e.target.id)) {
          var idx = temp.field.indexOf(e.target.id);
          if (idx !== -1) {
            temp.field.splice(idx, 1);
          }
        } else {
          temp.field.push(e.target.id);
        }
      } else {
        temp.field = [];
        temp.field.push(e.target.id);
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
        history.push(`/portfolio?category=PF&sort=?????????&pIdx=0`)
    }

    return (
        <Filter>
          <div className="select">
            <div className='left'>
                <div className="labelArea">??????</div>
                <div className="contentArea">
                  <div>
                      <input
                      className='filterInput'
                      type="checkbox"
                      id="????????????"
                      value="????????????"
                      onClick={(e) => {
                          PortfolioTypeFilterManager(e);
                      }}
                      />
                      <label htmlFor="????????????">????????????</label>
                  </div>
                  <div>
                      <input
                      className='filterInput'
                      type="checkbox"
                      id="??????"
                      value="??????"
                      onClick={(e) => {
                          PortfolioTypeFilterManager(e);
                      }}
                      />
                      <label htmlFor="??????">??????</label>
                  </div>
                </div>
            </div>
            <div className='right'>
                
                <div className="labelArea">????????????</div>
                <div className="contentArea">
                    <div>
                        <input
                        className='filterInput'
                        type="checkbox"
                        id="video"
                        value="??????"
                        onClick={(e) => {
                            FilmTypeFilterManager(e);
                        }}
                        />
                        <label htmlFor="video">??????</label>
                    </div>
                    <div>
                        <input
                        className='filterInput'
                        type="checkbox"
                        id="photo"
                        value="??????"
                        onClick={(e) => {
                            FilmTypeFilterManager(e);
                        }}
                        />
                        <label htmlFor="photo">??????</label>
                    </div>
                    <div>
                        <input
                        className='filterInput'
                        type="checkbox"
                        id="filmtypeEtc"
                        value="??????"
                        onClick={(e) => {
                            FilmTypeFilterManager(e);
                        }}
                        />
                        <label htmlFor="filmtypeEtc">??????</label>
                    </div>
                </div>
                <div className='reset'>
                    <button onClick={(e) => ResetHandler(e)}>
                        <i className="bi bi-arrow-counterclockwise"></i>            
                    </button>
                </div>
            
            </div>
            <div className='left'>
                <div className="labelArea">??????</div>
                <div className="contentArea">
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="short"
                    value="??????"
                    onClick={(e) => {
                        ClassificationFilterManager(e);
                    }}
                    />
                    <label htmlFor="short">??????</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="long"
                    value="??????"
                    onClick={(e) => {
                        ClassificationFilterManager(e);
                    }}
                    />
                    <label htmlFor="long">??????</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="ad"
                    value="??????"
                    onClick={(e) => {
                        ClassificationFilterManager(e);
                    }}
                    />
                    <label htmlFor="ad">??????</label>
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
                    value="??????"
                    onClick={(e) => {
                        ClassificationFilterManager(e);
                    }}
                    />
                    <label htmlFor="pictorial">??????</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="classEtc"
                    value="??????"
                    onClick={(e) => {
                        ClassificationFilterManager(e);
                    }}
                    />
                    <label htmlFor="classEtc">??????</label>
                </div>
                </div>
            </div>
            <div className='right'>
                <div className="labelArea">????????????</div>
                <div className="contentArea">
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="plan"
                    value="??????"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="plan">??????</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="edit"
                    value="??????"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="edit">??????</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="filming"
                    value="??????"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="filming">??????</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="light"
                    value="??????"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="light">??????</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="acoustic"
                    value="??????"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="acoustic">??????</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="voiceActor"
                    value="??????"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="voiceActor">??????</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="beauty"
                    value="??????"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="beauty">??????</label>
                </div>
                <div>
                    <input
                    className='filterInput'
                    type="checkbox"
                    id="fieldEtc"
                    value="??????"
                    onClick={(e) => {
                        FieldFilterManager(e);
                    }}
                    />
                    <label htmlFor="fieldEtc">??????</label>
                </div>
                </div>
            </div>
          </div>
        </Filter>
    )
}

export default PFFilter
