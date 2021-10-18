import React from "react";

function Title(props) {
  return (
    <>
      <input
        name="title"
        className="title"
        placeholder="제목을 입력하세요"
        value={props.Title}
        onChange={(e) => props.setTitle(e.currentTarget.value)}
      />
    </>
  );
}

export default Title;
