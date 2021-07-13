import React, { useState, useEffect, useRef } from "react";
import { RepleContentGrid } from "../../../css/CommunityDetailElement.js";
import { withRouter } from "react-router";
import Avatar from "react-avatar";
import RepleModal from "../Modal/RepleModal.js";
import RepleGuestModal from "../Modal/RepleGuestModal.js";
import RepleEditForm from "./RepleEditForm.js";
import RerepleUpload from "../Rereple/RerepleUpload.js";
import RerepleContent from "../Rereple/RerepleContent.js";
import axios from "axios";

function RepleContent(props) {
  const [hambucControl, sethambucControl] = useState(false);
  const [Reple, setReple] = useState(props.reple);
  const [UpdateCheck, setUpdateCheck] = useState(false); //글수정 업데이트체크2
  const [likeFlag, setlikeFlag] = useState(false);
  const [rerepleUpload, setrerepleUpload] = useState(false);
  //const [rerepleInfo, setrerepleInfo] = useState([])

  const innerRef = useOuterClick((e) => {
    sethambucControl(false);
  });

  useEffect(() => {
    if (Reple.likeArray.includes(props.user.userData._id)) {
      setlikeFlag(true);
    } else {
      setlikeFlag(false);
    }
  }, []);

  function LikeHandler() {
    console.log(Reple);

    if (Reple.auther._id === props.user.userData._id) {
      return alert("본인 댓글에는 좋아요를 누를 수 없습니다!");
    }
    if (props.user.userData.error === true) {
      alert("로그인한 회원만 좋아요를 누를 수 있습니다.");
      return props.history.push("/login");
    }
    let target = document.querySelector("#likeArea");
    target.style.disable = "true";

    let body = {
      repleId: Reple._id,
      likeFlag: likeFlag,
      userId: props.user.userData._id,
    };

    axios.post("/api/community/repleLike", body).then((response) => {
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
              src={Reple.auther.avatar}
              size="50"
              round={true}
              style={{ border: "1px solid #c6c6c6" }}
            />
          </div>
          <p className="author">{Reple.auther.name}</p>

          {props.user.userData.error === true ? null : (
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
                props.user.userData._id === Reple.auther._id ? (
                  <RepleModal
                    repleInfo={Reple}
                    setUpdateCheck={setUpdateCheck}
                    setrerepleUpload={setrerepleUpload}
                  />
                ) : props.user.userData.error === true ? null : (
                  <RepleGuestModal setrerepleUpload={setrerepleUpload} userId = {props.user.userData._id} postInfo={props.postInfo}/>
                )
              ) : null}
            </div>
          )}

          <p className="date">{Reple.realTime}</p>
          {UpdateCheck ? (
            <div className="desc">
              <RepleEditForm setUpdateCheck={setUpdateCheck} Reple={Reple} />
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

      {rerepleUpload ? (
        <RerepleUpload
          Reple={Reple}
          userData={props.user.userData}
          postInfo={props.postInfo}
          setrerepleUpload={setrerepleUpload}
        />
      ) : null}

      {Reple.rerepleNum === 0
        ? null
        : Reple.rerepleArray.map((rereple, idx) => {
            return (
              <RerepleContent
                rereple={rereple}
                reple={Reple}
                user={props.user.userData}
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
