import React, { useState, useEffect } from "react";
import { InfoSection } from "../../../CSS/MyPortpolio/ProductionCSS";
import { Spinner } from "react-bootstrap";
import LinkModal from "./LinkModal.js";
import axios from "axios";

function Info(props) {
  const [Loading, setLoading] = useState(false);
  const [LinkFlag, setLinkFlag] = useState(false);

  const FieldHandler = (e) => {
    console.log("??");
    if (e.target.checked) {
      let temp = [...props.FieldArr];
      temp.push(e.target.id);
      props.setFieldArr(temp);
    } else {
      let temp = props.FieldArr.filter((film) => {
        return e.target.id !== film;
      });
      props.setFieldArr(temp);
    }
  };

  const ImgUploadHandler = async (e) => {
    setLoading(true);
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart.form-data" },
    };
    formData.append("file", e.target.files[0]);
    await axios
      .post("/api/portfolio/prod/profile", formData, config)
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          props.setProfileImg(response.data.filePath);
        } else {
          alert("파일을 저장하는 데 실패하였습니다.");
        }
      });
  };

  const LinkTypeCheck = (type) => {
    if (type === null) {
      return <i className="bi bi-link-45deg" />;
    }
    // eslint-disable-next-line default-case
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

  return (
    <>
      <InfoSection>
        <div className="profileImg">
          {Loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#c4c4c4",
                height: "auto",
                minHeight: "200px",
                borderRadius: "5px",
              }}
            >
              <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
              </Spinner>
            </div>
          ) : (
            <label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => ImgUploadHandler(e)}
              />
              <img src={props.ProfileImg} />
            </label>
          )}
        </div>
        <div className="links">
          <div>
            {props.LinkArr.map((item, idx) => {
              let key = item.value.match(
                /youtu|instagram|facebook|linkedin|twitter|vimeo/i
              );
              let Tag = LinkTypeCheck(key);
              return (
                <span
                  className={item.value !== "" ? "active" : null}
                  key={idx}
                  onClick={() => setLinkFlag(idx + 1)}
                >
                  {Tag}
                </span>
              );
            })}
          </div>
        </div>
        <div className="name infoDiv">
          <label>프로덕션명</label>
          <div>
            <input
              type="text"
              value={props.ProName}
              onChange={(e) => props.setProName(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="field infoDiv">
          <label>전문분야</label>
          <div className="contentDiv">
            <div>
              <input
                type="checkbox"
                id="general"
                defaultChecked={props.FieldArr.includes("general")}
                onClick={(e) => {
                  FieldHandler(e);
                }}
              />
              <label htmlFor="general">일반영상</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="youtube"
                defaultChecked={props.FieldArr.includes("youtube")}
                onClick={(e) => {
                  FieldHandler(e);
                }}
              />
              <label htmlFor="youtube">유튜브제작</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="special"
                defaultChecked={props.FieldArr.includes("special")}
                onClick={(e) => {
                  FieldHandler(e);
                }}
              />
              <label htmlFor="special">특수영상</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="ad"
                defaultChecked={props.FieldArr.includes("ad")}
                onClick={(e) => {
                  FieldHandler(e);
                }}
              />
              <label htmlFor="ad">광고/홍보영상</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="online"
                defaultChecked={props.FieldArr.includes("online")}
                onClick={(e) => {
                  FieldHandler(e);
                }}
              />
              <label htmlFor="online">온라인생중계</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="ani"
                defaultChecked={props.FieldArr.includes("ani")}
                onClick={(e) => {
                  FieldHandler(e);
                }}
              />
              <label htmlFor="ani">애니메이션</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="filming"
                defaultChecked={props.FieldArr.includes("filming")}
                onClick={(e) => {
                  FieldHandler(e);
                }}
              />
              <label htmlFor="filming">촬영</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="edit"
                defaultChecked={props.FieldArr.includes("edit")}
                onClick={(e) => {
                  FieldHandler(e);
                }}
              />
              <label htmlFor="edit">편집/자막</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="etc"
                defaultChecked={props.FieldArr.includes("etc")}
                onClick={(e) => {
                  FieldHandler(e);
                }}
              />
              <label htmlFor="etc">기타</label>
            </div>
          </div>
        </div>
        <div className="location infoDiv">
          <label>소재지</label>
          <div>
            <input
              type="text"
              value={props.ProLocation}
              onChange={(e) => props.setProLocation(e.currentTarget.value)}
            />
          </div>
        </div>
      </InfoSection>
      {LinkFlag && (
        <LinkModal
          LinkFlag={LinkFlag}
          setLinkFlag={setLinkFlag}
          LinkArr={props.LinkArr}
          setLinkArr={props.setLinkArr}
        />
      )}
    </>
  );
}

export default Info;
