import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { CommonMarginDiv } from "../../../CommonCSS.js";
import { ProdUploadDiv } from "../../CSS/MyPortpolio/UploadCSS.js";
import Title from "./UploadContent/Title.js";
import Info from "./UploadContent/Info.js";
import Introduce from "./UploadContent/Introduce.js";
import Project from "./UploadContent/Project.js";
import Tag from "./UploadContent/Tag.js";

import axios from "axios";

function ProdUpload() {
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const [Titletext, setTitletext] = useState("");
  const [ProfileImg, setProfileImg] = useState(
    "https://kr.object.ncloudstorage.com/makeit/portfolio/default.png"
  );
  const [LinkArr, setLinkArr] = useState([
    { value: "" },
    { value: "" },
    { value: "" },
  ]);
  const [ProdName, setProdName] = useState("");
  const [FieldArr, setFieldArr] = useState([]);
  const [ProdLocation, setProdLocation] = useState([]);
  const [ProdIntroduce, setProdIntroduce] = useState("");
  const [ProjectArr, setProjectArr] = useState([]);
  const [TagArr, setTagArr] = useState([]);
  const [IsPublic, setIsPublic] = useState(false);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (!(ProdName && FieldArr && ProdIntroduce && Titletext)) {
      return alert("모든 내용을 채워주세요.");
    }
    if (!ProdLocation.length) {
      return alert("최소 지역을 한 개 이상 입력하셔야 합니다.");
    }
    if (!TagArr.length) {
      return alert("최소 태그를 한 개 이상 입력하셔야 합니다.");
    }

    let body = {
      titletext: Titletext,
      profileImg: ProfileImg,
      name: ProdName,
      fieldArr: FieldArr,
      location: ProdLocation,
      introduce: ProdIntroduce,
      projectArr: ProjectArr,
      tagArr: TagArr,
      uid: user.userData.uid,
      public: IsPublic,
    };

    await axios.post("/api/portfolio/prod/submit", body).then((response) => {
      if (response.data.success) {
        alert("게시글 등록 성공했는데 list url 없어서 메인으로 보냄");
        history.push("/");
      } else {
        alert("게시글 등록 실패");
      }
    });
  };
  return (
    <CommonMarginDiv>
      <ProdUploadDiv>
        <div className="btnDiv">
          <button
            className={IsPublic ? "" : "private"}
            onClick={() => (IsPublic ? setIsPublic(false) : setIsPublic(true))}
          >
            {IsPublic ? "공개" : "비공개"}
          </button>
          <button className="submit" onClick={(e) => SubmitHandler(e)}>
            등록
          </button>
        </div>
        <form>
          <Title Titletext={Titletext} setTitletext={setTitletext} />
          <Info
            ProfileImg={ProfileImg}
            setProfileImg={setProfileImg}
            LinkArr={LinkArr}
            setLinkArr={setLinkArr}
            ProdName={ProdName}
            setProdName={setProdName}
            FieldArr={FieldArr}
            setFieldArr={setFieldArr}
            ProdLocation={ProdLocation}
            setProdLocation={setProdLocation}
          />
          <Introduce
            ProdIntroduce={ProdIntroduce}
            setProdIntroduce={setProdIntroduce}
          />
          <Project ProjectArr={ProjectArr} setProjectArr={setProjectArr} />
          <Tag TagArr={TagArr} setTagArr={setTagArr} />
        </form>
      </ProdUploadDiv>
    </CommonMarginDiv>
  );
}

export default ProdUpload;
