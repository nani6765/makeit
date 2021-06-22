/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function MobileCommunityDiv(props) {
  const breakpoints = [1200, 576];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  const Ul = styled.ul`
    text-align: right;
    list-style: none;
    li {
      margin-top: 5px;
      padding-top: 5px;
      padding-bottom: 5px;
      color: #c6c6c6;
      font-size: 12px;
    }
  `;
  return (
    <>
      <Ul>
        <li
          style={props.category === "자유게시판" ? { color: "#702c8a" } : null}
          onClick={() => {
            props.setCategory("자유게시판");
            props.setMobileGnb(false);
          }}
        >
          자유게시판
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
        <li
          style={props.category === "QnA" ? { color: "#702c8a" } : null}
          onClick={() => {
            props.setCategory("QnA");
            props.setMobileGnb(false);
          }}
        >
          Q&amp;A
        </li>
      </Ul>
    </>
  );
}

export default MobileCommunityDiv;
