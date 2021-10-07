import React, { useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import axios from "axios";

import PublicUpload from "./view/PublicUpload.js";

import { UploadHead, UploadForm } from "../../../css/CommonUploadCSS.js";
import { ShareVideoContentDiv } from "./css/ShareVideoUploadCSS.js";

function ShareVideoUpload(props) {
  const user = useSelector((state) => state.user);

  const [OneLineIntroduce, setOneLineIntroduce] = useState("");
  const [Content, setContent] = useState("");
  const [Thumbnail, setThumbnail] = useState("");
  const [VideoURL, setVideoURL] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (OneLineIntroduce === "") {
      return alert("한 줄 소개를 작성해주세요!");
    }
    if (Content === "") {
      return alert("본문을 작성해주세요!");
    }
    if (!(VideoURL && Thumbnail)) {
      return alert("영상을 선택해주세요!");
    }

    let body = {
      uid: user.userData.uid,
      oneLineIntroduce: OneLineIntroduce,
      thumbnailUrl: Thumbnail,
      videoUrl: VideoURL,
      content: Content,
    };
    console.log(body);
    axios.post("/api/making/shareVideo/submit", body).then((response) => {
      if (response.data.success) {
        alert("의뢰 게시가 완료되었습니다.");
        props.history.push("/making");
      } else {
        alert("의뢰 게시가 실패하였습니다.");
      }
    });
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
          <PublicUpload
            Thumbnail={Thumbnail}
            setThumbnail={setThumbnail}
            setVideoURL={setVideoURL}
          />
          <div className="contentArea">
            <textarea
              value={Content}
              onChange={(e) => setContent(e.currentTarget.value)}
            />
          </div>
        </ShareVideoContentDiv>
        <div className="BtnDiv">
          <button
            className="cancel"
            onClick={() => props.history.push("/making")}
          >
            취소
          </button>
          <button className="submit" onClick={(e) => submitHandler(e)}>
            완료
          </button>
        </div>
      </UploadForm>
    </>
  );
}

export default withRouter(ShareVideoUpload);
