import React from "react";
import { withRouter, useHistory } from "react-router-dom";

import { AlarmContentDiv } from "../../css/AlarmCenterCSS.js";
import { ReactComponent as Comment } from "../../css/comment.svg";
import { ReactComponent as Like } from "../../css/like.svg";

import axios from "axios";

function AlarmContent(props) {
  let histort = useHistory();

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
      onClick={() => {
        IsCheck(props.alarm);
      }}
    >
      <div className="Icon">
        {props.AlarmType === "공감" ? <Like /> : <Comment />}
      </div>
      <div className="Content">
        <p>
          내 {props.ContentType}에{" "}
          {props.AlarmType === "댓글" ? (
            <React.Fragment>{props.AlarmType}이 달렸어요</React.Fragment>
          ) : (
            <React.Fragment>{props.AlarmType}을 받았어요</React.Fragment>
          )}
        </p>
        <p className="date">{props.alarm.realTime}</p>
      </div>
    </AlarmContentDiv>
  );
}

export default withRouter(AlarmContent);
