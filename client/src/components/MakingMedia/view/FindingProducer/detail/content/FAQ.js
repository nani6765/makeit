import React from "react";
import { FAQDiv, DetaulContentSubTitle } from "../../../../css/FPDCSS.js";

function FAQ(props) {
  return (
    <FAQDiv id="faq">
      <DetaulContentSubTitle>FAQ</DetaulContentSubTitle>
      {props.FAQList.map((faq, idx) => {
        return (
          <div className="faq" key={idx}>
            <div>
              <p className="heading">Q.</p>
              <p className="content">{faq.q}</p>
            </div>
            <div>
              <p className="heading">A.</p>
              <p className="content">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </FAQDiv>
  );
}

export default FAQ;
