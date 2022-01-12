import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import qs from "qs";

import Header from "./main/Header.js";
function Portfolio() {

  let location = useLocation();
  let history = useHistory();

  const [URL, setURL] = useState("");

  return (
    <div>
      <div className="bannerDiv">
        <img src="./Img/Banner/1920.png" alt="" style={{ width: "100%" }} />
      </div>
      <Header />
    </div>
  );
}

export default Portfolio;
