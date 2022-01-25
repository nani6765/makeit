import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import qs from "qs";

import Header from "./main/Header.js";
import PFFilter from "./main/PFFilter.js";
import PFList from "./PortfolioFind/PFList.js";
import SubCategory from "./main/SubCategory.js";
import MyPortfolio from "./MyPortfolio/MyPortfolio.js";
import ProjectList from "./Project/ProjectList.js";

function Portfolio() {
  let location = useLocation();
  let history = useHistory();

  const [URL, setURL] = useState("");

  const setContent = () => {
    switch (URL.category) {
      case "PF":
        return (
          <>
            {/*<PFFilter URL={URL} setURL={setURL} />*/}
            <PFList URL={URL} />
          </>
        );

      case "MP":
        return (
          <>
            <SubCategory URL={URL} />
            <MyPortfolio URL={URL} />
          </>
        );

      case "Pr":
        return (
          <>
            <SubCategory URL={URL} />
            <ProjectList URL={URL} />
          </>
        );
    }
  };

  useEffect(() => {
    if (location.search) {
      let temp = qs.parse(location.search, { ignoreQueryPrefix: true });
      setURL(temp);
    } else {
      //최초접속
      history.push(`?category=PF&sort=인기순&pIdx=0`);
    }
  }, [location.search]);

  return (
    <div>
      <div className="bannerDiv">
        <img src="./Img/Banner/1920.png" alt="" style={{ width: "100%" }} />
      </div>
      <Header URL={URL} />
      {setContent()}
    </div>
  );
}

export default Portfolio;
