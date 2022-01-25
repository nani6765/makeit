import React, { useEffect, useState, useRef } from 'react';
import {useHistory, withRouter} from "react-router-dom";
import axios from "axios";

function ParticiPate(props) {
    const [ModalFlag, setModalFlag] = useState(false);
    const ref = useRef();
    const history = useHistory();
    useOnClickOutside(ref, () => setModalFlag(false));

    const MoveHandler = () => {
        history.push(`/portfolio/${props.participate.portfolio.url}`);
    }
    const AcceptHandler = async () => {
        if(window.confirm("해당 신청자를 수락하시겠습니까?\n(승인 시 변경할 수 없습니다.)")){
            let body = {
                id : props.participate._id,
            }
            await axios.post("/api/portfolio/project/accept", body).then(() => {
                window.location.reload();
            })
        }
    }
    const RejectHandler = async () => {
        if(window.confirm("해당 신청자를 반려하시겠습니까?")){
            let body = {
                id : props.participate._id,
            }
            await axios.post("/api/portfolio/project/reject", body).then(() => {
                window.location.reload();
            })
        }

    }

    return (
        <>
            <figure className="img">
                <img src={props.participate.portfolio.profileImg} />
            </figure>
            <div className="title">
                {props.participate.portfolio.titletext}
            </div>
            <div className="info">
                {props.participate.type} / {props.participate.portfolio.name}
            </div>
            {
                !props.participate.accept &&  (
                    <div className="hambuc" onClick={() => setModalFlag(true)}>
                <p>···</p>
                {
                ModalFlag && (
                <div className="partModal" ref={ref}>
                <span onClick={() => MoveHandler()}>이동</span>
                <span onClick={() => AcceptHandler()}>수락</span>
                <span className='reject' onClick={() => RejectHandler()}>거절</span>
                </div>
                )    
                }
            </div>
                )
            }
            
        </>
    );
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
  
export default withRouter(ParticiPate);
