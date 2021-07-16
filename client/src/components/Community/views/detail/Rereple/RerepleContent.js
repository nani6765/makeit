import React, { useState, useEffect, useRef } from "react";
import { withRouter, useHistory } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

import Avatar from "react-avatar";

import { RerepleContentGrid } from "../../../css/CommunityDetailElement.js";
import RerepleModal from "../Modal/RerepleModal.js";
import RerepleGuestModal from "../Modal/RerepleGuestModla.js";
import RerepleEditForm from "./RerepleEditForm.js";

function RerepleContent(props) {
  const [rereple, setrereple] = useState(props.rereple);
  const [hambucControl, sethambucControl] = useState(false);
  const [UpdateCheck, setUpdateCheck] = useState(false);
  const [likeFlag, setlikeFlag] = useState(false);
  const user = useSelector((state) => state.user);
  let history = useHistory();
  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

  useEffect(() => {
    /*
    if (rereple.likeArray.includes(user.userData.uid)) {
      setlikeFlag(true);
    } else {
      setlikeFlag(false);
    }
    */
    console.log("rereple", rereple);
  }, [rereple]);

  function LikeHandler() {
    if (rereple.auther.uid === user.userData.uid) {
      return alert("본인 댓글에는 좋아요를 누를 수 없습니다!");
    }
    if (user.userData === null) {
      alert("로그인한 회원만 좋아요를 누를 수 있습니다.");
      return history.push("/login");
    }
    let target = document.querySelector("#likeArea");
    target.style.disable = "true";

    let body = {
      repleId: props.reple._id,
      likeFlag: likeFlag,
      userId: props.user._id,
      rerepleId: rereple._id,
    };

    axios.post("/api/community/rerepleLike", body).then((response) => {
      if (response.data.success) {
        target.style.disable = "false";
        window.location.reload();
      } else {
        window.location.reload();
      }
    });
  }

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

        <div className="like">
          <button
            className={likeFlag ? "active" : null}
            id="likeArea"
            type="button"
            onClick={LikeHandler}
          >
            {likeFlag ? (
              <i className="bi bi-emoji-smile-fill"></i>
            ) : (
              <i className="bi bi-emoji-smile"></i>
            )}
            {/*공감({rereple.likeArray.length})*/}
          </button>
        </div>

        {user.userData ? null : (
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
              ) : user.userData ? null : (
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

export default withRouter(RerepleContent);
