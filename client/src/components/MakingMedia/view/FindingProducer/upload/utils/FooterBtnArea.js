import React from "react";
import { FooterBtnDiv } from "../css/FPUtilsCSS";

function FooterBtnArea(props) {
  const nextHandler = () => {
    if (props.CheckEmptyContent()) {
      props.setCurrentProcess(props.NextStep);
    }
  };
  return (
    <FooterBtnDiv>
      <button className="save">임시저장</button>
      <button className="next" onClick={() => nextHandler()}>
        다음
      </button>
    </FooterBtnDiv>
  );
}

export default FooterBtnArea;
