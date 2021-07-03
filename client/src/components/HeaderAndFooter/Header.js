import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import {
  HeaderDiv,
  HeaderGrid,
  HeaderLogo,
  HeaderNav,
  HeaderSearch,
  HeaderLoginDiv,
  MobileHambuck,
  MobileSideBackDiv,
  MobileSlideDiv,
} from "./css/HeaderElement.js";
import MobileSlide from "./MobileSlide.js";
import useDocScroll from "./hooks/useDocScroll.js";
import Avatar from "react-avatar";
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
    axios.get("/api/user/logout").then((res) => {
      console.log(res.data);
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

          <HeaderSearch>
            <form action="/search" method="GET">
              <input type="text" placeholder="Search..." />
            </form>
          </HeaderSearch>

          <HeaderLoginDiv>
            {user.userData && !user.userData.isAuth ? (
              <Link to="/login">
                <button className="loginBtn">Login</button>
              </Link>
            ) : (
              <>
                <i className="bell bi bi-bell"></i>
                <Avatar
                  className="profile"
                  src={user.userData ? user.userData.avatar : "./test.png"}
                  size="35px"
                  round={true}
                />
              </>
            )}
          </HeaderLoginDiv>

          <MobileHambuck>
            <i className="bi bi-list" onClick={() => showSide()}></i>
          </MobileHambuck>
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
