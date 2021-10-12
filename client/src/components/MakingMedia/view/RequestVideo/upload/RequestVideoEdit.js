import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import RequestFilter from "./view/RequestFilter.js";
import {
  UploadHead,
  UploadForm,
  UploadContent,
} from "../../../css/CommonUploadCSS.js";

import axios from "axios";

function RequestVideoEdit(props) {
  const user = useSelector((state) => state.user);

  const [URL, setURL] = useState(-1);
  const [OneLineIntroduce, setOneLineIntroduce] = useState("");
  const [Category, setCategory] = useState("일반 영상");
  const [MinPrice, setMinPrice] = useState(0);
  const [MaxPrice, setMaxPrice] = useState(0);
  const [Deadline, setDeadline] = useState(new Date());
  const [FilmType, setFilmType] = useState("직접 촬영");
  const [Uniqueness, setUniqueness] = useState("");
  const [Content, setContent] = useState("");

  const [WorkTypeArr, setWorkTypeArr] = useState([]);
  const [VideoPurposeArr, setVideoPurposeArr] = useState([]);
  const [WorkType, setWorkType] = useState("");
  const [VideoPurpose, setVideoPurpose] = useState("");

  const WorkKeyDown = (e) => {
    if (e.key === "Enter" && WorkType !== "") {
      let temp = [...WorkTypeArr, WorkType];
      setWorkTypeArr(temp);
      setWorkType("");
    }
  };

  const VideoKeyDown = (e) => {
    if (e.key === "Enter") {
      let temp = [...VideoPurposeArr, VideoPurpose];
      setVideoPurposeArr(temp);
      setVideoPurpose("");
    }
  };

  const submitHandler = () => {
    let body = {
      uid: user.userData.uid,
      email: user.userData.email,
      oneLineIntroduce: OneLineIntroduce,
      category: Category,
      minPrice: MinPrice,
      maxPrice: MaxPrice,
      deadline: Deadline.toLocaleDateString(),
      filmType: FilmType,
      uniqueness: Uniqueness,
      content: Content,
      workTypeArr: WorkTypeArr,
      videoPurposeArr: VideoPurposeArr,
      url: URL,
    };
    if (!OneLineIntroduce) {
      alert("한줄 소개를 작성해주세요!");
      return;
    }
    if (MaxPrice < MinPrice || MinPrice < 0 || MaxPrice === 0) {
      alert("측정 예산을 올바르게 입력해주세요!", MaxPrice, MinPrice);
      return;
    }
    if (!Content) {
      alert("의뢰 내용을 입력해주세요!");
      return;
    }

    axios
      .post("/api/making/requestVideo/reqPostEdit", body)
      .then((response) => {
        if (response.data.success) {
          alert("수정 완료되었습니다.");
          props.history.push(`/making/RequestPost/${URL}`);
        } else {
          alert("수정 실패하였습니다.");
        }
      });
  };

  useEffect(() => {
      let postInfo = {...props.history.location.state.postInfo};
      setOneLineIntroduce(postInfo.oneLineIntroduce);
      setCategory(postInfo.category);
      setMinPrice(postInfo.minPrice);
      setMaxPrice(postInfo.maxPrice);
      setDeadline(new Date(postInfo.deadline));
      setFilmType(postInfo.filmType);
      setUniqueness(postInfo.uniqueness);
      setContent(postInfo.content);
      setWorkTypeArr([...postInfo.workTypeArr]);
      setVideoPurposeArr([...postInfo.videoPurposeArr]);
      setURL(postInfo.url);
  }, []);
  
  return (
    <>
      <UploadHead>
        <div>
          <h1>
            <span onClick={() => props.history.goBack()}>&lt;</span>
            의뢰 작성하기
          </h1>
        </div>
      </UploadHead>
      <UploadForm>
        <div className="path">홈 &gt; 영상제작 &gt; 의뢰하기 &gt; 작성하기</div>
        <input
          type="text"
          className="OneLineIntroduce"
          placeholder="한줄 소개 작성( 30자 이내로 작성해주세요. )"
          value={OneLineIntroduce}
          onChange={(e) => setOneLineIntroduce(e.currentTarget.value)}
        />
        <UploadContent>
          <RequestFilter
            Category={Category}
            setCategory={setCategory}
            MinPrice={MinPrice}
            setMinPrice={setMinPrice}
            MaxPrice={MaxPrice}
            setMaxPrice={setMaxPrice}
            Deadline={Deadline}
            setDeadline={setDeadline}
            FilmType={FilmType}
            setFilmType={setFilmType}
            Uniqueness={Uniqueness}
            setUniqueness={setUniqueness}
          />
          <div className="body">
            <textarea
              name="content"
              className="content"
              value={Content}
              onChange={(e) => setContent(e.currentTarget.value)}
              placeholder={
                "메이킷은 누구나 참여할 수 있는 의뢰환경을 만들기 위해 이용규칙을 제정하여 운영하고 있습니다.\n위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.\n\n아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 시 전 커뮤니티 이용 규칙 전문을 반드시 확인하시기 바랍니다.\n\n정치 사회 관련 행위 금지\n과도한 홍보 및 판매 관련 행위 금지\n그 밖에 규칙 위반     "
              }
            ></textarea>
            <div>
              <span>작업유형</span>
              {WorkTypeArr.map((text, idx) => {
                return <p key={idx}>{text}</p>;
              })}
              <input
                type="text"
                value={WorkType}
                onChange={(e) => setWorkType(e.currentTarget.value)}
                onKeyPress={WorkKeyDown}
              />
            </div>
            <div>
              <span>영상목적</span>
              {VideoPurposeArr.map((text, idx) => {
                return <p key={idx}>{text}</p>;
              })}
              <input
                type="text"
                value={VideoPurpose}
                onChange={(e) => setVideoPurpose(e.currentTarget.value)}
                onKeyPress={VideoKeyDown}
              />
            </div>
          </div>
        </UploadContent>
        <div className="BtnDiv">
          <button
            className="cancel"
            onClick={() => props.history.push("/making")}
          >
            취소
          </button>
          <button className="submit" onClick={() => submitHandler()}>
            완료
          </button>
        </div>
      </UploadForm>
    </>
  );
}

export default withRouter(RequestVideoEdit);
