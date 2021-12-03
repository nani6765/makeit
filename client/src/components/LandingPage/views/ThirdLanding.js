import React from "react";
import { ThirdDiv } from "../css/LandigPageElement.js";

function ThirdLanding() {
  return (
    <ThirdDiv>
      <div className="content">
        <div>
          <p className="Title">
            이제는 손쉬운
            <br />
            영상 제작 의뢰
          </p>
          <hr />
          <p className="SubTitle">
            영상 제작에 필요한 복잡했던 모든 절차가
            <br />한 번에 해결됩니다.
          </p>
        </div>
        <img src="/Img/Landing/iPad.png" alt="" />
      </div>
    </ThirdDiv>
  );
}

export default ThirdLanding;
