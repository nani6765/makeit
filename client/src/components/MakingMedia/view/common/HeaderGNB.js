import React from "react";
import { withRouter } from "react-router-dom";
import qs from 'qs';
import { ReactComponent as FindingProducer } from "../../css/Img/제작자탐색.svg";
import { ReactComponent as RequestVideo } from "../../css/Img/의뢰하기.svg";
import { ReactComponent as ShareVideo } from "../../css/Img/영상알리기.svg";
import { ReactComponent as MakeitPay } from "../../css/Img/메이킷페이.svg";
import { MenuList, MenuItem } from "../../css/CommonCSS.js";

function HeaderGNB(props) {
  const GNBList = [
    {
      label: "영상 제작자 탐색",
      icon: <FindingProducer />
    },
    {
      label: "영상 의뢰하기",
      icon: <RequestVideo />
    },
    {
      label: "제작 영상 알리기",
      icon: <ShareVideo />
    },
    {
      label: "메이킷 페이 안내",
      icon: <MakeitPay />
    },
  ];

  return (
    <>
      <MenuList>
        {GNBList.map((GNB, idx) => {
          return (
            <MenuItem
              key={idx}
              onClick={() => {
                props.URLQuery.category = GNB.label;
                props.URLQuery.pIdx = 0;
                props.URLQuery.sort="인기순";
                if(props.URLQuery.searchTerm) {
                  delete props.URLQuery.searchTerm;
                }
                props.history.push(`?${decodeURI(qs.stringify(props.URLQuery))}`);
              }}
            >
              {GNB.icon}
              <p>{GNB.label}</p>
            </MenuItem>
          );
        })}
      </MenuList>
    </>
  );
}

export default withRouter(HeaderGNB);
