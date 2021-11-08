import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import axios from "axios";

import PublicUpload from "./view/PublicUpload.js";
import PrivateUpload from "./view/PrivateUpload.js";

import { UploadHead, UploadForm } from "../../../css/CommonUploadCSS.js";
import { ShareVideoContentDiv } from "../../../css/SVUCSS.js";

function ShareVideoEdit(props) {
  const user = useSelector((state) => state.user);

  const [OneLineIntroduce, setOneLineIntroduce] = useState("");
  const [Content, setContent] = useState("");
  const [Thumbnail, setThumbnail] = useState("");
  const [VideoURL, setVideoURL] = useState("");
  const [ShareOpts, setShareOpts] = useState("공개");

  const radioOptions = ["공개", "일부공개"];
  
  useEffect(() => {
    setThumbnail("");
    setVideoURL("");
  }, [ShareOpts]);

  useEffect(() => {
    if(!user.userData) {
      props.history.push("/login");
    }
    window.scrollTo(0, 0);

    console.log("??", props.history.location.state.postInfo)

    let postInfo = {...props.history.location.state.postInfo};
    setOneLineIntroduce(postInfo.oneLineIntroduce);
    setContent(postInfo.content);
    setThumbnail(postInfo.thumbnailUrl);
    setVideoURL(postInfo.videoUrl);
  }, []);

  useEffect(() => {
      if(props.history.location.state.postInfo._id === undefined) {
          props.history.goBack();
      }
  }, [props.history]);

  const setURL = (originURL) => {
    var regExp =
      /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
    var match = originURL.match(regExp);
    return match && match[1].length == 11 ? match[1] : false;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (OneLineIntroduce === "") {
      return alert("한 줄 소개를 작성해주세요!");
    }
    if (Content === "") {
      return alert("본문을 작성해주세요!");
    }
    if (ShareOpts === "일부공개") {
      if (!setURL(VideoURL)) {
        return alert("영상 URL을 확인해주세요!");
      }
      if (Thumbnail === "") {
        return alert("썸네일을 선택해주세요!");
      }
    } else {
      if (!VideoURL) {
        return alert("영상을 선택해주세요!");
      }
    }

    let body = {
      uid: user.userData.uid,
      oneLineIntroduce: OneLineIntroduce,
      content: Content,
      _id: props.history.location.state.postInfo._id,
    };

    if (ShareOpts === "공개") {
      body.thumbnailUrl = Thumbnail;
      body.videoUrl = VideoURL;
    } else {
      body.thumbnailUrl = Thumbnail[0].path;
      body.videoUrl = setURL(VideoURL);
    }

    axios.post("/api/making/shareVideo/Edit", body).then((response) => {
      if (response.data.success) {
        alert("제작 영상 수정이 완료되었습니다.");
        props.history.push(`/making/shareVideo/${props.history.location.state.postInfo.url}`);
      } else {
        alert("제작 영상 수정이 실패하였습니다.");
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
          onChange={(e) => {
            if(e.currentTarget.value.length <= 30) {
              setOneLineIntroduce(e.currentTarget.value)
            }
          }}
        />

        <ShareVideoContentDiv>
          <div className="setShareOpt">
            <label className="filmTypelabel">등록 영상 공개 범위</label>
            {radioOptions.map((option, idx) => {
              return (
                <label key={idx}>
                  <input
                    type="radio"
                    value={option}
                    checked={ShareOpts === option ? true : false}
                    onChange={() => {
                      setShareOpts(option);
                    }}
                  />
                  {option}
                </label>
              );
            })}
          </div>

          {ShareOpts === "공개" ? (
            <PublicUpload
              Thumbnail={Thumbnail}
              setThumbnail={setThumbnail}
              setVideoURL={setVideoURL}
            />
          ) : (
            <PrivateUpload
              Thumbnail={Thumbnail}
              setThumbnail={setThumbnail}
              VideoURL={VideoURL}
              setVideoURL={setVideoURL}
            />
          )}
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

export default withRouter(ShareVideoEdit);
