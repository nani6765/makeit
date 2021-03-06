import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setAlarmFalse } from "../../../../redux/_actions/alarm_action.js";

import { AlarmContentDiv } from "../../css/AlarmCenterCSS.js";
import { ReactComponent as Comment } from "../../css/comment.svg";
import { ReactComponent as Like } from "../../css/like.svg";

import axios from "axios";

function AlarmContent(props) {
  let histort = useHistory();
  let dispatch = useDispatch();

  function IsCheck(alarm) {
    let body = { _id: alarm._id };
    axios.post("api/alarm/Check", body).then((response) => {
      if (response.data.success) {
        histort.push(`${alarm.category}/${alarm.url}`);
      }
    });
  }

  return (
    <AlarmContentDiv
      className={props.alarm.isCheck || props.allChecked ? "check" : null}
      onClick={(e) => {
        e.currentTarget.style.pointerEvents = "none";
        dispatch(setAlarmFalse());
        IsCheck(props.alarm);
      }}
    >
      <div className="Icon">
        {props.AlarmType === "공감" ? <Like /> : <Comment />}
      </div>
      <div className="Content">
        <p>{props.AlarmType}</p>
        <p className="date">{props.alarm.realTime}</p>
      </div>
    </AlarmContentDiv>
  );
}

export default withRouter(AlarmContent);
