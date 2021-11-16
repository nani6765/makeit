import React from "react";
import qs from "qs";
import { useHistory } from "react-router-dom";

import { MenuList, MenuItem } from "../css/ParticipateCSS.js";

import { ReactComponent as Location } from "../css/img/로케이션.svg";
import { ReactComponent as FindingActor } from "../css/img/배우찾기.svg";
import { ReactComponent as FindingPartner } from "../css/img/파트너찾기.svg";
import { ReactComponent as InformPro } from "../css/img/프로알리기.svg";

function GNBArea(props) {
  let history = useHistory();

  const GNBList = [
    {
      icon: <FindingPartner />,
      text: "파트너찾기",
      GNB: "FP",
    },
    {
      icon: <FindingActor />,
      text: "배우찾기",
      GNB: "FA",
    },
    {
      icon: <InformPro />,
      text: "프로알리기",
      GNB: "IP",
    },
    {
      icon: <Location />,
      text: "로케이션",
      GNB: "Lo",
    },
  ];

  const ClickFunc = (gnb) => {
    if (gnb === "FP" || gnb === "FA") {
      history.push(`?category=${gnb}&sort=hot&pIdx=0`);
    } else {
      history.push(`?category=${gnb}&sort=hot&pIdx=0&subCategory=전체`);
    }
  };

  return (
    <MenuList>
      {GNBList.map((category, idx) => {
        return (
          <MenuItem key={idx} onClick={() => ClickFunc(category.GNB)}>
            {category.icon}
            <p>{category.text}</p>
          </MenuItem>
        );
      })}
    </MenuList>
  );
}

export default GNBArea;
