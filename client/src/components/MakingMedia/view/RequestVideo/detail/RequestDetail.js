import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import RequestDetailContent from "./content/RequestDetailContent.js";
import Quotation from "./content/Quotation.js";
import NoQuotation from "./content/NoQuotation.js";
import { DetailDiv } from "./css/RVCSS.js";

import axios from "axios";

function RequestDetail(props) {
  const user = useSelector((state) => state.user.userData);
  const [PostInfo, setPostInfo] = useState({});

  useEffect(() => {
    let body = {
      url: props.match.params.url,
    };

    axios
      .post("/api/making/requestVideo/getPostDetail", body)
      .then((response) => {
        if (response.data.success) {
          setPostInfo(response.data.post);
        } else {
          console.log("request Video get Post Detail Error", response.data.err);
        }
      });
  }, []);

  return (
    <DetailDiv>
      {PostInfo.url !== undefined && (
        <RequestDetailContent PostInfo={PostInfo} user={user} />
      )}
      {<NoQuotation />}
    </DetailDiv>
  );
}

export default RequestDetail;
