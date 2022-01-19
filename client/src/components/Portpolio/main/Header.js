import React from "react";
import { useHistory } from "react-router";
import { MenuList, MenuItem } from "../CSS/PortpolioCSS.js";

import { ReactComponent as SearchIcon } from "../CSS/searchIcon.svg";

function Header(props) {
  let history = useHistory();

  const GNBList = [
    { 
      text: "포트폴리오 찾기",
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

  
  const ClickFunc = (gnb) => {
    if (gnb === "PF") {
      history.push(`?category=${gnb}&sort=인기순&pIdx=0`);
    } else if (gnb === "MP") {
      history.push(`?category=${gnb}&pIdx=0&subCategory=전체 목록`);
    } else {
      history.push(`?category=${gnb}&pIdx=0&subCategory=진행 중 프로젝트`);
    }
  };

  // const SearchHandler = (e) => {
  //   e.preventDefault();
  //   if (SearchTerm && !/\S/.test(SearchTerm)) {
  //     return;
  //   }
  //   history.push(`/search/participate?term=${SearchTerm}&pIdx=0&category=all`);
  // };

  return (
    <MenuList>
      <div className="menu">
        <ul>
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
            //value={SearchTerm}
            //onChange={(e) => setSearchTerm(e.currentTarget.value)}
            //onKeyDown={(e) => {
            //if (e.keyCode === 13) SearchHandler(e);
            //}}
          />
          <SearchIcon //onClick={(e) => SearchHandler(e)}
          />
        </div>
      </div>
    </MenuList>
  );
}

export default Header;
