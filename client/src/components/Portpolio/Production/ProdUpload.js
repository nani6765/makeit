import React, { useState, useEffect } from "react";
import { CommonMarginDiv } from "../../CommonCSS.js";
import { ProdUploadDiv } from "./ProductionCSS.js";
import Title from "./UploadContent/Title.js";
import Info from "./UploadContent/Info.js";
import Introduce from "./UploadContent/Introduce.js";
import Project from "./UploadContent/Project.js";
import Tag from "./UploadContent/Tag.js";

function ProdUpload() {
  const [ProfileImg, setProfileImg] = useState("https://kr.object.ncloudstorage.com/makeit/portfolio/default.png");

  return (
    <CommonMarginDiv>
      <ProdUploadDiv>
        <form>
          <Title />
          <Info ProfileImg={ProfileImg} setProfileImg={setProfileImg} />
          <Introduce />
          <Project />
          <Tag />
        </form>
      </ProdUploadDiv>
    </CommonMarginDiv>
  );
}

export default ProdUpload;
