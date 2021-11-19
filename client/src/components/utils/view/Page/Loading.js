import React from "react";
import { Spinner } from "react-bootstrap";
import { LoadingDiv } from "./PageCSS.js";

function Loading() {
  return (
    <LoadingDiv>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </LoadingDiv>
  );
}

export default Loading;
