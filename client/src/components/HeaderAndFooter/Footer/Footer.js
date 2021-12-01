import React from "react";

import { FooterMenuArea, FooterContentArea } from "../css/FooterElement.js";
import { CommonMarginDiv } from "../../CommonCSS.js";
import { ReactComponent as FLogo } from "../css/footerLogo.svg";

function Footer(props) {
  return (
    <>
      <div
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          backgroundColor: "#FAF6F6",
        }}
      >
        <CommonMarginDiv>
          <FooterMenuArea>
            <div>
              <p>회사소개</p>
            </div>
            <div>
              <p>이용 약관</p>
            </div>
            <div className="mobileHidden">
              <p>개인정보처리방침</p>
            </div>
            <div className="mobileHidden">
              <p>제휴문의</p>
            </div>
            <div className="mobileHidden">
              <p>인재채용</p>
            </div>
            <div>
              <p>고객센터</p>
            </div>
          </FooterMenuArea>
          <FooterContentArea>
            <div style={{ width: "30%" }} className="mobileHidden">
              <FLogo />
            </div>
            <div className="mobileHidden">
              <p>(주)미디어프렌드</p>
              <p>
                메이킷 고객센터 : 카카오톡 친구 추가 @mfmakeit,
                cs@mediafriend.co.kr (평일 09:00~19:00,주말/공휴일 휴무)
                <br />
                서울 광진구 천호대로 536 7층 19호 <br />
                사업자등록번호 : 235-88-01980 , 대표 : 이형진 <br />
                All rights reservered.
              </p>
            </div>
            <div className="onlyMoblie">
              <p>(주)미디어프렌드</p>
              <p>MediaFriend copyright reserverd</p>
            </div>
          </FooterContentArea>
        </CommonMarginDiv>
      </div>
    </>
  );
}

export default Footer;
