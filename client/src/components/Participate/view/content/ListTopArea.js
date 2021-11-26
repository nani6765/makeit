import React, { useEffect } from "react";
import { useHistory, withRouter, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { ListTopAreaDiv } from "../../css/ParticipateCSS.js";
import qs from "qs";

function ListTopArea(props) {
  let history = useHistory();

  return (
    <ListTopAreaDiv>
      <Dropdown id="sort">
        <Dropdown.Toggle id="dropdown-basic">{props.URL.sort}</Dropdown.Toggle>
        <Dropdown.Menu id="dropdown-menu">
          <Dropdown.Item
            onClick={() => {
              let temp = props.URL;
              temp.sort = "인기순";
              temp.pIdx = 0;
              history.push(`?${decodeURI(qs.stringify(temp))}`);
            }}
            className={props.URL.sort === "인기순" ? "active" : null}
          >
            인기순
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              let temp = props.URL;
              temp.sort = "최신순";
              temp.pIdx = 0;
              history.push(`?${decodeURI(qs.stringify(temp))}`);
            }}
            className={props.URL.sort === "최신순" ? "active" : null}
          >
            최신순
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="upload">
        <Link
          to={{
            pathname: "/participate/upload",
            state: { category: props.category },
          }}
          className="submitBtn"
        >
          <button>게시하기</button>
        </Link>
      </div>
    </ListTopAreaDiv>
  );
}

export default withRouter(ListTopArea);
