import React from "react";
import { IntroSection } from "../../../CSS/MyPortpolio/UploadCSS.js";

function Introduce(props) {
  return (
    <IntroSection>
      <label>소개 </label>
      <textarea
        value={props.ProdIntrodice}
        onChange={(e) => props.setProdIntroduce(e.currentTarget.value)}
      />
    </IntroSection>
  );
}

export default Introduce;
