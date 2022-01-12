import React from "react";
import { MenuList, MenuItem } from "../CSS/PortpolioCSS.js";

import { ReactComponent as SearchIcon } from "../CSS/searchIcon.svg";

function Header(props) {
  const GNBList = [
    {
      text: "포트폴리오찾기",
      GNB: "PF",
    },
    {
      text: "나의 포트폴리오",
      GNB: "MP",
    },
    {
      text: "프로젝트",
      GNB: "Pr",
    },
  ];

  /*
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
  */

  return (
    <MenuList>
      <ul>
        {GNBList.map((category, idx) => {
          return (
            <MenuItem
              key={idx}
              //className={category.GNB === props.URL.category ? "active" : null}
              //onClick={() => ClickFunc(category.GNB)}
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
          //value={SearchTerm}
          //onChange={(e) => setSearchTerm(e.currentTarget.value)}
          //onKeyDown={(e) => {
          //if (e.keyCode === 13) SearchHandler(e);
          //}}
        />
        <SearchIcon //onClick={(e) => SearchHandler(e)}
        />
      </div>
    </MenuList>
  );
}

export default Header;
