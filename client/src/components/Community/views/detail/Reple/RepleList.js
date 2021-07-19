import React, { useState, useEffect } from "react";
import { RepleDiv } from "../../../css/CommunityDetailElement.js";
import RepleContent from "./RepleContent.js";
import DeletedRepleDetail from "./DeletedRepleDetail.js";

function RepleList(props) {
  const [repleList, setrepleList] = useState(props.repleInfo);
  useEffect(() => {
    setrepleList(props.repleInfo);
  }, [props.repleInfo]);

  return (
    <RepleDiv>
      {repleList.map((reple, idx) => {
        return (
          reple.isDeleted ?
          <DeletedRepleDetail reple={reple}/> :
          <RepleContent key={idx} reple={reple} postInfo={props.postInfo} />
        );
      })}
    </RepleDiv>
  );
}

export default RepleList;
