import React, { useState, useEffect } from "react";
import ContentHeadingArea from "../utils/ContentHeadingArea.js";
import FooterBtnArea from "../utils/FooterBtnArea.js";

import FileUploadArea from "../../../../../utils/view/Files/FileUploadArea.js";
import FileShowArea from "../../../../../utils/view/Files/FileShowArea.js";
import YoutubeModal from "../../../../../utils/view/Modal/YoutubeModal.js";

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
    setThumbnailArrLength(props.Thumbnail.length);
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
        />
        {props.Thumbnail[0] ? (
          <FileShowArea
            Images={props.Thumbnail}
            setImages={props.setThumbnail}
            type="PUThumbnail"
          />
        ) : null}
      </div>

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
        />
        {props.DetailImgArr[0] ? (
          <FileShowArea
            Images={props.DetailImgArr}
            setImages={props.setDetailImgArr}
          />
        ) : null}
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
          검색
        </button>
      </div>

      {ModalFlag && (
        <YoutubeModal
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
                <div className="deleteArea">
                  <p>삭제</p>
                  <input
                    type="checkbox"
                    checked={CheckFlag[idx]}
                    onClick={() => {
                      DeleteHandler(idx);
                    }}
                  />
                </div>

                <img src={Video.snippet.thumbnails.high.url} alt="" />
                <div>
                  <p className="title">{Video.snippet.title}</p>
                  <p className="channel">{Video.snippet.channelTitle}</p>
                </div>
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
