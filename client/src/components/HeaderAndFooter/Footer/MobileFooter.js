import React, { useState, useEffect } from "react";
import { MobileFooterDiv } from "../css/FooterElement.js";
import { withRouter, Link, useHistory } from "react-router-dom";
import {
  FooterMobileBottom1,
  FooterMobileBottom2,
  FooterMobileBottom3,
  FooterMobileBottom4,
  FooterMobileBottom5,
} from "./FooterMobileBottom.js";

function MobileFooter(props) {
  let history = useHistory();
  const [Location, setLocation] = useState("");

  useEffect(() => {
    setLocation(history.location.pathname);
    console.log("history : ", history);
  }, [history.location.pathname]);

  return (
    <MobileFooterDiv>
      <ul>
        <li className={Location === "/" ? "active" : null}>
          <Link to="/">
            <FooterMobileBottom1 />
          </Link>
        </li>
        <li className={Location === "/making" ? "active" : null}>
          <Link to="/making">
            <FooterMobileBottom2 />
          </Link>
        </li>
        <li>
          <Link to="/landingPage">
            <FooterMobileBottom3 />
          </Link>
        </li>
        <li className={Location === "/participate" ? "active" : null}>
          <Link to="/participate">
            <FooterMobileBottom4 />
          </Link>
        </li>
        <li className={Location === "/community" ? "active" : null}>
          <Link to="/community">
            <FooterMobileBottom5 />
          </Link>
        </li>
      </ul>
    </MobileFooterDiv>
  );
}

export default withRouter(MobileFooter);
