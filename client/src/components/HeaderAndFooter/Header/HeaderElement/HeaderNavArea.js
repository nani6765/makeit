import React from "react";
import { HeaderNav } from "../../css/HeaderElement.js";

function HeaderNavArea() {
  return (
    <HeaderNav>
      <ul>
        <li>
          <a href="/landingPage">프로젝트</a>
        </li>
        <li>
          <a href="/landingPage">포트폴리오</a>
        </li>
        <li>
          <a href="/landingPage">영상제작</a>
        </li>
        <li>
          <a href="/community">커뮤니티</a>
        </li>
      </ul>
    </HeaderNav>
  );
}

export default HeaderNavArea;
