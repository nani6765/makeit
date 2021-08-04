import React, { useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import { firebase } from "../../../../firebase.js";

import Avatar from "react-avatar";
import TextEllipsis from "react-text-ellipsis";

import moment from "moment";
import "moment/locale/ko";

import { ChatContentDiv } from "../../css/AlarmCenterCSS.js";
function ChatContent(props) {
  let UserRef = firebase.database().ref("users");

  let history = useHistory();
  const user = useSelector((state) => state.user);

  moment.locale("ko");

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <ChatContentDiv
      onClick={() => {
        /*
        UserRef.child(`${user.userData.uid}/chats/${props.ChatRoomId}`).update({
          isCheck: true,
        });
        */
        history.push(`${props.chatInfo.url}`);
      }}
      className={props.chatInfo.isCheck ? "check" : null}
    >
      <div className="profile">
        <Avatar
          src={props.chatInfo.otherImage}
          size="35px"
          style={{ marginBottom: "0px" }}
          round={true}
          onClick={() => props.setmyPageHambucControl(true)}
        />
        <p>{props.chatInfo.otherName}</p>
      </div>

      <div className="content">
        <TextEllipsis lines={2} tag={"p"}>
          {props.chatInfo.comment}
        </TextEllipsis>
      </div>

      <p className="date">
        {moment(props.chatInfo.timestamp).format("YYYY[년] MM[월] DD[일]")}
      </p>
    </ChatContentDiv>
  );
}

export default withRouter(ChatContent);
