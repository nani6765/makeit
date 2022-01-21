import React, { useState } from "react";

import ProjectModal from "../../ProjectModal.js";

import { ProjectSection } from "../../../CSS/MyPortpolio/UploadCSS.js";

function Project(props) {
  const [ProjectFlag, setProjectFlag] = useState(false);
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
              <div className="project" key={idx}>
                <p className="title">{project.title}</p>
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
