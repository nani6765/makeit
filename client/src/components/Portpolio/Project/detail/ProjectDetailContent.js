import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import {
  BtnDiv,
  ProjectDetailContentDiv,
} from "../../CSS/Project/ProjectDetailCSS.js";

function ProjectDetailContent(props) {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const EditHadler = () => {};

  const ChatHandler = () => {};

  return (
    <>
      <BtnDiv>
        {user.userData !== null ? (
          user.userData.uid === props.ProjectInfo.auther.uid ? (
            <button>수정하기</button>
          ) : (
            <button>쪽지보내기</button>
          )
        ) : null}
      </BtnDiv>

      <ProjectDetailContentDiv>
        <section className="title">
          <h3>{props.ProjectInfo.title}</h3>
        </section>
        <section className="info">
          <div className="img">
            <img src={props.ProjectInfo.thumbnail} />
          </div>
          <div className="infoDiv introduce">
            <label>소개</label>
            <div>
              <p>{props.ProjectInfo.introduce}</p>
            </div>
          </div>
          <div className="infoDiv detailContent">
            <label>세부내용</label>
            <div>
              <p>{props.ProjectInfo.detailContent}</p>
            </div>
          </div>
          <div className="infoDiv location">
            <label>로케이션</label>
            <span>
              {props.ProjectInfo.location.map((area, idx) => {
                return (
                  <div key={idx}>
                    <p>{area}</p>
                  </div>
                );
              })}
            </span>
          </div>
        </section>
        <section className="timeline">
          <label>타임 라인</label>
          {props.ProjectInfo.timeline.map((time, idx) => {
            return (
              <div key={idx}>
                <p>
                  <span>{time.content}</span> : {time.startDate} ~{" "}
                  {time.endDate}
                </p>
              </div>
            );
          })}
        </section>
        <section className="participants">
          <label>참여자 목록</label>
          {user.userData !== null ? (
            user.userData.uid === props.ProjectInfo.auther.uid ? (
              <div>참여자 목록~~~</div>
            ) : (
              <button>참여 신청하기</button>
            )
          ) : null}
        </section>
        <section className="tag">
          <label>관련 태그</label>
          <div className="list">
            {props.ProjectInfo.tag.map((tag, idx) => {
              return (
                <div key={idx}>
                  <p>{tag}</p>
                </div>
              );
            })}
          </div>
        </section>
      </ProjectDetailContentDiv>
    </>
  );
}

export default withRouter(ProjectDetailContent);
