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

  const GetLogs = () => {
    let body = {
      uid: user.userData.uid,
    };
    axios.post("/api/user/getMyLog", body).then((response) => {
      if (response.data.success) {
        setLogList([...response.data.logs]);
      } else {
        alert("error");
      }
    });
  };

  useEffect(async () => {
    setIsLoading(true);
    await GetLogs();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log(LogList);
  }, [LogList]);

  return (
    <div>
      {IsLoading ? (
        <Loading />
      ) : (
        <AlarmListDiv id="AlarmListDiv">
          {LogList.map((log, idx) => {
            return <LogContent key={idx} Log={log} />;
          })}
        </AlarmListDiv>
      )}
    </div>
  );
}

export default ActivityLog;
