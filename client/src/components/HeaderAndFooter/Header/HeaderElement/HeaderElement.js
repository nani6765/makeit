import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import {
  HeaderDiv,
  HeaderGrid,
  HeaderLogo,
  HeaderSearch,
  MobileHambuck,
  MobileSideBackDiv,
  MobileSlideDiv,
} from "../../css/HeaderElement.js";
import MobileSlide from "./MobileSlide.js";
import HeaderNavArea from "./HeaderNavArea.js";
import HeaderLoginArea from "./HeaderLoginArea.js";
import { ReactComponent as Logo } from "../../css/logo.svg";
import "../../css/header.css";
import "../../css/animation.css";

function HeaderElement(props) {
  //modal
  const [alarmHambucControl, setalarmHambucControl] = useState(false);
  const [myPageHambucControl, setmyPageHambucControl] = useState(false);

  return (
    <>
      <HeaderDiv className={`header ${props.shadowStyle} ${props.hiddenStyle}`}>
        <HeaderGrid>
          <HeaderLogo>
            <Link to="/">
              {/*
              <img
                src={process.env.PUBLIC_URL + "/Img/logo.png"}
                alt="MainLogo"
              />
              */}
              <Logo />
            </Link>
          </HeaderLogo>

          <HeaderNavArea />

          <HeaderSearch>
            <form action="/search" method="GET">
              <input type="text" placeholder="Search..." />
            </form>
          </HeaderSearch>

          <HeaderLoginArea
            alarmHambucControl={alarmHambucControl}
            setalarmHambucControl={setalarmHambucControl}
            myPageHambucControl={myPageHambucControl}
            setmyPageHambucControl={setmyPageHambucControl}
          />

          <MobileHambuck>
            <i className="bi bi-list" onClick={() => props.showSide()}></i>
          </MobileHambuck>
        </HeaderGrid>
      </HeaderDiv>

      <MobileSideBackDiv
        className="MobileSideBack"
        onClick={() => props.hideSide()}
      />
      <MobileSlideDiv className="MobileSideBar">
        <MobileSlide />
      </MobileSlideDiv>
    </>
  );
}

export default HeaderElement;
