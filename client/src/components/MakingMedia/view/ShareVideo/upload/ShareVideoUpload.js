import React, { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import YoutubeModal from "./utils/YoutubeModal.js";
import FileUploadArea from "../../../../utils/FileUploadArea.js";
import FileShowArea from "../../../../utils/FileShowArea.js";

import { UploadHead, UploadForm } from "../../../css/CommonUploadCSS.js";
import ShareVideoContentDiv from "./css/ShareVideoUploadCSS.js";

function ShareVideoUpload(props) {
  const user = useSelector((state) => state.user);

  const [OneLineIntroduce, setOneLineIntroduce] = useState("");
  const [Thumbnail, setThumbnail] = useState("");
  const [VideoURL, setVideoURL] = useState("");
  const [ModalFlag, setModalFlag] = useState(false);

  const [WorkType, setWorkType] = useState("");
  const [VideoPurpose, setVideoPurpose] = useState("");
  const [WorkTypeArr, setWorkTypeArr] = useState([]);
  const [VideoPurposeArr, setVideoPurposeArr] = useState([]);

  const WorkKeyDown = (e) => {
    if (e.key === "Enter") {
      let temp = [...WorkTypeArr, WorkType];
      setWorkTypeArr([...temp]);
      setWorkType("");
    }
  };

  const VideoKeyDown = (e) => {
    if (e.key === "Enter") {
      let temp = [...VideoPurposeArr, VideoPurpose];
      setVideoPurposeArr([...temp]);
      setVideoPurpose("");
    }
  };

  return (
    <>
      <UploadHead>
        <div>
          <h1>
            <span onClick={() => props.history.goBack()}>&lt;</span>
            제작 영상 알리기
          </h1>
        </div>
      </UploadHead>
      <UploadForm>
        <div className="path">
          홈 &gt; 영상제작 &gt; 제작 영상 알리기 &gt; 작성하기
        </div>
        <input
          type="text"
          className="OneLineIntroduce"
          placeholder="한줄 소개 작성( 30자 이내로 작성해주세요. )"
          value={OneLineIntroduce}
          onChange={(e) => setOneLineIntroduce(e.currentTarget.value)}
        />
        <ShareVideoContentDiv>
          <div className="videoArea">
            <div className="heading">
              <p>
                동영상등록(필수)
                <span>
                  <span className="curentLength">{Thumbnail ? "1" : "0"}</span>
                  /1
                </span>
              </p>
              <button onClick={() => setModalFlag(true)}>검색</button>
            </div>
            {Thumbnail ? (
              <img
                className="thumbnail"
                src={Thumbnail}
                onClick={() => setModalFlag(true)}
              />
            ) : (
              <div className="upload" onClick={() => setModalFlag(true)}>
                <i className="bi bi-upload"></i>
              </div>
            )}

            {ModalFlag && (
              <YoutubeModal
                setModalFlag={setModalFlag}
                setThumbnail={setThumbnail}
                setVideoURL={setVideoURL}
              />
            )}
          </div>
          <div className="contentArea">
            <textarea />
            <div className="tagArea">
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
          </div>
        </ShareVideoContentDiv>
        <div className="BtnDiv">
          <button
            className="cancel"
            onClick={() => props.history.push("/making")}
          >
            취소
          </button>
          <button className="submit">완료</button>
        </div>
      </UploadForm>
    </>
  );
}

export default withRouter(ShareVideoUpload);
