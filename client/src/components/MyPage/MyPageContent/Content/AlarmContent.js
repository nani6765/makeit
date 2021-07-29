import React from "react";
import { withRouter, Link } from "react-router-dom";
import { AlarmContentDiv, NoLinkCSS } from "../../css/AlarmCenterCSS.js";
import { ReactComponent as Comment } from "../../css/comment.svg";
import { ReactComponent as Like } from "../../css/like.svg";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function AlarmContent(props) {
  return (
  <Link to = {`${props.alarm.category}/${props.alarm.url}`} css={NoLinkCSS}>  
    <AlarmContentDiv>
        <div className="Icon">
          {props.AlarmType === "공감" ? <Like />: <Comment />}
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
    </Link>
  );
}

export default withRouter(AlarmContent);
