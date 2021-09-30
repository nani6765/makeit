import React from "react";
import {
  FAQDiv,
  DetaulContentSubTitle,
} from "../../../../css/FindingProducerDetailCSS.js";

function FAQ(props) {
  return (
    <FAQDiv id="faq">
      <DetaulContentSubTitle>FAQ</DetaulContentSubTitle>
      {props.FAQList.map((faq, idx) => {
        return (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className="heading">Q.</p>
              <p className="content">{faq.q}</p>
            </div>
            <div>
              <p className="heading">A.</p>
              <p className="content">{faq.a}</p>
            </div>
          </>
        );
      })}
    </FAQDiv>
  );
}

export default FAQ;
