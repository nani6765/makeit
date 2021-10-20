import React from "react";
import UploadButton from "./UploadButton";
function FAFilter(props) {
  return (
    <div>
      <UploadButton category="FA" user={props.user}/>
    </div>
  );
}

export default FAFilter;
