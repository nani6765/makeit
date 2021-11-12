import React, { useEffect } from 'react'
import { withRouter } from 'react-router';
import qs from 'qs';
import { StickyBarDiv } from "../../css/CommonCSS.js";

function StickyBar(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.URLQuery.subCategory]);
    
    return (
        <StickyBarDiv>
            <div className="category">
                {props.URLQuery.category}
            </div>
            <div className="subCategory">
                {
                    props.SubCategoryList.map((sub, idx) => {
                        return (
                            <p className={sub===props.URLQuery.subCategory ? "active" : null}
                              key={idx}
                              onClick={() => {
                                  props.URLQuery.subCategory = sub;
                                  props.URLQuery.sort="인기순";
                                  props.URLQuery.pIdx=0;
                                  props.history.push(`?${decodeURI(qs.stringify(props.URLQuery))}`);
                              }}
                            >{sub}</p>
                        );
                    })
                }
            </div>
        </StickyBarDiv>
    )
}

export default withRouter(StickyBar)
