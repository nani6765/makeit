import React, { useState, useEffect } from "react";
import ContentHeadingArea from "../utils/ContentHeadingArea.js";
import FooterBtnArea from "../utils/FooterBtnArea.js";

import FileUploadArea from "../../../../../utils/view/Files/FileUploadArea.js";
import FileShowArea from "../../../../../utils/view/Files/FileShowArea.js";
//import YoutubeModal from "../../../../../utils/view/Modal/YoutubeCheckModal.js";
import YoutubeLinkModal from "../../../../../utils/view/Modal/YoutubeLinkModal.js";
import YouTube from "react-youtube";

import { ProtFolioDiv } from "../../../../css/FPUCSS.js";

function Portfolio(props) {
  const [ThumbnailArrLength, setThumbnailArrLength] = useState(0);
  const [DetailImgArrLength, setDetailImgArrLength] = useState(0);
  const [VideoArrLength, setVideoArrLength] = useState(0);
  const [ModalFlag, setModalFlag] = useState(false);
  const [CheckFlag, setCheckFlag] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (props.Thumbnail) setThumbnailArrLength(1);
  }, [props.Thumbnail]);

  useEffect(() => {
    setDetailImgArrLength(props.DetailImgArr.length);
  }, [props.DetailImgArr]);

  useEffect(() => {
    setVideoArrLength(props.VideoArr.length);
  }, [props.VideoArr]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < VideoArrLength; i++) {
      temp.push(false);
    }
    setCheckFlag([...temp]);
  }, [VideoArrLength]);

  const DeleteHandler = (idx) => {
    let temp = [...props.VideoArr];
    let removed = [];
    removed = temp.splice(idx, 1);
    props.setVideoArr([...temp]);
  };

  const opts = {
    width: "120px",
    height: "80px",
  };

  return (
    <ProtFolioDiv>
      <ContentHeadingArea HeadingTitle="포트폴리오" />
      <p>
        썸네일등록(필수)
        <span>
          <span className="curentLength">{ThumbnailArrLength}</span>/1
        </span>
      </p>
      <div className="upload">
        <FileUploadArea
          Images={props.Thumbnail}
          setImages={props.setThumbnail}
          type="thumbnail"
          dirURL="making"
        />
      </div>
      {props.Thumbnail[0] !== undefined && (
        <div className="imgShow">
          {props.Thumbnail[0].path !== undefined ? (
            <img src={props.Thumbnail[0].path} alt="" />
          ) : (
            <img src={props.Thumbnail} alt="" />
          )}
        </div>
      )}

      <p style={{ marginTop: "1rem" }}>
        상세이미지등록(선택)
        <span>
          <span className="curentLength">{DetailImgArrLength}</span>/9
        </span>
      </p>

      <div className="upload">
        <FileUploadArea
          Images={props.DetailImgArr}
          setImages={props.setDetailImgArr}
          dirURL="making"
        />
        {props.DetailImgArr.length > 0 && (
          <FileShowArea
            Images={props.DetailImgArr}
            setImages={props.setDetailImgArr}
          />
        )}
      </div>

      <div className="notice">
        <h3>Tip!</h3>
        <ul>
          <li>이미지 권장 사이즈 : 652 x 488 px (4:3 비율)</li>
          <li>
            사용 제한 이미지
            <br />
            저작권 침해(무단복제,도용 이미지)
            <br />
            프로필 사진과 동일한 이미지
            <br />
            서비스와 관련 없는 홍보문구
            <br />
            허위사실에 해당하는 내용(증빙 불가능한 내용 포함)
          </li>
        </ul>
      </div>

      <div className="videoSearch">
        <p>
          동영상등록(3개이상)
          <span>
            <span className="curentLength">{VideoArrLength}</span>/5
          </span>
        </p>
        <button
          type="button"
          className="search"
          onClick={() => setModalFlag(true)}
        >
          추가
        </button>
      </div>

      {ModalFlag && (
        <YoutubeLinkModal
          setModalFlag={setModalFlag}
          VideoArr={props.VideoArr}
          setVideoArr={props.setVideoArr}
          type="FP"
        />
      )}

      {props.VideoArr[0] && (
        <ul className="showSelectedVideo">
          {props.VideoArr.map((Video, idx) => {
            return (
              <li key={idx}>
                <div className="deleteArea" style={{ marginRight: "10px" }}>
                  <p>삭제</p>
                  <input
                    type="checkbox"
                    checked={CheckFlag[idx]}
                    onClick={() => {
                      DeleteHandler(idx);
                    }}
                  />
                </div>
                <YouTube videoId={Video} opts={opts} />
              </li>
            );
          })}
        </ul>
      )}
      <FooterBtnArea
        setCurrentProcess={props.setCurrentProcess}
        NextStep="가격설정"
        CheckEmptyContent={props.CheckEmptyContent}
        TempSaveHandler={props.TempSaveHandler}
      />
    </ProtFolioDiv>
  );
}

export default Portfolio;
