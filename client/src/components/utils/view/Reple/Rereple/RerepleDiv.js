import React, { useState, useEffect } from "react";
import axios from "axios";
import RerepleContent from "./RerepleContent.js";

function RerepleDiv(props) {
  const [AuthorCheck, setAuthorCheck] = useState(false);
  const [RerepleInfo, setRerepleInfo] = useState({});

  useEffect(() => {
    let body = {
      type: props.type,
      id: props.rerepleInfo._id,
    };

    axios.post("/api/util/rerepleGetAuther", body).then((response) => {
      if (response.data.success) {
        setRerepleInfo({ ...response.data.rerepleInfo });
        setAuthorCheck(true);
      } else {
        setAuthorCheck(false);
      }
    });
  }, []);

  return (
    <>
      {AuthorCheck ? (
        <RerepleContent
          rerepleInfo={RerepleInfo}
          repleInfo={props.repleInfo}
          type={props.type}
          postNum={props.postNum}
        />
      ) : null}
    </>
  );
}

export default RerepleDiv;
