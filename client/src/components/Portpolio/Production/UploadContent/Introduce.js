import React from "react";
import { IntroSection } from "../ProductionCSS.js";

function Introduce(props) {
  return (
    <IntroSection>
      <label>소개 </label>
      <textarea
        value={props.ProIntrodice}
        onChange={(e) => props.setProIntroduce(e.currentTarget.value)}
      />
    </IntroSection>
  );
}

export default Introduce;
