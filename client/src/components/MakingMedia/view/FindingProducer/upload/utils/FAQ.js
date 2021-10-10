import React from "react";
import { FAQDiv } from "../../../../css/FPUCSS.js";
function FAQ(props) {
  const ChangeQuestion = (e) => {
    let temp = [...props.FAQList];
    temp[props.Idx].q = e.currentTarget.value;
    props.setFAQList([...temp]);
  };

  const ChangeAnswer = (e) => {
    let temp = [...props.FAQList];
    temp[props.Idx].a = e.currentTarget.value;
    props.setFAQList([...temp]);
  };

  const DeleteFAQ = () => {
    let temp = [...props.FAQList];
    let removed = temp.splice(props.Idx, 1);
    props.setFAQList([...temp]);
  };

  return (
    <FAQDiv>
      <div className="content">
        <span>Q.</span>
        <input
          type="text"
          value={props.FAQList[props.Idx].q}
          onChange={(e) => ChangeQuestion(e)}
        />

        <span>A.</span>
        <input
          type="text"
          value={props.FAQList[props.Idx].a}
          onChange={(e) => ChangeAnswer(e)}
        />
      </div>
      <div>
        <i className="bi bi-trash" onClick={() => DeleteFAQ()}></i>
      </div>
    </FAQDiv>
  );
}

export default FAQ;
