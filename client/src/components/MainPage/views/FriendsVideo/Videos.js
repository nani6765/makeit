import React from "react";
import { Link, withRouter } from "react-router-dom";

import { CardImg } from "../../css/MainPageElement.js";

function Videos(props) {
  return (
    <Link to={`/making/shareVideo/${props.video.url}`}>
      <CardImg draggable="true">
        <figure
          style={{
            width: "100%",
            paddingTop: "62.5%",
            position: "relative",
          }}
        >
          <img
            src={props.video.thumbnailUrl}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              transform: "translate(-50%,-50%)",
            }}
          />
        </figure>
      </CardImg>
    </Link>
  );
}

export default withRouter(Videos);
