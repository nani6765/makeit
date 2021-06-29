import React, { useState, useEffect, useRef } from "react";
import { RepleContentGrid } from "../../css/CommunityDetailElement.js";
import Avatar from "react-avatar";
import PostModal from "./PostModal.js";

function RepleContent(props) {
  const [hambucControl, sethambucControl] = useState(false);
  const [Reple, setReple] = useState(props.reple);
  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

  return (
    <>
      <RepleContentGrid key={props.idx}>
        <div className="content">
          <div className="avatar">
            <Avatar
              src={Reple.auther.avatar}
              size="50"
              round={true}
              style={{ border: "1px solid #c6c6c6" }}
            />
          </div>
          <p className="author">{Reple.auther.name}</p>
          {props.user.userData._id === Reple.auther._id ? (
            <div
              className="hambuc"
              onClick={() => sethambucControl(true)}
              ref={innerRef}
            >
              <i
                className="bi bi-three-dots"
                onClick={() => sethambucControl(true)}
              ></i>
              {hambucControl ? <PostModal /> : null}
            </div>
          ) : null}

          <p className="date">{Reple.realTime}</p>
          <p className="desc">{Reple.content}</p>
        </div>
      </RepleContentGrid>
    </>
  );
}

function useOuterClick(callback) {
  const callbackRef = useRef();
  const innerRef = useRef();
  useEffect(() => {
    callbackRef.current = callback;
  });
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      )
        callbackRef.current(e);
    }
  }, []);
  return innerRef;
}

export default RepleContent;
