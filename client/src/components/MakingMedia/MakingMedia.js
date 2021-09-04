import React, { useState } from "react";
import HeaderGNB from "./view/common/HeaderGNB";
import FindingProducer from "./view/FindingProducer/FindingProducer.js";
import { MakingDiv, DescriptionDiv } from "./css/CommonCSS.js";

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
    <>
    <DescriptionDiv>
      영상 제작에 적합한 업체 혹은 프로를 찾아보거나,<br />
      영상을 의뢰해서 업체들과 프로에게 견적을 받아보세요!
    </DescriptionDiv>
    <MakingDiv>
      <HeaderGNB Menu={Menu} setMenu={setMenu} />
      {setContent()}
    </MakingDiv>
    </>
  );
}

export default MakingMedia;
