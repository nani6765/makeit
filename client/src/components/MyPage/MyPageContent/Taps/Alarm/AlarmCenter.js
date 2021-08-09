import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { firebase } from "../../../../../firebase.js"

import AlarmListFnc from "./AlarmListFnc.js";
import ChatListFnc from "./ChatListFnc.js";
import axios from "axios";

function AlarmCenter(props) {
  const user = useSelector((state) => state.user);

  const [ChatList, setChatList] = useState([]);
  const [AlarmList, setAlarmList] = useState([]);
  const [Loading, setLoading] = useState(null);

  let UserRef = firebase.database().ref(`users/${user.userData.uid}/`);

  useEffect(() => {
    let temp = [];
    setChatList([...temp]);
  }, []);

  useEffect(() => {
    setLoading(false);
    if (props.AlarmType === "쪽지함") {
      let temp = [];
      setChatList(...temp);
      UserRef.child("chats").on("value", (DataSnapshot) => {
        setChatList(DataSnapshot.val());
      });
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
