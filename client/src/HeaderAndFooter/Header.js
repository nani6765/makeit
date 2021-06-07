import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
  MobileSlideDiv,
} from "./css/HeaderElement.js";
import MobileSlide from "./MobileSlide.js";
import { withRouter } from "react-router-dom";
import useDocScroll from "./hooks/useDocScroll.js";
import "./css/header.css";
import "./css/animation.css";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useSelector } from "react-redux";

function Header(props) {
  const user = useSelector((state) => state.user);

  //scroll function
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

  const logoutHandler = () => {
    axios.get("api/user/logout").then((res) => {
      if (res.data.success) {
        props.history.push("/");
        window.location.reload();
      } else {
        alert("로그아웃 하는 데 실패했습니다.");
      }
    });
  };

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
                <a href="/community">커뮤니티</a>
              </li>
            </ul>
          </HeaderNav>
          <HeaderSearch>
            <form action="/search" method="GET">
              <input type="text" placeholder="Search..." />
            </form>
          </HeaderSearch>
          <HeaderLogin>
            <div>
              {user.userData && !user.userData.isAuth ? (
                <Link to="/login">
                  <button>login</button>
                </Link>
              ) : (
                <button onClick={() => logoutHandler()}>logout</button>
              )}
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
            {user.userData && !user.userData.isAuth ? (
              <Link to="/login">
                <i className="bi bi-person-circle"></i>
              </Link>
            ) : (
              <Link to="MyPage">
                <i className="bi bi-person-circle"></i>
              </Link>
            )}
          </MobileProfile>
        </HeaderGrid>
      </HeaderDiv>
      <MobileSideBackDiv
        className="MobileSideBack"
        onClick={() => hideSide()}
      />
      <MobileSlideDiv className="MobileSideBar">
        <MobileSlide />
      </MobileSlideDiv>
    </>
  );
}

export default withRouter(Header);
