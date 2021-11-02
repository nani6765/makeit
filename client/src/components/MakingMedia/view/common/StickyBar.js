import React, { useEffect } from 'react'

import { StickyBarDiv } from "../../css/CommonCSS.js";

function StickyBar(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [props.SubCategory]);
    
    return (
        <StickyBarDiv>
            <div className="category">
                {props.Menu}
            </div>
            <div className="subCategory">
                {
                    props.SubCategoryList.map((sub, idx) => {
                        return (
                            <p className={sub===props.SubCategory ? "active" : null} key={idx} onClick={() => props.setSubCategory(sub)}>{sub}</p>
                        );
                    })
                }
            </div>
        </StickyBarDiv>
    )
}

export default StickyBar
