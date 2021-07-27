import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { firebase } from "../../../../firebase.js";
import axios from 'axios';

function AlarmCenter(props) {
    const user = useSelector((state) => state.user);

    const [AlarmList, setAlarmList] = useState([]);

    let ChatRef = firebase.database().ref("chats");
    let UserRef = firebase.database().ref("users");

    useEffect(() => {   
        if(props.AlarmType === "쪽지함") {
            try {
                let body = {
                    uid: user.userData.uid,
                }
                axios.post("/api/chat/getChatList", body).then((response) => {
                    if(response.data.success) {
                        let temp = [...response.data.chatInfo];
                        setAlarmList(temp);
                        AlarmList.map((alarm, idx) => {
                            //상대방 정보 가져오기
                            let OthersInfo = {
                                uid: alarm.chatRoomId.replace(user.userData.uid, ""),
                            }
                            UserRef.child(OthersInfo.uid).once('value', (DataSnapShot) => {
                                OthersInfo.image = DataSnapShot.val().image;
                            })

                            //채팅방 정보 가져오기
                        });                   
                    }
                });
                
            } catch (error) {
                alert(error);
            }
            /*
            ChatRef.orderByChild(user.userData.uid).on("value", (DataSnapShot) => {
                console.log("DataSnapShot", DataSnapShot.val().key);
            });*/
        } else {
            let body = {
                uid: user.userData.uid,
            }
            axios.post("/api/alarm/getAlarm", body).then((response) => {
                if(response.data.success) {
                    let temp = [...response.data.alarms];
                    setAlarmList(temp);
                }
            });
        }
    }, [props.AlarmType])

    return (
        <div>
            
        </div>
    )
}

export default AlarmCenter
