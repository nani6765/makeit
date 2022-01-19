import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import ParticipateModal from "./ParticipateModal.js";
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

  const EditHadler = () => {};

  const ChatHandler = () => {};

  const PartSubmit = () => {

  };

  useEffect(() => {
    if(user.userData.uid !== props.ProjectInfo.auther.uid) {
      setMyPortfolioIdx(props.ProjectInfo.participater.findIndex(i => i.uid === user.userData.uid));
    }
  }, [])
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
          {user.userData !== null && (
            user.userData.uid === props.ProjectInfo.auther.uid ? (
              <>
              <label>참여자 목록</label>
              <div>
                <p>신청자 목록</p>
                {
                  props.ProjectInfo.participater.map((temp, idx) => {
                    if(!temp.accept) {    
                      return (
                      <ParticipateSection key={idx}>
                        <figure className="img">
                          <img src={temp.portfolio.profileImg} />
                        </figure>
                        <div className="title">
                          {temp.portfolio.titletext}
                        </div>
                        <div className="info">
                            {temp.type} / {temp.portfolio.Name}
                        </div>
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
              <label></label>
              <ParticipateSection>
                <figure className="img">
                  <img src={props.ProjectInfo.participater[MyPortfolioIdx].portfolio.profileImg} />
                </figure>
                <div className="title">
                  {props.ProjectInfo.participater[MyPortfolioIdx].portfolio.titletext}
                </div>
                <div className="info">
                    {props.ProjectInfo.participater[MyPortfolioIdx].type} / {props.ProjectInfo.participater[MyPortfolioIdx].portfolio.Name}
                </div>
              </ParticipateSection> 
              </>)
              : ( <button onClick={() => setModalFlag(true)}>참여 신청하기</button> )
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
