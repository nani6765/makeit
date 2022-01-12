import React, { useState, useEffect, useRef } from "react";
import { ModalDiv } from "../../../CSS/MyPortpolio/ProductionCSS";

function ProjectModal(props) {
  const ref = useRef();
  useOnClickOutside(ref, () => props.setProjectFlag(false));

  const [ProjectTitle, setProjectTitle] = useState("");
  const [ProjectURL, setProjectURL] = useState("");
  const [ProjectContent, setProjectContent] = useState("");
  const [Loading, setLoading] = useState(false);
  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!(ProjectTitle && ProjectURL && ProjectContent)) {
      return alert("모든 항목을 채워주세요.");
    }

    let project = {
      title: ProjectTitle,
      url: ProjectURL,
      content: ProjectContent,
    };

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
  };

  const DeleteHandler = (e) => {
    let temp = [...props.ProjectArr];
    var removed = temp.splice(props.ProjectFlag - 1, 1);
    props.setProjectArr([...temp]);
    props.setProjectFlag(false);
  };

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

  return (
    <ModalDiv>
      {Loading && (
        <div className="projectModal" ref={ref}>
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
        </div>
      )}
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
