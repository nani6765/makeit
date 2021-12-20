import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Avatar from "react-avatar";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import { CardImg, PlayButtonCSS, lineCSS } from "../../css/MainPageElement.js";

function Videos(props) {
  return (
    <Link to={`/making/shareVideo/${props.video.url}`} css={lineCSS}>
      <CardImg draggable="false">
        <div className="thumbnail">
          <img src={props.video.thumbnailUrl} alt="" />
        </div>
        <div className="title">{props.video.oneLineIntroduce}</div>
        <div className="profile">
          <Avatar
            src={props.video.auther.photoURL}
            size="18"
            round={true}
            style={{ border: "1px solid #c6c6c6" }}
          />
          <span>{props.video.auther.displayName}</span>
        </div>
      </CardImg>
    </Link>
  );
}

export default withRouter(Videos);
