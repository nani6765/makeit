import React, { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import axios from "axios";

import Loading from "../../utils/view/Page/Loading.js";
import { CommonMarginDiv } from "../../CommonCSS.js";
import { BtnDiv, ParticipateSection } from "../CSS/Project/ProjectDetailCSS.js";

function ProjectList(props) {
    const history = useHistory();

    const [isLoading, setisLoading] = useState(false);
    const [ProjectList, setProjectList] = useState([]);
    const [PageLen, setPageLen] = useState(1);
    const [PageIdxArr, setPageIdxArr] = useState([1]);

    useEffect(() => {
        setisLoading(true);

        let body = {};
        let date = new Date();
        let endDate = date.getFullYear() + "-"
        + (date.getMonth() + 1).toString().padStart(2, "0") + "-"
        + date.getDate().toString().padStart(2, "0");

        if(props.URL.subCategory === "진행 중 프로젝트") {
            body = {
                skip: props.URL.pIdx * 6,
                $expr: {
                    $gte: [{ "$arrayElemAt": ["$timeline.endDate", -1] }, endDate]
                }
            }
        } else {
            body = {
                skip: props.URL.pIdx * 6,
                $expr: {
                    $lt: [{ "$arrayElemAt": ["$timeline.endDate", -1] }, endDate]
                }
            }
        }

        axios.post("/api/portfolio/project/getList", body).then((response) => {
            if(response.data.success) {
                setProjectList([...response.data.projects]);   
            }
            setisLoading(false);
        })
    }, [props.URL]);
    

  return (
    <CommonMarginDiv>
        <BtnDiv>
            <button onClick={() => history.push("/portfolio/project/upload")}>게시하기</button>
        </BtnDiv>
      {isLoading ? (
        <Loading />
      ) : (
        ProjectList.map((content, idx) => {
          return (
            <ParticipateSection
              key={idx}
              onClick={(e) => {
                history.push(`/portfolio/project/${content.url}`);
              }}
            >
                <figure className="img">
                    <img src={content.thumbnail} />
                </figure>
                <div className="title">{content.title}</div>
                <div className="info">
                {content.timeline[0].startDate} ~ {content.timeline[content.timeline.length-1].endDate}
                </div>
            </ParticipateSection>
          );
        })
      )}
    </CommonMarginDiv>
  );
}

export default withRouter(ProjectList);
