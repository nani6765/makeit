import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import FAUpload from "./form/FAUpload.js";
import FPUpload from "./form/FPUpload.js";
import IPUpload from "./form/IPUpload.js";
import LoUpload from "./form/LoUpload.js";

function ParticipateUpload(props) {
  const user = useSelector((state) => state.user.userData);
  const setContent = () => {
    switch (props.location.state.category) {
      case "FA":
        return <FAUpload user={user} />;
      case "FP":
        return <FPUpload user={user} />;
      case "IP":
        return <IPUpload user={user} />;
      case "Lo":
        return <LoUpload user={user} />;
      default:
        return <FPUpload user={user} />;
    }
  };

  return (
    <div>
      {
        user && setContent()
      }
    </div>
    );
}

export default ParticipateUpload;
