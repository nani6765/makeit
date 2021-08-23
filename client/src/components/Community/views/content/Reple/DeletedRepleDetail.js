import React, { useState } from "react";
import { useSelector } from "react-redux";

import RerepleDiv from "../Rereple/RerepleDiv.js";

import { RepleContentGrid } from "../../../css/CommunityRepleCSS.js";
import Avatar from "react-avatar";

function DeletedRepleDetail(props) {
  const [Reple, setReple] = useState(props.reple);
  const user = useSelector((state) => state.user);

  return (
    <>
      <RepleContentGrid key={props.idx}>
        <div className="content">
          <div className="avatar">
            <Avatar
              src="https://kr.object.ncloudstorage.com/makeit/user/profile.png"
              size="50"
              round={true}
              style={{ border: "1px solid #c6c6c6" }}
            />
          </div>
          <p className="author">알 수 없는 사용자</p>
          <p className="desc">삭제된 댓글입니다.</p>
        </div>
      </RepleContentGrid>

      {Reple.rerepleNum === 0
        ? null
        : Reple.rerepleArray.map((rereple, idx) => {
            return (
              <RerepleDiv rerepleInfo={rereple} repleInfo={Reple} key={idx} />
            );
          })}
    </>
  );
}

export default DeletedRepleDetail;
