import React from "react";
import { useHistory, withRouter, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { ListTopAreaDiv } from "../CSS/PortfolioFindCSS.js";
import qs from "qs";

function ListTopArea(props) {
  let history = useHistory();

  return (
    <ListTopAreaDiv>
      <Dropdown id="sort">
        <Dropdown.Toggle id="dropdown-basic">
          {props.URL.sort === "hot" ? "인기순" : "최신순"}
        </Dropdown.Toggle>
        <Dropdown.Menu id="dropdown-menu">
          <Dropdown.Item
            onClick={() => {
              let temp = props.URL;
              temp.sort = "hot";
              temp.pIdx = 0;
              history.push(`?${decodeURI(qs.stringify(temp))}`);
            }}
            className={props.URL.sort === "hot" ? "active" : null}
          >
            인기순
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              let temp = props.URL;
              temp.sort = "new";
              temp.pIdx = 0;
              history.push(`?${decodeURI(qs.stringify(temp))}`);
            }}
            className={props.URL.sort === "new" ? "active" : null}
          >
            최신순
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="upload">
        <Link
          to="/portfolio?category=MP&subCategory=전체 목록"
          className="submitBtn"
        >
          <button>게시하기</button>
        </Link>
      </div>
    </ListTopAreaDiv>
  );
}

export default withRouter(ListTopArea);
