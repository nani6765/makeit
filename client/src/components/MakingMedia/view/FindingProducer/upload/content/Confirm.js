import React, { useState } from "react";
import ContentHeadingArea from "../utils/ContentHeadingArea.js";
import FooterBtnArea from "../utils/FooterBtnArea.js";
import FPRule from "../../../../../utils/rule/FPRule.js";
import FAQ from "../utils/FAQ.js";
import { ConfirmDiv } from "../../../../css/FPUCSS.js";

function Confirm(props) {
  const [RuleFlag, setRuleFlag] = useState(false);

  const AddFAQ = () => {
    let temp = [...props.FAQList];
    temp.push({ q: "", a: "" });
    props.setFAQList([...temp]);
  };

  const CheckEmptyContent = () => {
    if (!props.EditandReprogress) {
      alert("수정 및 재진행 절차를 입력하세요.");
      return false;
    }
    return true;
  };

  return (
    <ConfirmDiv>
      <div className="confirm">
        <ContentHeadingArea HeadingTitle="수정 및 재진행" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={props.EditandReprogress}
          onChange={(e) => props.setEditandReprogress(e.currentTarget.value)}
        ></textarea>
      </div>
      <div className="cancel">
        <ContentHeadingArea HeadingTitle="취소 및 환불 규정" />
        <div className="content">
          <p>
            [영상제작 &gt; 제작자 탐색 &gt; 일반영상] 취소 및 환불 규정 보기
            {RuleFlag ? (
              <>
                <i
                  className="bi bi-caret-up"
                  onClick={() => setRuleFlag(false)}
                ></i>
                <FPRule />
              </>
            ) : (
              <i
                className="bi bi-caret-down"
                onClick={() => setRuleFlag(true)}
              ></i>
            )}
          </p>
        </div>
      </div>
      <div className="FAQ">
        <ContentHeadingArea HeadingTitle="FAQ" />
        {props.FAQList.map((content, idx) => {
          return (
            <FAQ
              key={idx}
              Idx={idx}
              FAQList={props.FAQList}
              setFAQList={props.setFAQList}
            />
          );
        })}
        <div className="btnArea">
          <button onClick={AddFAQ}>질문 및 답변 추가</button>
        </div>
      </div>
      <FooterBtnArea
        setCurrentProcess={props.setCurrentProcess}
        NextStep="완료"
        CheckEmptyContent={CheckEmptyContent}
        TempSaveHandler={props.TempSaveHandler}
        SubmitHandler={props.SubmitHandler}
        setCurrentProcess={props.setCurrentProcess}
      />
    </ConfirmDiv>
  );
}

export default Confirm;
