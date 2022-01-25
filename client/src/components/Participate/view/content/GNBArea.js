import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { MenuList, MenuItem } from "../../css/ParticipateCSS.js";
import { ReactComponent as SearchIcon } from "../../css/img/searchIcon.svg";

function GNBArea(props) {
  let history = useHistory();
  const [SearchTerm, setSearchTerm] = useState("");

  const GNBList = [
    {
      text: "파트너찾기",
      GNB: "FP",
    },
    {
      text: "배우찾기",
      GNB: "FA",
    },
    {
      text: "프로알리기",
      GNB: "IP",
    },
    {
      text: "로케이션",
      GNB: "Lo",
    },
  ];

  const ClickFunc = (gnb) => {
    if (gnb === "FP" || gnb === "FA") {
      history.push(`?category=${gnb}&sort=인기순&pIdx=0`);
    } else {
      history.push(`?category=${gnb}&sort=인기순&pIdx=0&subCategory=전체`);
    }
  };

  const SearchHandler = (e) => {
    e.preventDefault();
    if (SearchTerm && !/\S/.test(SearchTerm)) {
      return;
    }
    history.push(`/search/participate?term=${SearchTerm}&pIdx=0&category=all`);
  };

  return (
    <MenuList>
      <ul style={{ marginBottom: "0px" }}>
        {GNBList.map((category, idx) => {
          return (
            <MenuItem
              key={idx}
              className={category.GNB === props.URL.category ? "active" : null}
              onClick={() => ClickFunc(category.GNB)}
            >
              <p>{category.text}</p>
            </MenuItem>
          );
        })}
      </ul>
      <div className="search">
        <input
          type="text"
          placeholder="검색하기"
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) SearchHandler(e);
          }}
        />
        <SearchIcon onClick={(e) => SearchHandler(e)} />
      </div>
    </MenuList>
  );
}

export default GNBArea;
