import React from "react";
import { MobileUl } from "./GNBContent.js";

function MobileCommunityDiv(props) {
  return (
    <>
      <MobileUl>
        <li
          style={props.category === "게시판" ? { color: "#702c8a" } : null}
          onClick={() => {
            props.setCategory("게시판");
            props.setMobileGnb(false);
          }}
        >
          게시판
        </li>
        <li
          style={props.category === "파트너찾기" ? { color: "#702c8a" } : null}
          onClick={() => {
            props.setCategory("파트너찾기");
            props.setMobileGnb(false);
          }}
        >
          파트너 찾기
        </li>
        <li
          style={props.category === "프로찾기" ? { color: "#702c8a" } : null}
          onClick={() => {
            props.setCategory("프로찾기");
            props.setMobileGnb(false);
          }}
        >
          프로 찾기
        </li>
        <li
          style={props.category === "로케이션" ? { color: "#702c8a" } : null}
          onClick={() => {
            props.setCategory("로케이션");
            props.setMobileGnb(false);
          }}
        >
          로케이션
        </li>
        <li
          style={props.category === "자료실" ? { color: "#702c8a" } : null}
          onClick={() => {
            props.setCategory("자료실");
            props.setMobileGnb(false);
          }}
        >
          자료실
        </li>
      </MobileUl>
    </>
  );
}

export default MobileCommunityDiv;
