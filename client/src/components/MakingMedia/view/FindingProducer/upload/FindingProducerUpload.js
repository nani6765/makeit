import React, { useState } from "react";
import Detail from "./content/Detail.js";
import {
  UploadForm,
  UploadHead,
  ContentDiv,
  LeftContent,
} from "./css/FPUploadCSS.js";

function FindingProducerUpload() {
  const UploadProcess = ["상세설명", "포트폴리오", "가격설정", "수정/환불안내"];

  const [CurrentProcess, setCurrentProcess] = useState("상세설명");
  const [Category, setCategory] = useState("");

  const setRightContent = () => {
    switch (CurrentProcess) {
      case "상세설명":
        return <Detail Category={Category} setCategory={setCategory} />;

      default:
        break;
    }
  };

  return (
    <>
      <UploadHead>
        <div>
          <h1>
            <span>&lt;</span>
            게시하기
          </h1>
        </div>
      </UploadHead>
      <UploadForm>
        <input
          type="text"
          className="OneLineIntroduce"
          placeholder="한줄 소개 작성( 30자 이내로 작성해주세요. )"
        />
        <ContentDiv>
          <LeftContent>
            <div>
              <h1>제작자 게시하기</h1>
              <ul>
                {UploadProcess.map((process, idx) => {
                  return (
                    <li
                      key={idx}
                      className={CurrentProcess === process ? "active" : null}
                    >
                      {idx + 1}){process}
                    </li>
                  );
                })}
              </ul>
            </div>
          </LeftContent>
          <div className="rightContent">{setRightContent()}</div>
        </ContentDiv>
      </UploadForm>
    </>
  );
}

export default FindingProducerUpload;
