import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { HeaderNav } from "../../css/HeaderElement.js";

function HeaderNavArea(props) {

  useEffect(() => {
    console.log(props.history);

  }, []);

  return (
    <HeaderNav>
      <ul>
        {/*
          <li>
            <Link to="/landingPage">프로젝트</Link>
          </li>
          */}
        <li>
          <Link to={`/making?category=영상 제작자 탐색&subCategory=전체&sort=인기순&pIdx=0`} className={props.history.location.pathname==="/making" && "active"}>영상제작</Link>
        </li>
        <li>
          <Link to="/participate" className={props.history.location.pathname==="/participate" && "active"}>영상참여</Link>
        </li>
        <li>
          <Link to="/landingPage" className={props.history.location.pathname==="/portfolio" && "active"}>포트폴리오</Link>
        </li>
        <li>
          <Link to="/community" className={props.history.location.pathname==="/community" && "active"}>커뮤니티</Link>
        </li>
      </ul>
    </HeaderNav>
  );
}

export default withRouter(HeaderNavArea);
