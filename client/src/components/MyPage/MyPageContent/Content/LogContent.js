import React from "react";
import { Link, withRouter } from "react-router-dom";
import { LogContentDiv } from "../../css/MyPageContentElement.js";

function LogContent(props) {
  return (
    <LogContentDiv>
      <Link to={props.Log.url}>
        {props.Log.type}
        {props.Log.realTime}
      </Link>
    </LogContentDiv>
  );
}

export default withRouter(LogContent);
