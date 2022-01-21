import React from "react";

function PortpolioContent(props) {
  return (
    <>
      <figure className="img">
        <img src={props.content.profileImg} />
      </figure>
      <div className="title">{props.content.titletext}</div>
      <div className="info">
        {props.content.type} / {props.content.Name}
      </div>
    </>
  );
}

export default PortpolioContent;
