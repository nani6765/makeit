import React from "react";
import { ContentHeading } from "../../../../css/FPUCSS.js";

function ContentHeadingArea(props) {
  return (
    <ContentHeading>
      <h1>{props.HeadingTitle}</h1>
      <hr />
    </ContentHeading>
  );
}

export default ContentHeadingArea;
