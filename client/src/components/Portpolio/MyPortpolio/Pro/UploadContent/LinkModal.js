import React, { useState, useEffect, useRef } from "react";
import { ModalDiv } from "../../../CSS/MyPortpolio/UploadCSS.js";
function LinkModal(props) {
  const [Link, setLink] = useState("");

  const ref = useRef();
  useOnClickOutside(ref, () => props.setLinkFlag(false));

  const LinkSubmit = (e) => {
    e.preventDefault();
    var expUrl = /^http[s]?\:\/\//i;
    if (!expUrl.test(Link)) {
      return alert("URL 형식을 확인해주세요.");
    }
    let temp = [...props.LinkArr];
    console.log(temp);
    console.log(props.LinkFlag - 1);
    temp[props.LinkFlag - 1].value = Link;
    console.log(temp);
    props.setLinkArr([...temp]);
    props.setLinkFlag(false);
  };

  return (
    <ModalDiv>
      <div ref={ref} className="linkModal">
        <input
          type="text"
          value={Link}
          onChange={(e) => setLink(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) LinkSubmit(e);
          }}
        />
        <div className="btnDiv">
          <button
            onClick={(e) => {
              e.preventDefault();
              props.setLinkFlag(false);
            }}
          >
            취소
          </button>
          <button className="submit" onClick={(e) => LinkSubmit(e)}>
            등록
          </button>
        </div>
      </div>
    </ModalDiv>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default LinkModal;
