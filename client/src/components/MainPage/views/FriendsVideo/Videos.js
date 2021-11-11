import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import { CardImg, PlayButtonCSS } from "../../css/MainPageElement.js";

function Videos(props) {
  return (
    <Link to={`/making/shareVideo/${props.video.url}`}>
      <CardImg draggable="false">
        <img src={props.video.thumbnailUrl} className="thumbnail" alt="" />
      </CardImg>
    </Link>
  );
}

export default withRouter(Videos);
