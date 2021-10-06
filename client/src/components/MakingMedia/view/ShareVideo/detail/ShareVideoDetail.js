import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

import ShareVideoPost from "./Content/ShareVideoPost.js";

function ShareVideoDetail(props) {
  const user = useSelector((state) => state.user.userData);
  const [PostInfo, setPostInfo] = useState({});

  useEffect(() => {
    let body = {
      url: props.match.params.url,
    };

    axios
      .post("/api/making/shareVideo/getPostDetail", body)
      .then((response) => {
        if (response.data.success) {
          setPostInfo(response.data.post);
        } else {
          console.log("share Video get Post Detail Error", response.data.err);
        }
      });
  }, []);

  return (
    <div>
      {PostInfo.url != undefined && <ShareVideoPost PostInfo={PostInfo} />}
    </div>
  );
}

export default ShareVideoDetail;
