import React, { useState, useEffect } from "react";
import { RepleDiv } from "../../../css/CommunityDetailElement.js";
import RepleContent from "./RepleContent.js";

function RepleList(props) {
  const [repleList, setrepleList] = useState(props.repleInfo);
  useEffect(() => {
    setrepleList(props.repleInfo);
  }, [props.repleInfo]);

  return (
    <RepleDiv>
      {repleList.map((reple, idx) => {
        return (
          <RepleContent key={idx} reple={reple} postInfo={props.postInfo} />
        );
      })}
    </RepleDiv>
  );
}

export default RepleList;
