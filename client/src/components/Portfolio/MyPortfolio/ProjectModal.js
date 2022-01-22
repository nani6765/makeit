import React, { useState, useEffect, useRef } from "react";
import { ModalDiv } from "../CSS/MyPortpolio/UploadCSS.js";
import MakeItContent from "./MakeItContent.js";
import { useSelector } from "react-redux";
import axios from "axios";

function ProjectModal(props) {
  const ref = useRef();
  const user = useSelector((state) => state.user);

  useOnClickOutside(ref, () => props.setProjectFlag(false));

  const [ProjectTitle, setProjectTitle] = useState("");
  const [ProjectURL, setProjectURL] = useState("");
  const [ProjectContent, setProjectContent] = useState("");
  const [ProjectList, setProjectList] = useState([]);
  //const [Loading, setLoading] = useState(true);
  const [ContentFlag, setContentFlag] = useState(true);

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!(ProjectTitle && ProjectURL && ProjectContent)) {
      return alert("모든 항목을 채워주세요.");
    }

    let project = {
      content: {
        id: user.userData.uid + "_" + Date.now(),
        title: ProjectTitle,
        url: ProjectURL,
        content: ProjectContent,
      },
      type: "other",
    };

    let temp = [...props.ProjectArr];
    temp.push(project);
    props.setProjectArr([...temp]);
    props.setProjectFlag(false);

    /*
    if (props.ProjectFlag === true) {
      let temp = [...props.ProjectArr];
      temp.push(project);
      props.setProjectArr([...temp]);
      props.setProjectFlag(false);
    } else {
      let temp = [...props.ProjectArr];
      temp[props.ProjectFlag - 1] = project;
      props.setProjectArr([...temp]);
      props.setProjectFlag(false);
    }
    */
  };

  const DeleteHandler = (e) => {
    let temp = [...props.ProjectArr];
    var removed = temp.splice(props.ProjectFlag - 1, 1);
    props.setProjectArr([...temp]);
    props.setProjectFlag(false);
  };

  /*

  useEffect(() => {
    try {
      if (props.ProjectFlag !== true) {
        setProjectTitle(props.ProjectArr[props.ProjectFlag - 1].title);
        setProjectURL(props.ProjectArr[props.ProjectFlag - 1].url);
        setProjectContent(props.ProjectArr[props.ProjectFlag - 1].content);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(true);
    }
  }, []);

  */

  return (
    <ModalDiv>
      <div className="projectModal" ref={ref}>
        <p className="header">
          <span
            className="target"
            onClick={() => setContentFlag(true)}
            style={{ fontWeight: ContentFlag === true ? "bold" : null }}
          >
            Makeit 프로젝트 등록
          </span>
          <span className="divider">|</span>
          <span
            className="target"
            onClick={() => setContentFlag(false)}
            style={{ fontWeight: ContentFlag === false ? "bold" : null }}
          >
            외부 프로젝트 등록
          </span>
        </p>
        {ContentFlag ? (
          <>
            <MakeItContent
              ProjectArr={props.ProjectArr}
              setProjectFlag={props.setProjectFlag}
              setProjectArr={props.setProjectArr}
            />
          </>
        ) : (
          <>
            {" "}
            <input
              id="projectTitle"
              type="text"
              placeholder="프로젝트 제목"
              value={ProjectTitle}
              onChange={(e) => setProjectTitle(e.currentTarget.value)}
            />
            <label htmlFor="url">영상 URL</label>
            <input
              id="url"
              type="text"
              value={ProjectURL}
              onChange={(e) => setProjectURL(e.currentTarget.value)}
            />
            <label htmlFor="content">프로젝트 내용</label>
            <textarea
              id="content"
              value={ProjectContent}
              onChange={(e) => setProjectContent(e.currentTarget.value)}
            />
            <div className="btnDiv">
              <span>
                {props.ProjectFlag !== true && (
                  <button className="delete" onClick={(e) => DeleteHandler(e)}>
                    삭제
                  </button>
                )}
              </span>
              <div>
                <button
                  className="cancel"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setProjectFlag(false);
                  }}
                >
                  취소
                </button>
                <button className="submit" onClick={(e) => SubmitHandler(e)}>
                  등록
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </ModalDiv>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default ProjectModal;
