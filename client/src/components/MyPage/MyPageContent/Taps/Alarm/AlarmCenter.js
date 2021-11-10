import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebase from "../../../../../config/firebase.js";

import AlarmListFnc from "./AlarmListFnc.js";
import ChatListFnc from "./ChatListFnc.js";
import axios from "axios";

function AlarmCenter(props) {
  const user = useSelector((state) => state.user);

  const [ChatList, setChatList] = useState([]);
  const [AlarmList, setAlarmList] = useState([]);
  const [Loading, setLoading] = useState(null);
  const [AlarmSkip, setAlarmSkip] = useState(0);

  let UserRef = firebase.database().ref(`users/${user.userData.uid}/`);

  const GetAlarmList = (limit) => {
    let body = {
      uid: user.userData.uid,
      skip: AlarmSkip,
      limit: limit,
    };
    axios.post("/api/alarm/getAlarm", body).then((response) => {
      if (response.data.success) {
        let temp = [...AlarmList, ...response.data.alarms];
        setAlarmList(temp);
        setAlarmSkip(Math.min(AlarmSkip + limit, temp.length));
      }
    });
  };

  useEffect(() => {
    let temp = [];
    setChatList([...temp]);
  }, []);

  useEffect(() => {
    setLoading(false);
    if (props.AlarmType === "note") {
      let temp = [];
      setChatList(...temp);
      UserRef.child("chats").on("value", (DataSnapshot) => {
        setChatList(DataSnapshot.val());
      });
    } else {
      GetAlarmList(10);
    }
    setLoading(true);
  }, [props.AlarmType]);

  return (
    <>
      {Loading ? (
        props.AlarmType === "note" ? (
          <ChatListFnc ChatList={ChatList} />
        ) : (
          <AlarmListFnc AlarmList={AlarmList} GetAlarmList={GetAlarmList} />
        )
      ) : null}
    </>
  );
}

export default AlarmCenter;
