import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderGNB from "./view/common/HeaderGNB";
import FindingProducer from "./view/FindingProducer/FindingProducer.js";
import RequestVideo from "./view/RequestVideo/RequestVideo.js";
import { MakingDiv, DescriptionDiv } from "./css/CommonCSS.js";

function MakingMedia() {
  const user = useSelector((state) => state.user.userData);
  useEffect(() => {
    console.log("user : ", user);
  }, []);

  const [Menu, setMenu] = useState("영상 제작자 탐색");

  const setContent = () => {
    switch (Menu) {
      case "영상 제작자 탐색":
        return <FindingProducer Menu={Menu} user={user} />;

      case "영상 의뢰하기":
        return <RequestVideo Menu={Menu} user={user} />;
        
      default:
        break;
    }
  };

  return (
    <>
      <DescriptionDiv>
        영상 제작에 적합한 업체 혹은 프로를 찾아보거나,
        <br />
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
