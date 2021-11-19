import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { MenuList, MenuItem } from "../../css/CommonCSS.js";
import { ReactComponent as SearchIcon } from "../../css/Img/searchIcon.svg";
import qs from 'qs';

function HeaderGNB(props) {
  const GNBList = [
    "영상 제작자 탐색",
    "영상 의뢰하기",
    "제작 영상 알리기",
    "메이킷 페이 안내",
  ];

  const [SearchTerm, setSearchTerm] = useState("");

  const SearchHandler = (e) => {
    e.preventDefault();
     if (SearchTerm && !/\S/.test(SearchTerm)) {
       return;
     }
     let temp = qs.parse(props.URL);
     temp.searchTerm = SearchTerm.trim();
     if (!SearchTerm) {
       delete temp.searchTerm;
     }
     temp.pIdx = 0;
     let temp2 = qs.stringify(temp);
     props.history.push(`?${decodeURI(temp2)}`);
   };


  return (
    <>
      <MenuList>
        <ul>
          {GNBList.map((GNB, idx) => {
            return (
              <MenuItem
                key={idx}
                className={props.URL.category === GNB ? "active" : null}
                onClick={() => {
                  props.history.push(
                    `?category=${GNB}&subCategory=전체&sort=인기순&pIdx=0`
                  );
                }}
              >
                <p>{GNB}</p>
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
    </>
  );
}

export default withRouter(HeaderGNB);
