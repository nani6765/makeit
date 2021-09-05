import React, { useState, useEffect, useRef } from "react";
import ContentHeadingArea from "../utils/ContentHeadingArea.js";
import FooterBtnArea from "../utils/FooterBtnArea.js";
import FileUploadArea from "../../../../../utils/FileUploadArea.js";
import FileShowArea from "../../../../../utils/FileShowArea.js";
import YoutubeModal from "../utils/YoutubeModal.js";
import { ProtFolioDiv } from "../css/FPUploadCSS.js";

function Portfolio(props) {
  const [ThumbnailArr, setThumbnailArr] = useState([]);
  const [ThumbnailArrLength, setThumbnailArrLength] = useState(0);
  const [DetailImgArr, setDetailImgArr] = useState([]);
  const [DetailImgArrLength, setDetailImgArrLength] = useState(0);
  const [ModalFlag, setModalFlag] = useState(false);
  const [VideoArr, setVideoArr] = useState([]);
  const [VideoArrLength, setVideoArrLength] = useState(0);

  useEffect(() => {
    setThumbnailArrLength(ThumbnailArr.length);
  }, [ThumbnailArr]);

  useEffect(() => {
    setDetailImgArrLength(DetailImgArr.length);
  }, [DetailImgArr]);

  useEffect(() => {
    setVideoArrLength(VideoArr.length);
  }, [VideoArr]);

  return (
    <ProtFolioDiv>
      <ContentHeadingArea HeadingTitle="포트폴리오" />
      <p>
        썸네일등록(필수)
        <span>
          <span className="curentLength">{ThumbnailArrLength}</span>/1
        </span>
      </p>
      <FileUploadArea Images={ThumbnailArr} setImages={setThumbnailArr} />
      {ThumbnailArr[0] ? (
        <FileShowArea Images={ThumbnailArr} setImages={setThumbnailArr} />
      ) : null}

      <p>
        상세이미지등록(선택)
        <span>
          <span className="curentLength">{DetailImgArrLength}</span>/9
        </span>
      </p>
      <FileUploadArea Images={DetailImgArr} setImages={setDetailImgArr} />
      {DetailImgArr[0] ? (
        <FileShowArea Images={DetailImgArr} setImages={setDetailImgArr} />
      ) : null}

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
      <p>
        동영상등록(3개이상)
        <span>
          <span className="curentLength">{VideoArrLength}</span>/6
        </span>
        <input
          type="button"
          value="검색"
          style={{
            marginLeft: "1rem",
            borderRadius: "14px",
            border: "1px solid #935ea5",
            padding: "5px 10px 5px 10px",
            backgroundColor: "#935ea5",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={() => setModalFlag(true)}
        />
      </p>
      {ModalFlag && <YoutubeModal setModalFlag={setModalFlag} />}
      <FooterBtnArea
        setCurrentProcess={props.setCurrentProcess}
        NextStep="가격설정"
      />
    </ProtFolioDiv>
  );
}

export default Portfolio;
