import React from "react";
import { MenuList, MenuItem } from "../../css/CommonCSS.js";

function HeaderGNB(props) {
  const GNBList = [
    "영상 제작자 탐색",
    "양상 의뢰하기",
    "제작 영상 알리기",
    "메이킷 페이 안내",
  ];

  return (
    <>
      <MenuList>
        {GNBList.map((GNB, idx) => {
          return (
            <MenuItem
              key={idx}
              className={GNB === props.Menu ? "active" : null}
              onClick={() => props.setMenu(GNB)}
            >
              {GNB}
            </MenuItem>
          );
        })}
      </MenuList>
    </>
  );
}

export default HeaderGNB;
