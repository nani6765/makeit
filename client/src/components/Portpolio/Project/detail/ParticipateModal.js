import React, {useState, useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import {ParticipateModalDiv} from "../../CSS/Project/ProjectDetailCSS.js"

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
        type: type
      }
      console.log(body);
      axios.post("/api/portfolio/project/Participate", body).then((response) => {
        if(!response.data.success){
          alert("등록실패했지렁 ㅋㅋ")
        } else {
          props.setModalFlag(false);
        }
      })
    }
  }

  useOnClickOutside(ref, () => props.setModalFlag(false));
  return <ParticipateModalDiv>
    <div className="innerDiv" ref={ref}>
    {!Loading &&
    (PortfolioList.length 
    ? PortfolioList.map((portfilio, idx) => {
      return(
        <section className="portfilio" key={idx} onClick={(e) => {
          ClickFunc(e, portfilio.titletext, portfilio._id, portfilio.type)
        }}>
          <figure className="img">
            <img src={portfilio.profileImg} />
          </figure>
          <div className="title">
           {portfilio.titletext}
          </div>
          <div className="info">
            {portfilio.type} /  {portfilio.prodName}
          </div>
        </section>
      )
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
