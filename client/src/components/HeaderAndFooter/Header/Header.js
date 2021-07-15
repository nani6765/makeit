import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "react-avatar";
import useDocScroll from "../hooks/useDocScroll.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
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
} from "../css/HeaderElement.js";
import MobileSlide from "./MobileSlide.js";
import AlarmModal from "./AlarmModal.js";
import MyPageModal from "./MyPageModal.js";
import "../css/header.css";
import "../css/animation.css";

function Header(props) {
  const user = useSelector((state) => state.user);
  console.log("header", user);
  //modal
  const [alarmHambucControl, setalarmHambucControl] = useState(false);
  const [myPageHambucControl, setmyPageHambucControl] = useState(false);

  const alarmInnerRef = useOuterClick((e) => {
    setalarmHambucControl(false);
  });
  const myPageInnerRef = useOuterClick((e) => {
    setmyPageHambucControl(false);
  });

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
                <div className="hambuc" ref={alarmInnerRef}>
                  <i
                    className="bell bi bi-bell"
                    onClick={() => setalarmHambucControl(true)}
                  ></i>
                  {alarmHambucControl ? <AlarmModal /> : null}
                </div>
                <div className="hambuc" ref={myPageInnerRef}>
                  <Avatar
                    className="profile"
                    src={user.userData ? user.userData.avatar : "./test.png"}
                    size="35px"
                    round={true}
                    onClick={() => setmyPageHambucControl(true)}
                  />
                  {myPageHambucControl ? (
                    <MyPageModal
                      setmyPageHambucControl={setmyPageHambucControl}
                    />
                  ) : null}
                </div>
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

function useOuterClick(callback) {
  const callbackRef = useRef();
  const innerRef = useRef();
  useEffect(() => {
    callbackRef.current = callback;
  });
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      ) {
        callbackRef.current(e);
      }
      //수정버튼 클릭시
      if (e.target.className === "edit") {
        callbackRef.current(!e);
      }
    }
  }, []);
  return innerRef;
}

export default withRouter(Header);
