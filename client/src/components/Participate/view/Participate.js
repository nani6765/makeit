import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PartHeader, PartBody } from "../css/ParticipateCSS.js";

import GNBArea from "./GNBArea.js";
import FAList from "./list/FAList.js";
import FPList from "./list/FPList.js";
import IPList from "./list/IPList.js";
import LoList from "./list/LoList.js";

function Participate() {
  const user = useSelector((state) => state.user.userData);
  const [GNB, setGNB] = useState("파트너찾기");
  const SetContent = () => {
    // eslint-disable-next-line default-case
    switch (GNB) {
      case "파트너찾기":
        return <FPList user={user}/>;
      case "배우찾기":
        return <FAList user={user}/>;
      case "프로알리기":
        return <IPList user={user}/>;
      case "로케이션":
        return <LoList user={user}/>;
    }
  };
  return (
    <>
      <PartHeader>
        <div className="bannerDiv">
          <img src="./Img/CommunityBanner.png" alt="" />
        </div>
        <GNBArea GNB={GNB} setGNB={setGNB} />
      </PartHeader>
      <PartBody>{SetContent()}</PartBody>
    </>
  );
}

export default Participate;
