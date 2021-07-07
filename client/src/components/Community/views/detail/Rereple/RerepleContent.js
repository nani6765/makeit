import React, { useState, useEffect, useRef } from "react";
import Avatar from "react-avatar";
import { RerepleContentGrid } from "../../../css/CommunityDetailElement.js";
import RerepleModal from "../Modal/RerepleModal.js";
import RerepleGuestModal from "../Modal/RerepleGuestModla.js";
import RerepleEditForm from "./RerepleEditForm.js";

function RerepleContent(props) {
  const [rereple, setrereple] = useState(props.rereple);
  const [hambucControl, sethambucControl] = useState(false);
  const [UpdateCheck, setUpdateCheck] = useState(false);

  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

  useEffect(() => {
    console.log("리리플 컨텐츠", props);
  }, []);

  return (
    <RerepleContentGrid>
      <div className="content">
        <div className="avatar">
          <Avatar
            src={rereple.avatar}
            size="50"
            round={true}
            style={{ border: "1px solid #c6c6c6" }}
          />
        </div>
        <p className="author">{rereple.name}</p>
        <p className="date">{rereple.realTime}</p>

        {UpdateCheck ? (
          <RerepleEditForm
            rereple={rereple}
            setUpdateCheck={setUpdateCheck}
            replePid={props.reple.replePid}
          />
        ) : (
          <p className="desc">{rereple.content}</p>
        )}

        {props.user.error === true ? null : (
          <div
            className="hambuc"
            onClick={() => sethambucControl(true)}
            ref={innerRef}
          >
            <i
              className="bi bi-three-dots"
              onClick={() => sethambucControl(true)}
            ></i>

            {hambucControl ? (
              props.user._id === rereple.auther ? (
                <RerepleModal
                  setUpdateCheck={setUpdateCheck}
                  rereple={rereple}
                  reple={props.reple}
                />
              ) : props.user.error === true ? null : (
                <RerepleGuestModal />
              )
            ) : null}
          </div>
        )}
      </div>
    </RerepleContentGrid>
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
      ) {
        callbackRef.current(e);
      }
      //수정버튼 클릭시
      if (e.target.className === "edit") {
        callbackRef.current(!e);
      }
    }
  }, []);
  return innerRef;
}

export default RerepleContent;
