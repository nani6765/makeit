import React from "react";
import { Link, withRouter } from "react-router-dom";

function UploadButton(props) {
  return (
    <Link
      to={{
        pathname: "/participate/upload",
        state: { category: props.category },
      }}
    >
      <button>게시하기</button>
    </Link>
  );
}

export default withRouter(UploadButton);
