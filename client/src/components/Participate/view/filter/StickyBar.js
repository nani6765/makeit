import React from 'react'

import { StickyBarDiv } from "../../css/ParticipateCSS.js";

function StickyBar(props) {
    return (
        <StickyBarDiv>
            <div className="category">
                {props.category}
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
