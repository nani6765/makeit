import React from 'react';
import Avatar from "react-avatar";

function QuotationCard(props) {
    return (
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
              <p>• 예상 금액 : {props.quotation.price}</p>
              <p>• 예상 기간 : {props.quotation.deadline}</p>
              <p>• 평균 응답 시간 : 미구현?</p>
            </div>
          </div>
    )
}

export default QuotationCard
