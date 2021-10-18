import React, { useState, useEffect } from "react";

import FAUpload from "./form/FAUpload.js";
import FPUpload from "./form/FPUpload.js";
import IPUpload from "./form/IPUpload.js";
import LoUpload from "./form/LoUpload.js";

function ParticipateUpload(props) {
  const setContent = () => {
    switch (props.location.state.category) {
      case "FA":
        return <FAUpload />;
      case "FP":
        return <FPUpload />;
      case "IP":
        return <IPUpload />;
      case "Lo":
        return <LoUpload />;
      default:
        return <FPUpload />;
    }
  };

  return <div>{setContent()}</div>;
}

export default ParticipateUpload;
