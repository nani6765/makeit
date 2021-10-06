import React, { useState } from 'react';
import Select from "react-select";

import { FilterDiv } from "../css/QuotationUploadCSS.js";

function QuotationFilter(props) {
    var DeadlineArr = ["1주 이내", "2주", "3주", "한달 이상"];

    return (
        <FilterDiv>
            <label>예상 기간</label>
            <div className="deadline">
                <Select
                className="deadlineList"
                options={DeadlineArr}
                defaultValue={DeadlineArr[0]}
                placeholder="예상 기간"
                blurInputOnSelect="true"
                menuShouldBlockScroll="true"
                onChange={(e) => props.setCategory(e.value)}
                />
            </div>
        </FilterDiv>
    )
}

export default QuotationFilter
