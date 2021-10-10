import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router";

import { PostUploadDiv } from "../css/CommunityFormCSS.js";

import UpdateFrorm from "../../utils/view/Reple/Form/RepleEditForm.js";

function PostEdit(props) {
  const [PostInfo, setPostInfo] = useState({ checkPosition: 0 });
  const [UserInfo, setUserInfo] = useState("");

  const user = useSelector((state) => state.user);
  let history = useHistory();

  useEffect(() => {
    if (props.location.state === undefined) {
      return history.push("/community");
    } else {
      if (props.location.state.postInfo.auther.uid != user.userData.uid) {
        return history.push("/community");
      } else {
        setPostInfo(props.location.state.postInfo);
        setUserInfo(user.userData);
      }
    }
  }, []);

  return (
    <PostUploadDiv>
      {PostInfo.checkPosition != "undefined" && (
        <UpdateFrorm PostInfo={PostInfo} />
      )}
    </PostUploadDiv>
  );
}

export default withRouter(PostEdit);
