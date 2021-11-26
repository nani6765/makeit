import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
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

  useEffect(() => {
    if(!user) {
      props.history.push("/login");
    }
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      {
        user && setContent()
      }
    </div>
    );
}

export default withRouter(ParticipateUpload);
