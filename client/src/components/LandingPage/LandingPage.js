import React from "react";
import FirstLanding from "./views/FirstLanding.js";
import SecondLanding from "./views/SecondLanding.js";
import ThirdLanding from "./views/ThirdLanding.js";
import FourthLanding from "./views/FourthLanding.js";
import FifthLanding from "./views/FifthLanding.js";
import SixthLanding from "./views/SixthLanding.js";
import MobileFooter from "../HeaderAndFooter/MobileFooter.js";

function LandingPage() {
  return (
    <>
      <FirstLanding />
      <SecondLanding />
      <ThirdLanding />
      <FourthLanding />
      <FifthLanding />
      <SixthLanding />
      <MobileFooter path="/" />
    </>
  );
}

export default LandingPage;
