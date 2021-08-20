import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlarmTrue } from "../../../../redux/_actions/alarm_action.js";
import { firebase } from "../../../../firebase.js";
import axios from "axios";

import { ReactComponent as Bell } from "../../css/Bell.svg";
import { ReactComponent as PinBell } from "../../css/Bell_pin.svg";
import AlarmModal from "./AlarmModal.js";

function HeaderBell(props) {
  const user = useSelector((state) => state.user);
  const alarm = useSelector((state) => state.alarm);
  let dispatch = useDispatch();
  const UserRef = firebase.database().ref("users");

  const [AlarmCheck, setAlarmCheck] = useState(false);
  const [ChatCheck, setChatCheck] = useState(false);
  const [ChatCheckFin, setChatCheckFin] = useState(false);

  const AlarmChecked = async () => {
    let body = {
      uid: user.userData.uid,
    };
    try {
      await axios.post("/api/alarm/isChecked", body).then((response) => {
        if (response.data.success) {
          setAlarmCheck(response.data.isCheck);
          dispatch(setAlarmTrue());
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const ChatCheckd = new Promise((resolve, reject) => {
    UserRef.child(`${user.userData.uid}/chats`)
      .orderByChild("isCheck")
      .equalTo(false)
      .on("value", (snapshot) => {
        resolve(snapshot.val());
      });
  });

  useEffect(() => {
    if (!alarm.AlarmCheckFin) {
      AlarmChecked();
    } else {
      ChatCheckd.then((val) => {
        if (val === null) {
          setChatCheck(false);
        } else {
          setChatCheck(true);
        }
        setChatCheckFin(true);
      });
    }
  }, [alarm.AlarmCheckFin]);

  return (
    <>
      {ChatCheckFin ? (
        <>
          {AlarmCheck || ChatCheck ? (
            <PinBell onClick={() => props.setalarmHambucControl(true)} />
          ) : (
            <Bell onClick={() => props.setalarmHambucControl(true)} />
          )}
          {props.alarmHambucControl && (
            <AlarmModal
              AlarmCheck={AlarmCheck}
              ChatCheck={ChatCheck}
              setalarmHambucControl={props.setalarmHambucControl}
            />
          )}
        </>
      ) : null}
    </>
  );
}

export default HeaderBell;
