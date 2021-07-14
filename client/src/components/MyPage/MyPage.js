import React, { useState, useEffect } from "react";
import { MyPageMainDiv, MyPageSubTitle, PCOnly } from "./css/MyPageElement.js";
import Avatar from "react-avatar";

function MyPage(props) {
  const [User, setUser] = useState({});

  useEffect(() => {
    setUser({ ...props.user.userData });
  }, []);

  return (
    <MyPageMainDiv>
      <p className="title">마이페이지</p>
      <MyPageSubTitle>
        <p>내정보 관리</p>
      </MyPageSubTitle>

      <div className="profile">
        <h1>프로필</h1>
        <p>
          <PCOnly>
            자신의 색깔을 나타낼 수 있는 프로필 사진을 등록해주세요!
          </PCOnly>
        </p>
        <div className="profileContainer">
          <Avatar
            src={User.avatar}
            size="50"
            round={true}
            style={{ border: "1px solid #c6c6c6" }}
            className="img"
          />
          <p className="name">{User.name}</p>
          <p className="email">{User.email}</p>
          <div className="next">
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
        <div className="topLeft">활동이력</div>
        <div className="topRight">알림센터/쪽지함</div>
        <div className="bottomLeft">문의하기/신고하기</div>
        <div className="bottomRight">환경설정</div>
      </div>
    </MyPageMainDiv>
  );
}

export default MyPage;
