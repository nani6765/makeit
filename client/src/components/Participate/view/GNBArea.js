import React from "react";

import { ReactComponent as Location } from "../css/img/로케이션.svg";
import { ReactComponent as FindingActor } from "../css/img/배우찾기.svg";
import { ReactComponent as FindingPartner } from "../css/img/파트너찾기.svg";
import { ReactComponent as InformPro } from "../css/img/프로알리기.svg";

function GNBArea(props) {
  const GNBList = [
    {
      icon: <FindingPartner />,
      text: <p>파트너찾기</p>,
      GNB: "파트너찾기",
    },
    {
      icon: <FindingActor />,
      text: <p>배우찾기</p>,
      GNB: "배우찾기",
    },
    {
      icon: <InformPro />,
      text: <p>프로알리기</p>,
      GNB: "프로알리기",
    },
    {
      icon: <Location />,
      text: <p>로케이션</p>,
      GNB: "로케이션",
    },
  ];

  return (
    <div className="GNBDiv">
      {GNBList.map((category, idx) => {
        return (
          <div key={idx} onClick={() => props.setGNB(`${category.GNB}`)}>
            {category.icon}
            {category.text}
          </div>
        );
      })}
    </div>
  );
}

export default GNBArea;
