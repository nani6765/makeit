import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ModalDiv } from "../../css/HeaderElement.js";

function AlarmModal(props) {
  return (
    <ModalDiv>
      <div>
        <Link to={{
            pathname: `/MyPage`,
            state: {
                Taps:"alarmCenter",
                AlarmType:"alarm",
            }
          }}
           style={{ color: "black", textDecoration: "none" }}
          >
        <span  className={ props.AlarmCheck ? "new" : null} onClick={() => props.setalarmHambucControl(false)}>알림센터</span>
        </Link>
      </div>
      <div>
        <Link to={{
            pathname: `/MyPage`,
            state: {
                Taps:"alarmCenter",
                AlarmType:"note",
            }
          }}
           style={{ color: "black", textDecoration: "none" }}
          >
        <span  className={ props.ChatCheck ? "new" : null} onClick={() => props.setalarmHambucControl(false)}>쪽지함</span>
        </Link>
      </div>
    </ModalDiv>
  );
}

export default withRouter(AlarmModal);
