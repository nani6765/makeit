import React from "react";
import { FirstDiv } from "../css/LandigPageElement.js";
function FirstLanding() {
  return (
    <FirstDiv>
      <div className="content">
        <div>
          <p className="Title">
            영상 제작의 지름길, <span>MAKE IT</span>
          </p>
          <p className="SubTitle">복잡한 영상 의뢰가 쉬워지는 가장 빠른 방법</p>
        </div>
        <img src="/Img/Landing/mainPage.png" alt="" />
      </div>
    </FirstDiv>
  );
}

export default FirstLanding;
