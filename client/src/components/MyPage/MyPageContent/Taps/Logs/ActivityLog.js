import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Loading from "../../../../utils/view/Page/Loading.js";
import LogContent from "../../Content/LogContent.js";

import { AlarmListDiv } from "../../../css/AlarmCenterCSS.js";

import axios from "axios";

function ActivityLog(props) {
  const user = useSelector((state) => state.user);

  const [IsLoading, setIsLoading] = useState(false);
  const [LogList, setLogList] = useState([]);
  const [Limit, setLimit] = useState(0);

  const ScrollFunction = () => {
    let TargetDiv = document.querySelector("#AlarmListDiv");
    if (
      Math.ceil(TargetDiv.scrollTop) + Math.ceil(TargetDiv.clientHeight) >=
      TargetDiv.scrollHeight
    ) {
      props.GetAlarmList(5);
    }
  };

  useEffect(() => {
    let TargetDiv = document.querySelector("#AlarmListDiv");
    window.addEventListener("scorll", ScrollFunction, true);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    let body = {
      uid: user.userData.uid,
    };
    axios.post("/api/user/getMyLog", body).then((response) => {
      if (response.data.success) {
        setLogList([...response.data.logs]);
      } else {
        alert("error");
      }
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log(LogList);
  }, [LogList]);

  return (
    <div>
      {IsLoading ? (
        <Loading />
      ) : (
        <AlarmListDiv id="AlarmListDiv" onScroll={ScrollFunction}>
          {LogList.map((log, idx) => {
            return <LogContent key={idx} Log={log} />;
          })}
        </AlarmListDiv>
      )}
    </div>
  );
}

export default ActivityLog;
