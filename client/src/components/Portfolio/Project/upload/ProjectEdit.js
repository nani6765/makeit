import React, { useState, useEffect } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Title from "./content/Title.js";
import Info from "./content/Info.js";
import TimeLine from "./content/TimeLine.js";
import Tag from "./content/Tag.js";

import axios from "axios";

import { CommonMarginDiv } from "../../../CommonCSS.js";
import { ProjectUploadDiv } from "../../CSS/Project/ProjectUploadCSS.js";

function ProjectEdit() {
  const [TitleText, setTitleText] = useState("");
  const [Image, setImage] = useState(
    "https://kr.object.ncloudstorage.com/makeit/portfolio/default.png"
  );
  const [Introduce, setIntroduce] = useState("");
  const [DetailContent, setDetailContent] = useState("");
  const [LocationArr, setLocationArr] = useState([]);
  const [TimeLineArr, setTimeLineArr] = useState([]);
  const [TagArr, setTagArr] = useState([]);

  const history = useHistory();
  const params = useParams();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.userData === null) {
      alert("로그인이 필요한 서비스입니다.");
      history.push("/login");
    }

    let body = {
        url: params.url,
    }
    axios.post("/api/portfolio/getDetail", body).then((response) => {
        if (response.data.success) {
            let project = response.data.projectInfo;
            setTitleText(project.title);
            setImage(project.thumbnail);
            setIntroduce(project.introduce);
            setDetailContent(project.detailContent);
            setLocationArr([...project.location]);
            setTimeLineArr([...project.timeline]);
            setTagArr([...project.tag]);
        }
    })
  }, [user]);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (!(TitleText && Introduce && DetailContent)) {
      return alert("모든 내용을 채워주세요.");
    }
    if (!LocationArr.length) {
      return alert("최소 지역을 한 개 이상 입력하셔야 합니다.");
    }
    if (!TimeLineArr.length) {
      return alert("최소 타임라인을 한 개 이상 입력하셔야 합니다.");
    }
    if (!TagArr.length) {
      return alert("최소 태그를 한 개 이상 입력하셔야 합니다.");
    }

    let body = {
      title: TitleText,
      thumbnail: Image,
      introduce: Introduce,
      detailContent: DetailContent,
      location: LocationArr,
      timeline: TimeLineArr,
      tag: TagArr,
      uid: user.userData.uid,
    };

    await axios.post("/api/portfolio/project/submit", body).then((response) => {
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
      <ProjectUploadDiv>
        <form>
          <div className="btnDiv">
            <button
              className="cancel"
              onClick={(e) => {
                e.preventDefault();
                alert("url 아직 안정해져서 메인으로 보냄");
                history.push("/");
              }}
            >
              취소
            </button>
            <button className="submit" onClick={(e) => SubmitHandler(e)}>
              등록
            </button>
          </div>
          <Title TitleText={TitleText} setTitleText={setTitleText} />
          <Info
            Image={Image}
            setImage={setImage}
            Introduce={Introduce}
            setIntroduce={setIntroduce}
            DetailContent={DetailContent}
            setDetailContent={setDetailContent}
            LocationArr={LocationArr}
            setLocationArr={setLocationArr}
          />
          <TimeLine TimeLineArr={TimeLineArr} setTimeLineArr={setTimeLineArr} />
          <Tag TagArr={TagArr} setTagArr={setTagArr} />
        </form>
      </ProjectUploadDiv>
    </CommonMarginDiv>
  );
}

export default withRouter(ProjectEdit);
