import React, { useState, useEffect, useRef } from 'react'
import { useHistory, withRouter } from 'react-router-dom';
import { ModalDiv } from "../CSS/MyPortpolio/ProductionCSS.js";

function UploadModal(props) {
    const ref = useRef();
    const history = useHistory();
    useOnClickOutside(ref, () => props.setModalFlag(false));

    return (
        <ModalDiv>
            <div className='uploadModal' ref={ref}>
                <p className='title'>포트폴리오의 목적을 선택해주세요!</p>
                <section className='pro box' onClick={() => {history.push("/portfolio/pro/upload")}}>
                    <img src={"https://kr.object.ncloudstorage.com/makeit/portfolio/default.png"}/>
                    <p>프로<br/><span>(배우/스태프/etc)</span></p>
                </section>
                <section className='prod box' onClick={() => {history.push("/portfolio/prod/upload")}}>
                    <img src={"https://kr.object.ncloudstorage.com/makeit/portfolio/default.png"}/>
                    <p>프로덕션<br/><span>(제작사/기획자)</span></p>
                </section>
            </div>
        </ModalDiv>
    )
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
  

export default withRouter(UploadModal);
