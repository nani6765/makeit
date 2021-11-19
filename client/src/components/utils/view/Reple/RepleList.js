import React, { useState, useEffect } from "react";

import RepleContent from "./RepleContent.js";
import DeletedRepleDetail from "./DeletedRepleDetail.js";

import { RepleDiv } from "./RepleCSS.js";

function RepleList(props) {
  const [repleList, setrepleList] = useState(props.repleInfo);

  useEffect(() => {
    setrepleList(props.repleInfo);
  }, [props.repleInfo]);

  return (
    <RepleDiv>
      {repleList.map((reple, idx) => {
        return reple.isDeleted ? (
          <DeletedRepleDetail reple={reple} type={props.type} />
        ) : (
          <RepleContent
            key={idx}
            reple={reple}
            postInfo={props.postInfo}
            type={props.type}
            category={props.category}
          />
        );
      })}
    </RepleDiv>
  );
}

export default RepleList;
