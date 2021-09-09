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
      <button className="save" onClick={() => props.TempSaveHandler()}>임시저장</button>
      {props.NextStep === "완료" ? (
        <button
          className="next"
          onClick={() => {
            if(props.CheckEmptyContent()) {
              props.SubmitHandler();
            }
          }}
        >
          완료
        </button>
      ) : (
      <button
        className="next"
        onClick={() => nextHandler()}
      >
        다음
      </button>
      )}
    </FooterBtnDiv>
  );
}

export default FooterBtnArea;
