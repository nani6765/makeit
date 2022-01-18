import React from "react";
import { TitleSection } from "../../../CSS/MyPortpolio/ProductionCSS";

function Title(props) {
  return (
    <TitleSection>
      <input type="text" placeholder="포트폴리오 제목" value={props.Titletext} onChange={(e) => props.setTitletext(e.currentTarget.value)}/>
    </TitleSection>
  );
}

export default Title;
