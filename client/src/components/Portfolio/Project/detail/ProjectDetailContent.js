import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import ParticipateModal from "./ParticipateModal.js";
import ParticiPate from "./ParticiPate.js";
import {
  BtnDiv,
  ProjectDetailContentDiv,
  ParticipateSection
} from "../../CSS/Project/ProjectDetailCSS.js";
import axios from "axios";


function ProjectDetailContent(props) {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const [ModalFlag, setModalFlag] = useState(false);
  const [MyPortfolioIdx, setMyPortfolioIdx] = useState(-1);
  const [TodayDate, setTodayDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date(props.ProjectInfo.timeline[props.ProjectInfo.timeline.length - 1].endDate));

  const EditHadler = () => {

  };

  const ChatHandler = () => {
    let body = {
      me: user.userData.uid,
      you: props.ProjectInfo.auther.uid,
    };

    axios.post("/api/chat/create", body).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        history.push(`/chat/${response.data.resultUrl}`);
      } else {
        console.log("error");
      }
    });

  };

  const PartSubmit = () => {

  };

  useEffect(() => {
    if(user.userData.uid !== props.ProjectInfo.auther.uid) {
      setMyPortfolioIdx(props.ProjectInfo.participater.findIndex(i => i.uid === user.userData.uid));
    }
    let date = new Date(props.ProjectInfo.timeline[props.ProjectInfo.timeline.length - 1].endDate);
    date.setDate(date.getDate() + 1);
    setEndDate(date);
  }, [])

  return (
    <>
      <BtnDiv>
        {user.userData !== null ? (
          user.userData.uid === props.ProjectInfo.auther.uid ? (
            <button onClick={() => history.push(`/portfolio/project/edit/${props.ProjectInfo.url}`)}>수정하기</button>
          ) : (
            <button onClick={ChatHandler}>쪽지보내기</button>
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
          {user.userData !== null && (
            user.userData.uid === props.ProjectInfo.auther.uid ? (
              <>
              <div>
              <p>참여자 목록</p>
              {
                  props.ProjectInfo.participater.map((temp, idx) => {
                    if(temp.accept) {    
                      return (
                      <ParticipateSection key={idx} /*onClick={() => history.push(`/portfolio/${temp.portfolio.url}`)}*/>
                        <ParticiPate participate={temp} />
                      </ParticipateSection> 
                    )}
                  })
                }
              </div>
              <div>
                <p>신청자 목록</p>
                {
                  props.ProjectInfo.participater.map((temp, idx) => {
                    if(!temp.accept) {    
                      return (
                      <ParticipateSection key={idx} /*onClick={() => history.push(`/portfolio/${temp.portfolio.url}`)}*/>
                        <ParticiPate participate={temp} />
                      </ParticipateSection> 
                    )}
                  })
                }
              </div>
              </>
            ) : (
               MyPortfolioIdx >= 0
              ? (
              <>
              <label>신청된 나의 포트폴리오</label>
              <ParticipateSection>
                <figure className="img">
                  <img src={props.ProjectInfo.participater[MyPortfolioIdx].portfolio.profileImg} />
                </figure>
                <div className="title">
                  {props.ProjectInfo.participater[MyPortfolioIdx].portfolio.titletext}
                </div>
                <div className="info">
                    {props.ProjectInfo.participater[MyPortfolioIdx].type} / {props.ProjectInfo.participater[MyPortfolioIdx].portfolio.name}
                </div>
              </ParticipateSection> 
              </>)
              : ( TodayDate <= EndDate
                ? <button onClick={() => setModalFlag(true)}>참여 신청하기</button>
                : "마감된 프로젝트입니다."
              )
            )
          )}
          {ModalFlag && <ParticipateModal setModalFlag={setModalFlag} ProjectInfo = {props.ProjectInfo}/>}
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
