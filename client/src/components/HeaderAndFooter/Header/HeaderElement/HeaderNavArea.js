import React from "react";
import { Link, withRouter } from "react-router-dom";
import { HeaderNav } from "../../css/HeaderElement.js";

function HeaderNavArea() {
  return (
    <HeaderNav>
      <ul>
        <li>
          <Link to="/landingPage">프로젝트</Link>
        </li>
        <li>
          <Link to="/landingPage">포트폴리오</Link>
        </li>
        <li>
          <Link to="/landingPage">영상제작</Link>
        </li>
        <li>
          <Link to="/community">커뮤니티</Link>
        </li>
      </ul>
    </HeaderNav>
  );
}

export default withRouter(HeaderNavArea);
