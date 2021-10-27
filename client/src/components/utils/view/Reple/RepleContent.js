import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import Avatar from "react-avatar";

import RepleModal from "../Modal/RepleModal.js";

import RepleEditForm from "./Form/RepleEditForm.js";
import RerepleUpload from "./Form/RerepleUpload.js";

import RerepleDiv from "./Rereple/RerepleDiv.js";
import { RepleContentGrid } from "./RepleCSS.js";

function RepleContent(props) {
  const [hambucControl, sethambucControl] = useState(false);
  const [Reple, setReple] = useState(props.reple);
  const [UpdateCheck, setUpdateCheck] = useState(false); //글수정 업데이트체크2
  const [likeFlag, setlikeFlag] = useState(false);
  const [rerepleUpload, setrerepleUpload] = useState(false);
  const user = useSelector((state) => state.user);

  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

  useEffect(() => {
    if (Reple.likeArray.includes(user.userData.uid)) {
      setlikeFlag(true);
    } else {
      setlikeFlag(false);
    }
  }, [likeFlag]);

  function LikeHandler() {
    if (Reple.auther.uid === user.userData.uid) {
      return alert("본인 댓글에는 좋아요를 누를 수 없습니다!");
    }
    if (user.userData === null) {
      alert("로그인한 회원만 좋아요를 누를 수 있습니다.");
      return props.history.push("/login");
    }
    let target = document.querySelector("#likeArea");
    target.style.disable = "true";

    let body = {
      _id: Reple._id,
      likeFlag: likeFlag,
      userId: user.userData.uid,
      url: props.postInfo.postNum,
      type: "Reple",
      category: "community/post",
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
    <>
      <RepleContentGrid key={props.idx}>
        <div className="content">
          <div className="avatar">
            <Avatar
              src={Reple.auther.photoURL}
              size="50"
              round={true}
              style={{ border: "1px solid #c6c6c6" }}
            />
          </div>
          <p className="author">{Reple.auther.displayName}</p>

          {user.userData ? (
            <>
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
                  (user.userData.uid === Reple.auther.uid ? (
                    <RepleModal
                      repleInfo={Reple}
                      setUpdateCheck={setUpdateCheck}
                      setrerepleUpload={setrerepleUpload}
                      modalType="reple"
                      isUser={true}
                      type={props.type}
                    />
                  ) : (
                    <RepleModal
                      setrerepleUpload={setrerepleUpload}
                      repleInfo={Reple}
                      modalType="reple"
                      isUser={false}
                      type={props.type}
                    />
                  ))}
              </div>
            </>
          ) : null}

          <p className="date">{Reple.realTime}</p>
          {UpdateCheck ? (
            <div className="desc">
              <RepleEditForm
                setUpdateCheck={setUpdateCheck}
                Reple={Reple}
                type={props.type}
              />
            </div>
          ) : (
            <p className="desc">{Reple.content}</p>
          )}

          <div className="like">
            <button
              className={likeFlag ? "active" : null}
              id="likeArea"
              onClick={LikeHandler}
              type="button"
            >
              {likeFlag ? (
                <i className="bi bi-emoji-smile-fill"></i>
              ) : (
                <i className="bi bi-emoji-smile"></i>
              )}
              공감({Reple.likeNum})
            </button>
          </div>
        </div>
      </RepleContentGrid>

      {rerepleUpload && (
        <RerepleUpload
          Reple={Reple}
          setrerepleUpload={setrerepleUpload}
          type={props.type}
          postNum={props.postInfo.postNum}
        />
      )}

      {Reple.rerepleNum !== 0 &&
        Reple.rerepleArray.map((rereple, idx) => {
          return (
            <RerepleDiv
              rerepleInfo={rereple}
              repleInfo={Reple}
              key={idx}
              type={props.type}
              postNum={props.postInfo.postNum}
            />
          );
        })}
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

export default withRouter(RepleContent);
