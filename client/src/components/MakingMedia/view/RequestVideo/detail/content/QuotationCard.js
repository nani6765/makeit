import React from 'react';
import Avatar from "react-avatar";
import { InfoDiv } from "../../../../css/RVDCSS.js";

function QuotationCard(props) {
    return (
        <InfoDiv
          onClick={() => {
            props.showDetail(props.idx);
          }}
        >
          <div
            className={props.containerCN}
          >
            <Avatar
              src={props.quotation.auther.photoURL}
              size="70"
              round={true}
              style={{
                border: "1px solid #c6c6c6",
                display: "block",
                margin: "0 auto",
              }}
            />
            <p>
              {props.quotation.auther.displayName}
              <i className="bi bi-heart"></i>
            </p>
            <p className="quotationTitle title">
              {props.quotation.oneLineIntroduce}
            </p>
            <div className="filter">
              <p>• 예상 금액 : {quotation.price}</p>
              <p>• 예상 기간 : {quotation.deadline}</p>
              <p>• 평균 응답 시간 : 미구현?</p>
            </div>
          </div>
        </InfoDiv>
    )
}

export default QuotationCard
