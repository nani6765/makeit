import React, {useState, useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import {ParticipateModalDiv, ParticipateSection} from "../../CSS/Project/ProjectDetailCSS.js"

import axios from "axios";
function ParticipateModal(props) {
  const [PortfolioList, setPortfolioList] = useState([]);
  const [Loading, setLoading] = useState(true);

  const ref = useRef();
  const user = useSelector(state => state.user);

  useEffect(() => {
    let body = {
      uid : user.userData.uid,
    };
    console.log(body);
    axios.post("/api/portfolio/project/getPortfolioList", body).then((response) => {
      setLoading(false);
      if(response.data.success) {
        setPortfolioList([...response.data.portList]);
      }
    })
  }, []);

  const ClickFunc = (e, title, id, type) => {
    if(window.confirm(`${title} 포트폴리오로 지원히겠습니까?`)){
      let body = {
        projectId : props.ProjectInfo._id,
        portfilioId : id,
        type: type,
        uid: user.userData.uid,
      }
      axios.post("/api/portfolio/project/Participate", body).then((response) => {
        if(!response.data.success){
          alert("등록실패했지렁 ㅋㅋ")
        } else {
          window.location.reload();
        }
      })
    }
  }

  const FieldToKorean = (text) => {
    switch (text) {
      case "general":
        return "일반영상";
      case "youtube":
        return "유튜브제작";
      case "special":
        return "특수영상";
      case "ad":
        return "광고/홍보영상";
      case "online":
        return "온라인생중계";
      case "ani":
        return "애니메이션";
      case "filming":
        return "촬영";
      case "edit":
        return "편집/자막";
      case "etc":
        return "기타";
      default:
        return "기타";
    }
  };

  useOnClickOutside(ref, () => props.setModalFlag(false));
  return <ParticipateModalDiv>
    <div className="innerDiv" ref={ref}>
    <span>공개된 포트폴리오로만 지원할 수 있습니다.</span>
    {!Loading &&
    (PortfolioList.length 
    ? PortfolioList.map((portfolio, idx) => {
      console.log(portfolio);
      if(portfolio.public){
        return(
          <ParticipateSection key={idx} onClick={(e) => ClickFunc(e, portfolio.titletext, portfolio._id, portfolio.type)}>
            <div className="img">
              <img src={portfolio.profileImg}/>
            </div>
            <p className="title">{portfolio.titletext}</p>
            <div className="info">
            <p>{portfolio.name} / {portfolio.type} / {portfolio.type == "프로" ? `${portfolio.field}` : FieldToKorean(portfolio.fieldArr[0]) + "..."}</p>
            </div>
          </ParticipateSection>
        )
      }
    })
    : <p>포폴등록먼저하셈</p>
    )}
    </div>
  </ParticipateModalDiv>;
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

export default ParticipateModal;
