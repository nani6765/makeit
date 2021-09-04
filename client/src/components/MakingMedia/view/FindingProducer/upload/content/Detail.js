import React, { useState } from "react";
import { DetailDiv } from "../css/FPUploadCSS.js";
import { DropdownButton, Dropdown } from "react-bootstrap";
function Detail(props) {
  const CategoryContent = [
    "일반 영상",
    "유튜브 제작",
    "특수 영상",
    "광고/홍보 영상",
    "온라인 생중계",
    "애니메이션",
    "촬영",
    "편집/자막",
    "기타",
  ];

  const [WorkTypeArr, setWorkTypeArr] = useState([]);
  const [WorkType, setWorkType] = useState("");
  const [VideoPurposeArr, setVideoPurposeArr] = useState([]);
  const [VideoPurpose, setVideoPurpose] = useState("");

  const WorkKeyDown = (e) => {
    if (e.key === "Enter") {
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

  return (
    <DetailDiv>
      <div className="categoryDiv">
        <span>카테고리</span>
        <DropdownButton title={props.Category ? props.Category : "카테고리"}>
          {CategoryContent.map((category, idx) => {
            return (
              <Dropdown.Item
                key={idx}
                onClick={() => props.setCategory(category)}
              >
                {category}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </div>
      <div className="descriptionDiv">
        <div className="heading">
          <h1>상세설명</h1>
          <hr />
        </div>
        <div className="body">
          <textarea
            name="content"
            className="content"
            placeholder={
              "메이킷은 누구나 참여할 수 있는 의뢰환경을 만들기 위해 이용규칙을 제정하여 운영하고 있습니다.\n위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.\n\n아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 시 전 커뮤니티 이용 규칙 전문을 반드시 확인하시기 바랍니다.\n\n정치 사회 관련 행위 금지\n과도한 홍보 및 판매 관련 행위 금지\n그 밖에 규칙 위반     "
            }
          ></textarea>
        </div>
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
    </DetailDiv>
  );
}

export default Detail;
