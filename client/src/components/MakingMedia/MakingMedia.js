import React, { useState } from "react";
import HeaderGNB from "./view/common/HeaderGNB";
import FindingProducer from "./view/FindingProducer/FindingProducer.js";
import { MakingDiv } from "./css/CommonCSS.js";

function MakingMedia() {
  const [Menu, setMenu] = useState("영상 제작자 탐색");

  const setContent = () => {
    switch (Menu) {
      case "영상 제작자 탐색":
        return <FindingProducer />;

      default:
        break;
    }
  };

  return (
    <MakingDiv>
      <HeaderGNB Menu={Menu} setMenu={setMenu} />
      {setContent()}
    </MakingDiv>
  );
}

export default MakingMedia;
