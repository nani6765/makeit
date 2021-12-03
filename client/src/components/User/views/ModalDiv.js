import React from 'react'

import { ModalContainerDiv } from "../css/UserPageElement.js";

function ModalDiv(props) {

    const setMsg = () => {
        switch(props.modalType) {
            case "sendVerification":
                return <p>인증번호가 발송되었습니다.</p>
            case "failVerification":
                return <p>인증번호가 일치하지 않습니다.</p>
            case "checkVerification":
                return <p>인증번호가 확인되었습니다.</p>
            case "available":
                return <p>사용 가능한 닉네임입니다.</p>
            case "duplicate":
                return <p>이미 존재하는 닉네임입니다.</p>

        }
    }

    return (
        <ModalContainerDiv>
            <div className="background" onClick={() => props.setModalFlag(false)}>
            </div>
            <div className="container">
                <div className="content">
                    <div className="header">
                        <span>알림메세지</span>
                        <span onClick={() => props.setModalFlag(false)}>✕</span>
                    </div>
                    <div className="msg">{setMsg()}</div>
                </div>
                <div className="btnDiv">
                    <button onClick={() => props.setModalFlag(false)}>확인</button>
                </div>
            </div>
        </ModalContainerDiv>
    )
}

export default ModalDiv
