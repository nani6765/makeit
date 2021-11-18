import React from "react";
import { withRouter } from "react-router-dom";
import { MenuList, MenuItem } from "../../css/CommonCSS.js";

function HeaderGNB(props) {
  const GNBList = [
    "영상 제작자 탐색",
    "영상 의뢰하기",
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
              onClick={() => {
                props.history.push(
                  `?category=${GNB}&subCategory=전체&sort=인기순&pIdx=0`
                );
              }}
            >
              <p className={props.URL.category === GNB ? "active" : null}>
                {GNB}
              </p>
            </MenuItem>
          );
        })}
      </MenuList>
    </>
  );
}

export default withRouter(HeaderGNB);
