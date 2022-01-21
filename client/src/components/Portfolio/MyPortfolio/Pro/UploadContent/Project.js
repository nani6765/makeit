import React, { useState, useEffect } from "react";

import ProjectModal from "../../ProjectModal.js";
import TextEllipsis from "react-text-ellipsis";

import { ProjectSection } from "../../../CSS/MyPortpolio/UploadCSS.js";

function Project(props) {
  const [ProjectFlag, setProjectFlag] = useState(false);

  const DeleteHandler = (idx) => {
    let temp = [...props.ProjectArr];
    var removed = temp.splice(idx, 1);
    props.setProjectArr([...temp]);
  };

  return (
    <>
      <ProjectSection>
        <label>참여한 프로젝트 목록</label>
        <div className="list">
          <div
            className="addition"
            onClick={() => {
              setProjectFlag(true);
            }}
          >
            <i className="bi bi-plus-lg"></i>
          </div>
          {props.ProjectArr.map((project, idx) => {
            return (
              <div
                className="project"
                key={idx}
                onClick={() => DeleteHandler(idx)}
              >
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
      </ProjectSection>
      {ProjectFlag && (
        <ProjectModal
          ProjectFlag={ProjectFlag}
          setProjectFlag={setProjectFlag}
          ProjectArr={props.ProjectArr}
          setProjectArr={props.setProjectArr}
        />
      )}
    </>
  );
}

export default Project;
