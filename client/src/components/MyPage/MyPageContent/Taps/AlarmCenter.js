import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { firebase } from "../../../../firebase.js";

import AlarmListFnc from "./AlarmListFnc.js";
import ChatListFnc from "./ChatListFnc.js";
import axios from "axios";

function AlarmCenter(props) {
  const user = useSelector((state) => state.user);

  const [ChatList, setChatList] = useState([]);
  const [AlarmList, setAlarmList] = useState([]);
  const [Loading, setLoading] = useState(null);
  let ChatRef = firebase.database().ref("chats");
  let UserRef = firebase.database().ref("users");

  useEffect(() => {
    setLoading(false);
    if (props.AlarmType === "쪽지함") {
      try {
        let body = {
          uid: user.userData.uid,
        };
        axios.post("/api/chat/getChatList", body).then((response) => {
          if (response.data.success) {
            let temp = [...response.data.chatInfo];
            setChatList(temp);
            if(ChatList.length > 0) {
                let newChatList = [];
                ChatList.map((alarm, idx) => {
                    //상대방 정보 가져오기
                    let OthersInfo = {
                        uid: alarm.chatRoomId.replace(user.userData.uid, ""),
                    };
                    UserRef.child(OthersInfo.uid).once("value", (DataSnapShot) => {
                        OthersInfo.image = DataSnapShot.val().image;
                    });
                    let newChat = {
                        chatRoomId: alarm.chatRoomId,
                        url: alarm.url,
                        OthersInfo: OthersInfo,
                    }
                    newChatList.push(newChat);
                    //채팅방 정보 가져오기
                });
                setChatList(newChatList);
            }
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
      };
      axios.post("/api/alarm/getAlarm", body).then((response) => {
        if (response.data.success) {
          let temp = [...response.data.alarms];
          setAlarmList(temp);
        }
      });
    }
    setLoading(true);
  }, [props.AlarmType]);

  useEffect(() => {
    console.log(ChatList);
  }, [ChatList]);

  return (
    <>
      {Loading ? (
        props.AlarmType === "쪽지함" ? (
          <ChatListFnc ChatList={ChatList} />
        ) : (
          <AlarmListFnc AlarmList={AlarmList} />
        )
      ) : null}
    </>
  );
}

export default AlarmCenter;
