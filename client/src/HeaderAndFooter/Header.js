import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderDiv,
  HeaderGrid,
  HeaderLogo,
  HeaderNav,
  HeaderSearch,
  HeaderLogin,
  MobileSearch,
  MobileHambuck,
  MobileBell,
  MobileProfile,
  MobileSideBackDiv,
  MobileSideDiv,
} from "./css/HeaderElement.js";
import useDocScroll from "./hooks/useDocScroll.js";
import "./css/header.css";
import "./css/animation.css";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function Header() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocScroll((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? "shadow" : "";
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  function showSide() {
    var sideBackDiv = document.querySelector(".MobileSideBack");
    var sideBar = document.querySelector(".MobileSideBar");
    sideBackDiv.style.display = "block";
    sideBar.classList.remove("slideOut");
    sideBar.classList.add("slideIn");
    setTimeout(() => {
      sideBar.style.left = "0";
    }, 450);

    console.log(sideBar);
  }

  function hideSide() {
    var sideBackDiv = document.querySelector(".MobileSideBack");
    var sideBar = document.querySelector(".MobileSideBar");
    sideBar.classList.remove("slideIn");
    sideBar.classList.add("slideOut");
    setTimeout(() => {
      sideBar.style.left = "-80vw";
      sideBackDiv.style.display = "none";
    }, 450);
    console.log(sideBar);
  }

  return (
    <>
      <HeaderDiv className={`header ${shadowStyle} ${hiddenStyle}`}>
        <HeaderGrid>
          <HeaderLogo>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/Img/logo.png"}
                alt="MainLogo"
              />
            </Link>
          </HeaderLogo>
          <HeaderNav>
            <ul>
              <li>
                <a href="/">프로젝트</a>
              </li>
              <li>
                <a href="/">포트폴리오</a>
              </li>
              <li>
                <a href="/">영상제작</a>
              </li>
              <li>
                <a href="/">커뮤니티</a>
              </li>
            </ul>
          </HeaderNav>
          <HeaderSearch>
            <div>
              <form action="/search" method="GET">
                <input type="text" placeholder="Search..." />
              </form>
            </div>
          </HeaderSearch>
          <HeaderLogin>
            <div>
              <Link to="/login">
                <button>login</button>
              </Link>
            </div>
          </HeaderLogin>

          <MobileSearch>
            <i className="bi bi-search"></i>
          </MobileSearch>
          <MobileHambuck>
            <i className="bi bi-list" onClick={() => showSide()}></i>
          </MobileHambuck>

          <MobileBell>
            <i className="bi bi-bell"></i>
          </MobileBell>
          <MobileProfile>
            <i className="bi bi-person-circle"></i>
          </MobileProfile>
        </HeaderGrid>
      </HeaderDiv>
      <MobileSideBackDiv
        className="MobileSideBack"
        onClick={() => hideSide()}
      />
      <MobileSideDiv className="MobileSideBar"></MobileSideDiv>
    </>
  );
}

export default Header;
