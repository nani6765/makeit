import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import Avatar from "react-avatar";
import { HeaderLoginDiv } from "../../css/HeaderElement.js";
import MyPageModal from "./MyPageModal.js";
import AlarmModal from "./AlarmModal.js";

function HeaderLoginArea() {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.userData) {
      console.log("true");
    } else {
      console.log("flase");
    }
  }, []);
  //modal
  const [alarmHambucControl, setalarmHambucControl] = useState(false);
  const [myPageHambucControl, setmyPageHambucControl] = useState(false);

  const alarmInnerRef = useOuterClick((e) => {
    setalarmHambucControl(false);
  });
  const myPageInnerRef = useOuterClick((e) => {
    setmyPageHambucControl(false);
  });

  return (
    <HeaderLoginDiv>
      {user.userData ? (
        <>
          <div className="hambuc" ref={alarmInnerRef}>
            <i
              className="bell bi bi-bell"
              onClick={() => setalarmHambucControl(true)}
            ></i>
            {alarmHambucControl ? <AlarmModal /> : null}
          </div>
          <div className="hambuc" ref={myPageInnerRef}>
            <Avatar
              className="profile"
              src={user.userData ? user.userData.avatar : "./test.png"}
              size="35px"
              round={true}
              onClick={() => setmyPageHambucControl(true)}
            />
            {myPageHambucControl ? (
              <MyPageModal setmyPageHambucControl={setmyPageHambucControl} />
            ) : null}
          </div>
        </>
      ) : (
        <Link to="/login">
          <button className="loginBtn">Login</button>
        </Link>
      )}
    </HeaderLoginDiv>
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

export default withRouter(HeaderLoginArea);
