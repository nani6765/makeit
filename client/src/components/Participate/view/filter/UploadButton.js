import React from "react";
import { Link, withRouter } from "react-router-dom";

import { ReactComponent as PenIcon } from "../../../MakingMedia/css/Img/Pen.svg";

function UploadButton(props) {
  return (
    <Link
      to={{
        pathname: "/participate/upload",
        state: { category: props.category },
      }}
      className="submitBtn"
    >
      <button>
        게시하기
        <PenIcon />
      </button>
    </Link>
  );
}

export default withRouter(UploadButton);
