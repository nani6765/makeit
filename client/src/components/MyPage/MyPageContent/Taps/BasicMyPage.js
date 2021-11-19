import React from "react";
import { PCOnly } from "../../css/MyPageElement.js";
import Avatar from "react-avatar";
import { useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";

function BasicMyPage(props) {
  const user = useSelector((state) => state.user);
  let history = useHistory();

  return (
    <div>
      <div className="profile">
        <h1>프로필</h1>
        <p>
          <PCOnly>
            자신의 색깔을 나타낼 수 있는 프로필 사진을 등록해주세요!
          </PCOnly>
        </p>
        <div className="profileContainer">
          <Avatar
            src={user.userData.photoURL}
            size="50"
            round={true}
            style={{ border: "1px solid #c6c6c6" }}
            className="img"
          />
          <p className="name">{user.userData.displayName}</p>
          <p className="email">{user.userData.email}</p>
          <div
            className="next"
            onClick={() => {
              props.setTaps("profile");
              history.push("/mypage?Taps=profile");
            }}
          >
            <span>＞</span>
          </div>
        </div>
        <h1>상태메세지</h1>
        <p>
          <PCOnly>
            상태 메세지에 관심사, 소속, 직업 등을 적어 자신을 표현해보세요!
          </PCOnly>
        </p>
        <div></div>
      </div>

      <div className="btnDiv">
        <div
          className="topLeft"
          onClick={() => props.history.push("/MyPage?Taps=activityHistory")}
        >
          활동이력
        </div>
        <div
          className="topRight"
          onClick={() => props.history.push("/MyPage?Taps=alarmCenter&AlarmType=alarm")}
        >
          알림센터/쪽지함
        </div>
        <div className="bottomLeft">문의하기/신고하기</div>
        <div className="bottomRight">환경설정</div>
      </div>
    </div>
  );
}

export default withRouter(BasicMyPage);
