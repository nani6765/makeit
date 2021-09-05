import React, { useState } from "react";
import ContentHeadingArea from "../utils/ContentHeadingArea.js";
import FooterBtnArea from "../utils/FooterBtnArea.js";

import { ProtFolioDiv } from "../css/FPUploadCSS.js";

function Portfolio(props) {
  const [ThumbnailArrLength, setThumbnailArrLength] = useState(0);
  const [DetailImgArrLength, setDetailImgArrLength] = useState(0);
  const [VideoArrLength, setVideoArrLength] = useState(0);

  return (
    <ProtFolioDiv>
      <ContentHeadingArea HeadingTitle="포트폴리오" />
      <p>
        썸네일등록(필수)
        <span>
          <span className="curentLength">{ThumbnailArrLength}</span>/1
        </span>
      </p>
      <p>
        상세이미지등록(선택)
        <span>
          <span className="curentLength">{DetailImgArrLength}</span>/9
        </span>
      </p>
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
      </p>
      <FooterBtnArea
        setCurrentProcess={props.setCurrentProcess}
        NextStep="가격설정"
      />
    </ProtFolioDiv>
  );
}

export default Portfolio;
