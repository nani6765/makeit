import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import Avatar from "react-avatar";
import { HeaderLoginDiv } from "../../css/HeaderElement.js";
import MyPageModal from "./MyPageModal.js";
import HeaderBell from "./HeaderBell.js";

function HeaderLoginArea(props) {
  const user = useSelector((state) => state.user);
  const [Width, setWidth] = useState(window.innerWidth);

  const alarmInnerRef = useOuterClick((e) => {
    props.setalarmHambucControl(false);
  });

  const myPageInnerRef = useOuterClick((e) => {
    props.setmyPageHambucControl(false);
  });

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions) 
  }, []);

  return (
    <HeaderLoginDiv>
      {user.userData ? (
        <>
          <div className="hambuc" ref={alarmInnerRef}>
            <HeaderBell
              setalarmHambucControl={props.setalarmHambucControl}
              alarmHambucControl={props.alarmHambucControl}
              setalarmHambucControl={props.setalarmHambucControl}
            />
          </div>
          <div className="hambuc" ref={myPageInnerRef}>
            <Avatar
              className="profile"
              src={user.userData ? user.userData.photoURL : "./test.png"}
              size={Width > 480 ? 40 : 20}
              round={true}
              onClick={() => props.setmyPageHambucControl(true)}
            />

            {props.myPageHambucControl ? (
              <MyPageModal
                setmyPageHambucControl={props.setmyPageHambucControl}
              />
            ) : null}
          </div>
        </>
      ) : (
        <Link to="/login">
          <button className="loginBtn">로그인</button>
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
