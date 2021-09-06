import React from "react";
import { FooterBtnDiv } from "../css/FPUtilsCSS";

function FooterBtnArea(props) {
  return (
    <FooterBtnDiv>
      <button className="save">임시저장</button>
      <button
        className="next"
        onClick={() => props.setCurrentProcess(props.NextStep)}
      >
        다음
      </button>
    </FooterBtnDiv>
  );
}

export default FooterBtnArea;
