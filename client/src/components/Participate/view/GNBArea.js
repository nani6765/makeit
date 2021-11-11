import React from "react";
import qs from "qs";
import { useHistory } from "react-router-dom";

import { ReactComponent as Location } from "../css/img/로케이션.svg";
import { ReactComponent as FindingActor } from "../css/img/배우찾기.svg";
import { ReactComponent as FindingPartner } from "../css/img/파트너찾기.svg";
import { ReactComponent as InformPro } from "../css/img/프로알리기.svg";

function GNBArea(props) {
  let history = useHistory();

  const GNBList = [
    {
      icon: <FindingPartner />,
      text: <p>파트너찾기</p>,
      GNB: "FP",
    },
    {
      icon: <FindingActor />,
      text: <p>배우찾기</p>,
      GNB: "FA",
    },
    {
      icon: <InformPro />,
      text: <p>프로알리기</p>,
      GNB: "IP",
    },
    {
      icon: <Location />,
      text: <p>로케이션</p>,
      GNB: "Lo",
    },
  ];

  const ClickFunc = (gnb) => {
    console.log(history.location.search);
    history.push(`?category=${gnb}&sort=hot&pIdx=0`);
  };

  return (
    <div className="GNBDiv">
      {GNBList.map((category, idx) => {
        return (
          <div key={idx} onClick={() => ClickFunc(category.GNB)}>
            {category.icon}
            {category.text}
          </div>
        );
      })}
    </div>
  );
}

export default GNBArea;
