import React, { useState, useEffect } from "react";

import Detail from "./content/Detail.js";
import Portfolio from "./content/Portfolio.js";
import Price from "./content/Price.js";

import {
  UploadForm,
  UploadHead,
  ContentDiv,
  LeftContent,
} from "./css/FPCSS.js";

function FindingProducerUpload() {
  const UploadProcess = ["상세설명", "포트폴리오", "가격설정", "수정/환불안내"];
  const [CurrentProcess, setCurrentProcess] = useState("상세설명");

  //상세설명
  const [OneLineIntroduce, setOneLineIntroduce] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [WorkTypeArr, setWorkTypeArr] = useState([]);
  const [VideoPurposeArr, setVideoPurposeArr] = useState([]);

  //포트폴리오
  const [ThumbnailArr, setThumbnailArr] = useState([]);
  const [DetailImgArr, setDetailImgArr] = useState([]);
  const [VideoArr, setVideoArr] = useState([]);

  //가격설정
  //수정환불안내

  const setRightContent = () => {
    switch (CurrentProcess) {
      case "상세설명":
        return (
          <Detail
            setCurrentProcess={setCurrentProcess}
            Category={Category}
            setCategory={setCategory}
            Description={Description}
            setDescription={setDescription}
            WorkTypeArr={WorkTypeArr}
            setWorkTypeArr={setWorkTypeArr}
            VideoPurposeArr={VideoPurposeArr}
            setVideoPurposeArr={setVideoPurposeArr}
          />
        );

      case "포트폴리오":
        return (
          <Portfolio
            setCurrentProcess={setCurrentProcess}
            ThumbnailArr={ThumbnailArr}
            setThumbnailArr={setThumbnailArr}
            DetailImgArr={DetailImgArr}
            setDetailImgArr={setDetailImgArr}
            VideoArr={VideoArr}
            setVideoArr={setVideoArr}
          />
        );

      case "가격설정":
        return <Price />;

      default:
        break;
    }
  };

  useEffect(() => {
    console.log("CurrentProcess : ", CurrentProcess);
  }, [CurrentProcess]);
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
        {CurrentProcess === "상세설명" && (
          <input
            type="text"
            className="OneLineIntroduce"
            placeholder="한줄 소개 작성( 30자 이내로 작성해주세요. )"
            value={OneLineIntroduce}
            onChange={(e) => setOneLineIntroduce(e.currentTarget.value)}
          />
        )}
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
