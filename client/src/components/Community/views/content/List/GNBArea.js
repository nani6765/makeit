import React, { useState } from "react";
import { useHistory, withRouter, Link } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

import qs from "qs";

import { GNBDiv, MenuItem, SortDiv } from "../../../css/CommunityListCSS.js";
import { ReactComponent as SearchIcon } from "../../../css/img/searchIcon.svg";

function GNBArea(props) {
  let history = useHistory();

  const GNBList = [
    "전체게시판",
    "자유게시판",
    "질문게시판",
    "홍보게시판",
    "건의함",
  ];

  const [SearchTerm, setSearchTerm] = useState("");

  const SearchHandler = (e) => {
    e.preventDefault();
    if (SearchTerm && !/\S/.test(SearchTerm)) {
      return;
    }
    history.push(
      `/search/community?term=${SearchTerm}&pIdx=0&category=전체게시판`
    );
  };

  const GNBClickFunc = (gnb) => {
    let temp = qs.parse(props.URL);
    temp.category = gnb;
    temp.pIdx = 0;
    temp.sort = "최신순";
    if (temp.searchTerm) {
      delete temp.searchTerm;
    }
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
  };

  return (
    <>
      <GNBDiv>
        <ul>
          {GNBList.map((category, idx) => {
            return (
              <MenuItem
                className={
                  qs.parse(props.URL).category === category ? "active" : null
                }
                key={idx}
                onClick={() => GNBClickFunc(category)}
              >
                {category}
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
      </GNBDiv>
      <SortDiv>
        <Dropdown id="sort">
          <Dropdown.Toggle id="dropdown-basic">
            {qs.parse(props.URL).sort}
          </Dropdown.Toggle>
          <Dropdown.Menu id="dropdown-menu">
            <Dropdown.Item
              onClick={() => {
                let temp = qs.parse(props.URL);
                temp.sort = "인기순";
                temp.pIdx = 0;
                history.push(`?${decodeURI(qs.stringify(temp))}`);
              }}
              className={
                qs.parse(props.URL).sort === "인기순" ? "active" : null
              }
            >
              인기순
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                let temp = qs.parse(props.URL);
                temp.sort = "최신순";
                temp.pIdx = 0;
                history.push(`?${decodeURI(qs.stringify(temp))}`);
              }}
              className={
                qs.parse(props.URL).sort === "최신순" ? "active" : null
              }
            >
              최신순
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="upload">
          <Link
            to={{
              pathname: "/community/upload/",
              state: { category: qs.parse(props.URL).category },
            }}
          >
            <button>글쓰기</button>
          </Link>
        </div>
      </SortDiv>
    </>
  );
}

export default withRouter(GNBArea);
