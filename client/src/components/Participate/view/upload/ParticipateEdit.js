import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import FAEdit from "./form/FAEdit.js";
import FPEdit from "./form/FPEdit.js";
import IPEdit from "./form/IPEdit.js";
import LoEdit from "./form/LoEdit.js";

function ParticipateEdit(props) {
  const user = useSelector((state) => state.user.userData);
  const setContent = () => {
    switch (props.location.state.postInfo.type) {
      case "FA":
        return <FAEdit user={user} postInfo={props.history.location.state.postInfo} />;
      case "FP":
        return <FPEdit user={user} postInfo={props.history.location.state.postInfo} />;
      case "IP":
        return <IPEdit user={user} postInfo={props.history.location.state.postInfo} />;
      case "Lo":
        return <LoEdit user={user} postInfo={props.history.location.state.postInfo} />;
      default:
        return <FPEdit user={user} postInfo={props.history.location.state.postInfo} />;
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

export default withRouter(ParticipateEdit);
