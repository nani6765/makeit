import React, { useState, useEffect } from "react";
import { CommonMarginDiv } from "../../CommonCSS.js";
import { ProdUploadDiv } from "./ProductionCSS.js";
import Title from "./UploadContent/Title.js";
import Info from "./UploadContent/Info.js";
import Introduce from "./UploadContent/Introduce.js";
import Project from "./UploadContent/Project.js";
import Tag from "./UploadContent/Tag.js";

function ProdUpload() {
  const [ProfileImg, setProfileImg] = useState(
    "https://kr.object.ncloudstorage.com/makeit/portfolio/default.png"
  );
  const [LinkArr, setLinkArr] = useState([
    { value: "" },
    { value: "" },
    { value: "" },
  ]);
  const [ProName, setProName] = useState("");
  const [FieldArr, setFieldArr] = useState([]);
  const [ProLocation, setProLocation] = useState("");
  const [ProIntroduce, setProIntroduce] = useState("");
  const [ProjectArr, setProjectArr] = useState([]);
  const [TagArr, setTagArr] = useState([]);

  return (
    <CommonMarginDiv>
      <ProdUploadDiv>
        <form>
          <Title />
          <Info
            ProfileImg={ProfileImg}
            setProfileImg={setProfileImg}
            LinkArr={LinkArr}
            setLinkArr={setLinkArr}
            ProName={ProName}
            setProName={setProName}
            FieldArr={FieldArr}
            setFieldArr={setFieldArr}
            ProLocation={ProLocation}
            setProLocation={setProLocation}
          />
          <Introduce
            ProIntroduce={ProIntroduce}
            setProIntroduce={setProIntroduce}
          />
          <Project ProjectArr={ProjectArr} setProjectArr={setProjectArr} />
          <Tag TagArr={TagArr} setTagArr={setTagArr} />
        </form>
      </ProdUploadDiv>
    </CommonMarginDiv>
  );
}

export default ProdUpload;
