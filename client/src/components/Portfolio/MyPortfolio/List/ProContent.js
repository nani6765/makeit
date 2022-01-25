import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { BtnDiv, DetailDiv } from "../../CSS/MyPortpolio/DetailCSS.js";
import TextEllipsis from "react-text-ellipsis";
import ImageModal from "./ImageModal.js";
import axios from "axios";

function ProContent(props) {
  const user = useSelector((state) => state.user);

  const [ImageFlag, setImageFlag] = useState(false);
  const [Text, setText] = useState(``);

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

  const SwitchState = async () => {
    setText(`공개 상태를 변경중입니다.\n창을 닫지 말아주세요.`);
    let body = {
      id: props.Portfolio._id,
      state: props.Portfolio.public,
    };
    await axios
      .post("/api/portfolio/myPortfolio/changeState", body)
      .then(() => {
        setText(``);
      });
    window.location.reload();
  };

  return (
    <>
    {
      user.userData &&
      user.userData.uid === props.Portfolio.uid &&
      <BtnDiv>
        {Text && <p>{Text}</p>}
        <div>
          <button onClick={() => SwitchState()}>
            {props.Portfolio.public ? "공개" : "비공개"}
          </button>
          <button className="edit">수정</button>
        </div>
      </BtnDiv>
    }
      <DetailDiv>
        <p className="title">{props.Portfolio.titletext}</p>
        <section className="info pro">
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
            <label>이름</label>
            <p>{props.Portfolio.name}</p>
          </div>
          <div className="infoDiv proName">
            <label>활동명</label>
            <p>{props.Portfolio.proName}</p>
          </div>
          <div className="infoDiv gender">
            <label>성별</label>
            <p>{props.Portfolio.gender}</p>
          </div>
          <div className="infoDiv field">
            <label>분야</label>
            <p>{props.Portfolio.field}</p>
          </div>
          <div className="location">
            <label>활동지역</label>
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
        <section className="profile">
          <p>프로필 이미지({props.Portfolio.profileImgList.length})</p>
          <div className="list">
            {props.Portfolio.profileImgList.map((src, idx) => {
              if (idx < 3) {
                return (
                  <article key={idx} onClick={() => setImageFlag(true)}>
                    <figure style={{ backgroundImage: `url(${src}` }} />
                  </article>
                );
              }
            })}
          </div>
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
      {ImageFlag && (
        <ImageModal
          profileImgList={props.Portfolio.profileImgList}
          setImageFlag={setImageFlag}
        />
      )}
    </>
  );
}

export default ProContent;
