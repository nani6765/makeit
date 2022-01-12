import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  HeaderMarginDiv,
} from "../../css/HeaderElement.js";
import MobileSlide from "./MobileSlide.js";
import HeaderNavArea from "./HeaderNavArea.js";
import HeaderLoginArea from "./HeaderLoginArea.js";
import { ReactComponent as SearchIcon } from "../../css/search.svg";

import "../../css/header.css";
import "../../css/animation.css";

function HeaderElement(props) {
  let location = useLocation();
  //modal
  const [alarmHambucControl, setalarmHambucControl] = useState(false);
  const [myPageHambucControl, setmyPageHambucControl] = useState(false);

  return (
    <>
      <HeaderDiv className={`header ${props.shadowStyle} ${props.hiddenStyle}`}>
        <HeaderMarginDiv>
          <HeaderGrid>
            <HeaderLogo>
              <Link to="/">
                <img
                  className="PC"
                  src={process.env.PUBLIC_URL + "/Img/symbol.png"}
                />
                <img src={process.env.PUBLIC_URL + "/Img/text.png"} />
              </Link>
            </HeaderLogo>

            <HeaderNavArea className="PC" />

            <HeaderSearch className="PC">
              <div>
                <form action="/search" method="GET">
                  <input type="text" placeholder="Search" name="term" />
                  <button type="submit">
                    <SearchIcon />
                  </button>
                </form>
              </div>
            </HeaderSearch>

            <HeaderLoginArea
              alarmHambucControl={alarmHambucControl}
              setalarmHambucControl={setalarmHambucControl}
              myPageHambucControl={myPageHambucControl}
              setmyPageHambucControl={setmyPageHambucControl}
            />

            <div className="Mobile">
              <MobileHambuck>
                <i className="bi bi-list" onClick={() => props.showSide()}></i>
              </MobileHambuck>
            </div>
          </HeaderGrid>
        </HeaderMarginDiv>
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
