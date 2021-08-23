import React, { useState, useEffect } from "react";

import RepleContent from "./RepleContent.js.js";
import DeletedRepleDetail from "./DeletedRepleDetail.js.js";

import { RepleDiv } from "../../../css/CommunityRepleCSS.js";

function RepleList(props) {
  const [repleList, setrepleList] = useState(props.repleInfo);
  useEffect(() => {
    setrepleList(props.repleInfo);
  }, [props.repleInfo]);

  return (
    <RepleDiv>
      {repleList.map((reple, idx) => {
        return reple.isDeleted ? (
          <DeletedRepleDetail reple={reple} />
        ) : (
          <RepleContent key={idx} reple={reple} postInfo={props.postInfo} />
        );
      })}
    </RepleDiv>
  );
}

export default RepleList;
