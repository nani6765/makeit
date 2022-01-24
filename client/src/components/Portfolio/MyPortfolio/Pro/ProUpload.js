import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { CommonMarginDiv } from "../../../CommonCSS.js";
import { ProdUploadDiv } from "../../CSS/MyPortpolio/UploadCSS.js";
import Title from "./UploadContent/Title.js";
import Info from "./UploadContent/Info.js";
import Introduce from "./UploadContent/Introduce.js";
import Profile from "./UploadContent/Profile.js";
import Project from "./UploadContent/Project.js";
import Tag from "./UploadContent/Tag.js";

import axios from "axios";

function ProUpload() {
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
  const [Name, setName] = useState("");
  const [ProName, setProName] = useState("");
  const [Gender, setGender] = useState("");
  const [Field, setField] = useState("");
  const [Location, setLocation] = useState([]);
  const [ProIntroduce, setProIntroduce] = useState("");
  const [ProfileImgList, setProfileImgList] = useState([]);
  const [ProjectArr, setProjectArr] = useState([]);
  const [TagArr, setTagArr] = useState([]);
  const [IsPublic, setIsPublic] = useState(false);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (!(ProName && Field && ProIntroduce && Titletext)) {
      return alert("모든 내용을 채워주세요.");
    }
    if (!Location.length) {
      return alert("최소 지역을 한 개 이상 입력하셔야 합니다.");
    }
    if (!TagArr.length) {
      return alert("최소 태그를 한 개 이상 입력하셔야 합니다.");
    }

    let body = {
      titletext: Titletext,
      profileImg: ProfileImg,
      linkArr: LinkArr,
      name: Name,
      proName: ProName,
      gender: Gender,
      field: Field,
      location: Location,
      introduce: ProIntroduce,
      profileImgList: ProfileImgList,
      projectArr: ProjectArr,
      tagArr: TagArr,
      uid: user.userData.uid,
      public: IsPublic,
    };

    await axios.post("/api/portfolio/pro/submit", body).then((response) => {
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
            Name={Name}
            setName={setName}
            ProName={ProName}
            setProName={setProName}
            Gender={Gender}
            setGender={setGender}
            Field={Field}
            setField={setField}
            Location={Location}
            setLocation={setLocation}
          />
          <Introduce
            ProIntroduce={ProIntroduce}
            setProIntroduce={setProIntroduce}
          />
          <Profile
            ProfileImgList={ProfileImgList}
            setProfileImgList={setProfileImgList}
          />
          <Project ProjectArr={ProjectArr} setProjectArr={setProjectArr} />
          <Tag TagArr={TagArr} setTagArr={setTagArr} />
        </form>
      </ProdUploadDiv>
    </CommonMarginDiv>
  );
}

export default ProUpload;
