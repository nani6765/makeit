import React, { useState } from "react";
import useDocScroll from "../hooks/useDocScroll.js";
import HeaderElement from "./HeaderElement/HeaderElement.js";

function Header(props) {
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
    <HeaderElement
      shadowStyle={shadowStyle}
      hiddenStyle={hiddenStyle}
      showSide={showSide}
      hideSide={hideSide}
    />
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

export default Header;
