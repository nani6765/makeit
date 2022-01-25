import React, { useState, useEffect } from "react";
import { useHistory, useParams, withRouter } from "react-router-dom";

import Loading from "../../../utils/view/Page/Loading.js";
import ProjectDetailContent from "./ProjectDetailContent.js";

import { CommonMarginDiv } from "../../../CommonCSS.js";

import axios from "axios";

function ProjectDetail() {
  const Params = useParams();
  const history = useHistory();

  const [ProjectInfo, setProjectInfo] = useState(null);
  const [LoadingFlag, setLoadingFlag] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setLoadingFlag(true);
    let body = {
      url: Params.url,
    };

    await axios
      .post("/api/portfolio/project/getDetail", body)
      .then((response) => {
        if (response.data.success) {
          setLoadingFlag(false);
          if (response.data.projectInfo === null) {
            setProjectInfo(null);
            alert("잘못된 URL입니다.");
            history.push("/");
          } else {
            setProjectInfo(response.data.projectInfo);
          }
        }
      });

    return () => {};
  }, []);

  return (
    <CommonMarginDiv>
      {LoadingFlag ? (
        <Loading />
      ) : (
        ProjectInfo && <ProjectDetailContent ProjectInfo={ProjectInfo} />
      )}
    </CommonMarginDiv>
  );
}

export default withRouter(ProjectDetail);
