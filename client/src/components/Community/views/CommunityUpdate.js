import React, { useState, useEffect } from "react";
import { UploadDiv } from "../css/CommunityElement.js";
import UpdateFrorm from "./update/UpdateForm.js";
import axios from "axios";
import MobileFooter from "../../HeaderAndFooter/MobileFooter.js";

function CommunityUpdate(props) {
  const [PostInfo, setPostInfo] = useState({ checkPosition: 0 });
  const [UserInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (props.location.state === undefined) {
      return props.history.push("/community");
    } else {
      if (props.location.state.postInfo.auther._id != props.user.userData._id) {
        return props.history.push("/community");
      } else {
        setPostInfo(props.location.state.postInfo);
        setUserInfo(props.user.userData);
      }
    }
  }, []);
  return (
    <>
      <UploadDiv>
        {PostInfo.checkPosition != "undefined" ? (
          <UpdateFrorm PostInfo={PostInfo} />
        ) : null}
      </UploadDiv>
    </>
  );
}

export default CommunityUpdate;
