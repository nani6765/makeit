import React, { useState, useEffect } from "react";
import axios from "axios";
import RerepleContent from "./RerepleContent.js";

function RerepleDiv(props) {
  const [AuthorCheck, setAuthorCheck] = useState(false);
  const [RerepleInfo, setRerepleInfo] = useState({});

  useEffect(() => {
    axios
      .post("/api/community/rerepleGetAuther", {
        _id: props.rerepleInfo._id,
      })
      .then((response) => {
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
        <RerepleContent rerepleInfo={RerepleInfo} repleInfo={props.repleInfo} />
      ) : null}
    </>
  );
}

export default RerepleDiv;
