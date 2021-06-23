import React, { useState, useEffect } from "react";
import { MobileFooterDiv } from "./css/FooterElement.js";
import { Link } from "react-router-dom";
import {
  FooterMobileBottom1,
  FooterMobileBottom2,
  FooterMobileBottom3,
  FooterMobileBottom4,
  FooterMobileBottom5,
} from "./FooterMobileBottom.js";

function MobileFooter(props) {
  const [path, setpath] = useState(props.path);
  useEffect(() => {
    console.log("mf", path);
  });
  return (
    <MobileFooterDiv>
      <ul>
        <li className={path === "/" ? "active" : null}>
          <Link to="/">
            <FooterMobileBottom1 />
          </Link>
        </li>
        <li>
          <Link>
            <FooterMobileBottom2 />
          </Link>
        </li>
        <li>
          <Link>
            <FooterMobileBottom3 />
          </Link>
        </li>
        <li>
          <Link>
            <FooterMobileBottom4 />
          </Link>
        </li>
        <li className={path === "/community" ? "active" : null}>
          <Link to="/community">
            <FooterMobileBottom5 />
          </Link>
        </li>
      </ul>
    </MobileFooterDiv>
  );
}

export default MobileFooter;
