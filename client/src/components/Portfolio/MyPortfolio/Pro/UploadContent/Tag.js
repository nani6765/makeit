import React, { useState } from "react";
import { TagSection } from "../../../CSS/MyPortpolio/UploadCSS.js";

function Tag(props) {
  const [TagElement, setTagElement] = useState("");

  const TagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let temp = [...props.TagArr, TagElement];
      props.setTagArr(temp);
      setTagElement("");
    }
  };

  return (
    <TagSection>
      <label>관련 태그</label>
      <div>
        {props.TagArr.map((text, idx) => {
          return <p key={idx}>{text}</p>;
        })}
        <input
          type="text"
          value={TagElement}
          onChange={(e) => setTagElement(e.currentTarget.value)}
          onKeyPress={TagKeyDown}
        />
      </div>
    </TagSection>
  );
}

export default Tag;
