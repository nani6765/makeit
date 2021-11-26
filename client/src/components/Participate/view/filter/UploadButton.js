import React from "react";
import { Link, withRouter } from "react-router-dom";

import { UploadBtnDiv } from "../../css/ParticipateCSS.js";

function UploadButton(props) {
  return (
    <UploadBtnDiv>
      <Link
        to={{
          pathname: "/participate/upload",
          state: { category: props.category },
        }}
        className="submitBtn"
      >
        <button>
          게시하기
        </button>
      </Link>
    </UploadBtnDiv>
  );
}

export default withRouter(UploadButton);
