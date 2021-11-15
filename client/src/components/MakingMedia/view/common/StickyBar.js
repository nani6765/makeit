import React, { useEffect } from 'react'
import { withRouter } from 'react-router';
import qs from 'qs';
import { StickyBarDiv } from "../../css/CommonCSS.js";

function StickyBar(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.URL.subCategory]);
    
    return (
        <StickyBarDiv>
            <div className="category">
                {props.URL.category}
            </div>
            <div className="subCategory">
                {
                    props.SubCategoryList.map((sub, idx) => {
                        return (
                            <p className={sub===props.URL.subCategory ? "active" : null}
                              key={idx}
                              onClick={() => {
                                  props.URL.subCategory = sub;
                                  props.URL.sort="인기순";
                                  props.URL.pIdx=0;
                                  props.history.push(`?${decodeURI(qs.stringify(props.URL))}`);
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
