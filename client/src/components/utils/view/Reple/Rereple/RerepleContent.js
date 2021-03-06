import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router";
import axios from "axios";
import Avatar from "react-avatar";

import RepleUserModal from "../../Modal/Reple/RepleUserModal.js";
import RepleGusetModal from "../../Modal/Reple/RepleGusetModal";
import RerepleEditForm from "../Form/RerepleEditForm.js";

import { RerepleContentGrid } from "../RepleCSS.js";

function RerepleContent(props) {
  const [reple, setreple] = useState(props.repleInfo);
  const [rereple, setrereple] = useState(props.rerepleInfo);

  const [hambucControl, sethambucControl] = useState(false);
  const [UpdateCheck, setUpdateCheck] = useState(false);
  const [likeFlag, setlikeFlag] = useState(false);

  const user = useSelector((state) => state.user);
  let history = useHistory();

  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

  useEffect(() => {
    if (user.userData && rereple.likeArray.includes(user.userData.uid)) {
      setlikeFlag(true);
    } else {
      setlikeFlag(false);
    }
  }, [rereple]);

  function LikeHandler() {
    if (user.userData === null) {
      alert("로그인한 회원만 좋아요를 누를 수 있습니다.");
      return history.push("/login");
    }
    if (rereple.auther.uid === user.userData.uid) {
      return alert("본인 대댓글에는 좋아요를 누를 수 없습니다!");
    }
    let target = document.querySelector("#likeArea");
    target.style.disable = "true";

    let body = {
      likeFlag: likeFlag,
      userId: user.userData.uid,
      _id: rereple._id,
      url: props.url,
      type: "Rereple",
      category: props.category,
    };

    axios.post("/api/util/like", body).then((response) => {
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
            src={rereple.auther.photoURL}
            size="50"
            round={true}
            style={{ border: "1px solid #c6c6c6" }}
          />
        </div>
        <p className="author">{rereple.auther.displayName}</p>
        <p className="date">{rereple.realTime}</p>

        {UpdateCheck ? (
          <RerepleEditForm
            rereple={rereple}
            setUpdateCheck={setUpdateCheck}
            replePid={reple.replePid}
            type={props.type}
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
            공감({rereple.likeArray.length})
          </button>
        </div>

        {user.userData ? (
          <div
            className="hambuc"
            onClick={() => sethambucControl(true)}
            ref={innerRef}
          >
            <i
              className="bi bi-three-dots"
              onClick={() => sethambucControl(true)}
            ></i>
            {hambucControl &&
              (user.userData.uid === rereple.auther.uid ? (
                <RepleUserModal
                  reple={reple}
                  rereple={rereple}
                  setUpdateCheck={setUpdateCheck}
                  modalType="rereple"
                  type={props.type}
                />
              ) : (
                <RepleGusetModal
                  rereple={rereple}
                  modalType="rereple"
                  type={props.type}
                />
              ))}
          </div>
        ) : null}
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
