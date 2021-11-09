import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { PartHeader, PartBody } from "../css/ParticipateCSS.js";

import GNBArea from "./GNBArea.js";
import FAList from "./list/FAList.js";
import FPList from "./list/FPList.js";
import IPList from "./list/IPList.js";
import LoList from "./list/LoList.js";

function Participate(props) {
  const user = useSelector((state) => state.user.userData);
  const [GNB, setGNB] = useState("파트너찾기");
  const [Sort, setSort] = useState("인기순");

  const GNBObj = {
    "FA": "배우찾기",
    "FP": "파트너찾기",
    "IP": "프로알리기",
    "Lo": "로케이션",
  }

  const SetContent = () => {
    // eslint-disable-next-line default-case
    switch (GNB) {
      case "파트너찾기":
        return <FPList user={user} Sort={Sort} />;
      case "배우찾기":
        return <FAList user={user} Sort={Sort} />;
      case "프로알리기":
        return <IPList user={user} Sort={Sort} />;
      case "로케이션":
        return <LoList user={user} Sort={Sort} />;
    }
  };

  useEffect(() => {
    if(props.history.location.state !== undefined) {
      setGNB(GNBObj[props.history.location.state.category]);
    }
  }, []);

  useEffect(() => {
    setSort("인기순");
  }, [GNB]);

  return (
    <>
      <PartHeader>
        <div className="bannerDiv">
          <img src="./Img/CommunityBanner.png" alt="" />
        </div>
        <GNBArea GNB={GNB} setGNB={setGNB} />
        <div className="category">
          <p>{GNB}</p>
          <div className="sorting">
            <p className={Sort==="인기순" ? "active" : null} onClick={() => {setSort("인기순")}}>인기순</p>
            <p className={Sort==="최신순" ? "active" : null} onClick={() => {setSort("최신순")}}>최신순</p>
          </div>
        </div>
      </PartHeader>
      <PartBody>{SetContent()}</PartBody>
    </>
  );
}

export default Participate;
