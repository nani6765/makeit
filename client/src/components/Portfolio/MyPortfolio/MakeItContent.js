import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MakeItContentDiv } from "../CSS/MyPortpolio/UploadCSS.js";
import { Spinner } from "react-bootstrap";

import axios from "axios";
import moment from "moment";
import "moment/locale/ko";

function MakeItContent(props) {
  const user = useSelector((state) => state.user);
  const [Loading, setLoading] = useState(true);
  const [ProjectList, setProjectList] = useState([]);

  useEffect(() => {
    let body = {
      uid: user.userData.uid,
    };

    axios.post("/api/portfolio/getMyProject", body).then((response) => {
      if (response.data.success) {
        let tempArr = [...response.data.projectList];
        let resultArr = tempArr.filter(
          (temp) =>
            props.ProjectArr.find(
              (project) => project.content.id === temp._id
            ) === undefined
        );

        console.log(`resultArr: ${[...resultArr]}`);
        setProjectList([...resultArr]);
      }
      setLoading(false);
    });
  }, []);

  const SubmitHandler = (project) => {
    let Project = {
      type: "makeit",
      content: {
        id: project._id,
        title: project.title,
        content: project.introduce,
        url: project.url,
      },
    };

    let temp = [...props.ProjectArr];
    temp.push(Project);
    props.setProjectArr([...temp]);
    props.setProjectFlag(false);
  };

  const SetTime = (a) => {
    return moment(a).format("YYYY.MM.DD");
  };

  return (
    <MakeItContentDiv style={{ width: "100%", padding: "0px" }}>
      {!Loading ? (
        <div className="list">
          {ProjectList.length ? (
            ProjectList.map((project, idx) => {
              return (
                <article key={idx} onClick={(e) => SubmitHandler(project)}>
                  <figure>
                    <img src={project.thumbnail} alt="" />
                    <figcaption>
                      <span>{project.title}</span>
                      <br />
                      {SetTime(project.updatedAt)}
                    </figcaption>
                  </figure>
                </article>
              );
            })
          ) : (
            <p>등록할 수 있는 프로젝트가 없습니다.</p>
          )}
        </div>
      ) : (
        <div className="loading">
          <Spinner animation="border" />
        </div>
      )}
    </MakeItContentDiv>
  );
}

export default MakeItContent;
