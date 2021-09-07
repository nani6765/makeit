import React from 'react'

import { StickyBarDiv } from "../../css/CommonCSS.js";

function StickyBar(props) {
    return (
        <StickyBarDiv>
            <div className="category">
                {props.Menu}
            </div>
            <div className="subCategory">
                {
                    props.SubCategoryList.map((sub, idx) => {
                        let classN = "";
                        if(sub === props.SubCategory) {
                            classN = "active";
                        }
                        return (
                            <p className={classN} onClick={() => props.setSubCategory(sub)}>{sub}</p>
                        );
                    })
                }
            </div>
        </StickyBarDiv>
    )
}

export default StickyBar
