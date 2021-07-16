import React, { useState, useEffect } from "react";
import axios from "axios";

function RerepleContentDiv(props) {
  useEffect(() => {
    console.log("rereple", props.rereple);
  }, []);

  return <div>lorem</div>;
}

export default RerepleContentDiv;
