import React, { useState } from "react";
import { DetailDiv } from "../../CSS/MyPortpolio/DetailCSS.js";
import TextEllipsis from "react-text-ellipsis";

function ProContent(props) {
  const LinkTypeCheck = (type) => {
    if (type === null) {
      return <i className="bi bi-link-45deg" />;
    }
    switch (type[0]) {
      case "youtu":
        return <i className="bi bi-youtube" />;
      case "instagram":
        return <i className="bi bi-instagram" />;
      case "facebook":
        return <i className="bi bi-facebook" />;
      case "linkedin":
        return <i className="bi bi-linkedin" />;
      case "twitter":
        return <i className="bi bi-twitter" />;
      case "vimeo":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-vimeo"
            viewBox="0 0 16 16"
          >
            <path d="M15.992 4.204c-.071 1.556-1.158 3.687-3.262 6.393-2.175 2.829-4.016 4.243-5.522 4.243-.933 0-1.722-.861-2.367-2.583L3.55 7.523C3.07 5.8 2.556 4.94 2.007 4.94c-.118 0-.537.253-1.254.754L0 4.724a209.56 209.56 0 0 0 2.334-2.081c1.054-.91 1.845-1.388 2.373-1.437 1.243-.123 2.01.728 2.298 2.553.31 1.968.526 3.19.646 3.666.36 1.631.756 2.446 1.186 2.445.334 0 .836-.53 1.508-1.587.671-1.058 1.03-1.863 1.077-2.415.096-.913-.263-1.37-1.077-1.37a3.022 3.022 0 0 0-1.185.261c.789-2.573 2.291-3.825 4.508-3.756 1.644.05 2.419 1.117 2.324 3.2z" />
          </svg>
        );
    }
  };

  const FieldToKorean = (text) => {
    switch (text) {
      case "general":
        return "일반영상";
      case "youtube":
        return "유튜브제작";
      case "special":
        return "특수영상";
      case "ad":
        return "광고/홍보영상";
      case "online":
        return "온라인생중계";
      case "ani":
        return "애니메이션";
      case "filming":
        return "촬영";
      case "edit":
        return "편집/자막";
      case "etc":
        return "기타";
      default:
        return "기타";
    }
  };

  return (
    <>
      <DetailDiv>
        <p className="title">{props.Portfolio.titletext}</p>
        <section className="info prod">
          <div className="profileImg">
            <img src={props.Portfolio.profileImg} />
            <div className="links">
              {props.Portfolio.linkArr.map((item, idx) => {
                let key = item.value.match(
                  /youtu|instagram|facebook|linkedin|twitter|vimeo/i
                );
                let Tag = LinkTypeCheck(key);
                if (item.value == "") {
                  return null;
                } else {
                  return (
                    <a key={idx} href={item.value} target="_blank">
                      <span>{Tag}</span>
                    </a>
                  );
                }
              })}
            </div>
          </div>

          <div className="infoDiv name">
            <label>프로덕션명</label>
            <p>{props.Portfolio.name}</p>
          </div>
          <div className="infoDiv field prod">
            <label>전문분야</label>
            <div>
              <ul>
                {props.Portfolio.fieldArr.map((field, idx) => {
                  return <li key={idx}>{FieldToKorean(field)}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="location">
            <label>소재지</label>
            <div>
              <ul>
                {props.Portfolio.location.map((location, idx) => {
                  return <li key={idx}>{location}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="introduce">
          <p>소개</p>
          <div>{props.Portfolio.introduce}</div>
        </section>

        <section className="project">
          <p className="sub">참여 프로젝트</p>
          <div className="list">
            {props.Portfolio.projectArr.map((project, idx) => {
              console.log(project);
              return (
                <div className="project" key={idx}>
                  <p className="type">
                    {project.type == "makeit"
                      ? "메이킷 프로젝트"
                      : "외부프로젝트"}
                  </p>
                  <p className="title">{project.content.title}</p>{" "}
                  <TextEllipsis lines={2} tag={"p"} tagClass={"content"}>
                    {project.content.content}
                  </TextEllipsis>
                </div>
              );
            })}
          </div>
        </section>

        <section className="tag">
          <p>관련태그</p>
          <div>
            {props.Portfolio.tagArr.map((tag, idx) => {
              return <span key={idx}>{tag}</span>;
            })}
          </div>
        </section>
      </DetailDiv>
    </>
  );
}

export default ProContent;
