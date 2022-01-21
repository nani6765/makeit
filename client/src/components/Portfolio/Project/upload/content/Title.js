import React from "react";
import { TitleSection } from "../../../CSS/Project/ProjectUploadCSS";

function Title(props) {
  return (
    <TitleSection>
      <input
        type="text"
        value={props.TitleText}
        onChange={(e) => props.setTitleText(e.currentTarget.value)}
        placeholder="프로젝트 제목"
      />
    </TitleSection>
  );
}

export default Title;
