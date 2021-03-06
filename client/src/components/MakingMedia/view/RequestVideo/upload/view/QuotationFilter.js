import React from "react";
import Select from "react-select";

import { QUFilterDiv } from "../../../../css/RVUCSS.js";

function QuotationFilter(props) {
  const DeadlineArr = [
    { value: "1주 이내", label: "1주 이내" },
    { value: "2주", label: "2주" },
    { value: "3주", label: "3주" },
    { value: "한달 이상", label: "한달 이상" },
  ];

  return (
    <QUFilterDiv>
      <label className="deadlineLabel">예상 기간</label>
      <Select
        className="deadline"
        options={DeadlineArr}
        defaultValue={DeadlineArr[0]}
        placeholder="예상 기간"
        blurInputOnSelect="true"
        menuShouldBlockScroll="true"
        onChange={(e) => props.setDeadline(e.value)}
      />
      <label className="priceLabel">예상 금액</label>
      <div className="price">
        약
        <input
          type="number"
          min="0"
          placeholder={props.Price}
          onChange={(e) => props.setPrice(e.currentTarget.value)}
        />
        원
      </div>
      <label className="portfolioLabel">포트폴리오 선택</label>
      <div className="portfolio">미구현이오</div>
    </QUFilterDiv>
  );
}

export default QuotationFilter;
