import React from "react";

function Title(props) {
  return (
    <>
      <input
        name="title"
        className="title"
        placeholder="제목을 입력하세요"
        value={props.title}
        onChange={(e) => {
          if(e.currentTarget.value.length <= 30)
            props.settitle(e.currentTarget.value)
        }}
      />
    </>
  );
}

export default Title;
