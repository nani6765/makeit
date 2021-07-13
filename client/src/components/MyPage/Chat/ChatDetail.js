import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function ChatDetail(props) {
    const [CheckUser, setCheckUser] = useState(false);
    const [UserFlag, setUserFlag] = useState(false);
    
    useEffect(() => {
        if (props.user.userData != undefined)
            setUserFlag(true);
    }, [props.user.userData]);

    useEffect(() => {
        if(UserFlag) {
            let body = {};
            body.chatNum = props.match.params.chatid;
            body.user = props.user.userData._id;
            console.log("body", body)
            axios.post("/api/chat/chatdetail/checkuser", body).then((response) => {
                console.log("req", response.data);
                if (response.data.success) {
                    if(response.data.checkResult) setCheckUser(true);
                    else {
                        alert("유효하지 않은 사용자입니다.");
                        props.history.goBack();
                    }
                } else {
                    alert("error");
                }
            });
        }
    }, [UserFlag])

    return (
        <>
        { CheckUser 
        ? (
            <div>
                냠냠
            </div>
        )
        : null}
        
        </>
    )
}

export default withRouter(ChatDetail)
