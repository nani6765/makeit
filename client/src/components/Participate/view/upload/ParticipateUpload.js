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
      case "배우찾기":
        return <FAUpload user={user} />;
      case "파트너찾기":
        return <FPUpload user={user} />;
      case "프로알리기":
        return <IPUpload user={user} />;
      case "로케이션":
        return <LoUpload user={user} />;
      default:
        return <FPUpload user={user} />;
    }
  };

  useEffect(() => {
    if(!user) {
      props.history.push("/login");
    }
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
