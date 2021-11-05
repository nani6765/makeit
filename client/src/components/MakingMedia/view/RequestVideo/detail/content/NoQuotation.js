import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as SurprisingImg } from "../../../../css/Img/Surprising.svg";
import {
  LinkCSS,
  QuotationDiv,
  NoQuotationDiv,
} from "../../../../css/RVDCSS.js";

function NoQuotation(props) {
  const user = useSelector((state) => state.user.userData);

  return (
    <QuotationDiv>
      <p className="title">업체 견적</p>
      <NoQuotationDiv>
        <SurprisingImg />
        <p>아무도 견적을 등록하지 않았어요!</p>
        {user != null
          ? user.uid !== props.auther && (
            <Link
              to={{
                pathname: "/making/quotationUpload",
                state: { url: props.url },
              }}
              css={LinkCSS}
            >
              <button>첫 견적 등록하기</button>
            </Link>
          ) : null}
      </NoQuotationDiv>
    </QuotationDiv>
  );
}

export default NoQuotation;
