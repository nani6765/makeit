import React, { useState, useEffect, useRef } from 'react';
import Avatar from "react-avatar";
import UserModal from "./Modal/UserModal.js";
import GuestModal from "./Modal/GuestModal.js";
import DeleteModal from './Modal/DeleteModal.js';

function QuotationCard(props) {
  const [hambucControl, sethambucControl] = useState(false);
  const [ModalFlag, setModalFlag] = useState(false);

  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

    return (
          <div
            className={props.containerCN}
            onClick={(e) => {
              if(e.target.className !== "bi bi-three-dots" && e.target.className !== "delete" && e.target.className !== "background")
                props.showDetail(props.idx);
            }}
          >
            <div className="hambuc" ref={innerRef}>
              <i
                className="bi bi-three-dots"
                onClick={() => { props.setQTIdx(-1); sethambucControl(!hambucControl);}}
              ></i>
              {hambucControl && (
                props.user.uid === props.quotation.uid
                ? <UserModal Info={props.quotation} setModalFlag={setModalFlag}/>
                : <GuestModal postInfo={props.quotation} />
              )}
            </div>
            {ModalFlag && 
            <DeleteModal
                _id={props.quotation._id}
                setModalFlag={setModalFlag}
            />}
            <Avatar
              src={props.quotation.auther.photoURL}
              size="70"
              round={true}
              style={{
                border: "1px solid #c6c6c6",
                display: "block",
                margin: "0 auto",
              }}
            />
            <p>
              {props.quotation.auther.displayName}
              <i className="bi bi-heart"></i>
            </p>
            <p className="quotationTitle title">
              {props.quotation.oneLineIntroduce}
            </p>
            <div className="filter">
              <p>• 예상 금액 : {props.quotation.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              <p>• 예상 기간 : {props.quotation.deadline}</p>
              <p>• 평균 응답 시간 : 미구현?</p>
            </div>
          </div>
    )
}

function useOuterClick(callback) {
  const callbackRef = useRef();
  const innerRef = useRef();
  useEffect(() => {
    callbackRef.current = callback;
  });
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      )
        callbackRef.current(e);
    }
  }, []);
  return innerRef;
}

export default QuotationCard
