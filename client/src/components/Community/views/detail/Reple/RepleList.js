import React, { useState, useEffect, useRef } from "react";
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
          <RepleContent
            key={idx}
            reple={reple}
            user={props.user}
            postInfo={props.postInfo}
          />
        );
      })}
    </RepleDiv>
  );
}

export default RepleList;
