import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom"
import { ChatGNBDiv } from "../css/ChatDetailElement.js";
import Avatar from "react-avatar";
import DeleteIcon from "../css/DeleteIcon.svg";
import { firebase } from "../../../firebase.js";

function ChatGNB(props) {
  let history = useHistory();
  let InfoRef = firebase.database().ref("users");

  const [OtherInfo, setOtherInfo] = useState({});

  useEffect(() => {
    InfoRef.child(props.OthersUid).once('value', (DataSnapshot) => {
      setOtherInfo(DataSnapshot.val());
    })
  }, []);

  return (
    <ChatGNBDiv>
      <div className="back" onClick = {() => history.goBack()}>
        <svg
          width="11"
          height="15"
          viewBox="0 0 16 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="18.7622"
            height="2.47872"
            rx="1.23936"
            transform="matrix(0.743704 0.668509 -0.579073 0.815276 1.43457 11.3799)"
            fill="black"
          />
          <rect
            width="18.7622"
            height="2.47872"
            rx="1.23936"
            transform="matrix(-0.743704 0.668509 0.579073 0.815276 14.5645 0)"
            fill="black"
          />
        </svg>
        <span>뒤로가기</span>
      </div>
      <div className="profile">
        <Avatar
          src={OtherInfo.image}
          size="35"
          round={true}
          style={{ border: "1px solid #c6c6c6" }}
        />
        <p>{OtherInfo.name}</p>
      </div>
      <div className="delete">
        <img
          src={DeleteIcon}
          alt=""
          style={{ width: "12px", height: "16px", marginBottom: "0.5rem" }}
        />
        <span>나가기</span>
      </div>
    </ChatGNBDiv>
  );
}

export default withRouter(ChatGNB);
