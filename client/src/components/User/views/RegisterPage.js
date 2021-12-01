import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import firebase from "../../../config/firebase.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import {
  DivCSS,
  BoxDivCSS,
  Logo,
  RegisterFormDiv,
} from "../css/UserPageElement.js";
import MobileFooter from "../../HeaderAndFooter/Footer/MobileFooter.js";
import axios from "axios";
import shortId from "shortid";
import ModalDiv from "./ModalDiv.js";
import ToSDiv from "./ToSDiv.js";
import Loading from "../../utils/view/Page/Loading.js";

function RegisterPage() {
  //회원정보
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Nickname, setNickname] = useState("");
  const [NicknameCheck, setNicknameCheck] = useState(false);
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  //이메일 인증
  const [Key, setKey] = useState("");
  const [InputKey, setInputKey] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [EmailCheck, setEmailCheck] = useState(true); //이메일 중복 확인용
  const [EmailCheckVerification, setEmailCheckVerification] = useState(false); //이메일 인증 완료 여부

  //회원가입 완료
  const [ErrorFormSubmit, setErrorFormSubmit] = useState("");
  const [submitLoading, setsubmitLoading] = useState(false);

  const [emailLoading, setemailLoading] = useState(false);
  const [nicknameLoading, setnicknameLoading] = useState(false);
  const [ModalFlag, setModalFlag] = useState(false);
  const [ModalType, setModalType] = useState("sendVerification");

  //이용 약관
  const [AllAgree, setAllAgree] = useState(false);
  const [Service, setService] = useState(false);
  const [Age, setAge] = useState(false);
  const [PersonalInfo, setPersonalInfo] = useState(false);
  const [AD, setAD] = useState(false);
  const [TOSModalFlag, setTOSModalFlag] = useState(false);
  const [TOSType, setTOSType] = useState("서비스 이용약관");

  let history = useHistory();

  const EmailVerification = () => {
    let temp = shortId.generate();
    let body = {
      email: Email,
      key: temp,
      name: Name,
    };
    setKey(temp);
    axios.post("api/user/sendEmail", body).then((response) => {
      if (response.data.success) {
        setModalType("sendVerification");
        setModalFlag(true);
      }
    });
  };

  const verifyEmail = (email) => {
    var regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (email.match(regExp) != null) return true;
    else return false;
  };

  const StartTimer = async () => {
    setemailLoading(true);
    if (!(Email && Name)) {
      setemailLoading(false);
      return alert("이메일과 이름을 모두 입력해주십시오.");
    }
    if (!verifyEmail(Email)) {
      setemailLoading(false);
      return alert("이메일 주소가 잘못되었습니다.");
    }
    var EmailCheckFunc = new Promise((resolve, reject) => {
      let body = {
        email: Email,
      };
      try {
        axios.post("api/user/checkEmail", body).then((response) => {
          if (!response.data.success) reject(response.data.success);
          if (!response.data.doc) {
            //이매일이 없는 경우
            setEmailCheck(false);
            resolve(false);
          } else {
            //이메일이 있는 경우
            setEmailCheck(true);
            resolve(true);
          }
        });
      } catch (error) {
        reject(error);
      }
    });

    EmailCheckFunc.then((val) => {
      setemailLoading(false);
      if (val) {
        return alert("이미 가입된 이메일입니다.");
      } else {
        EmailVerification();
        setMinutes(parseInt(3));
        setTimeout(() => {
          setKey("");
        }, 180000);
      }
    }).catch((reason) => {
      console.log(reason);
    });
  };

  const setToS = () => {
    setService(!AllAgree);
    setAge(!AllAgree);
    setPersonalInfo(!AllAgree);
    setAD(!AllAgree);
    setAllAgree(!AllAgree);
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  async function CheckNickName() {
    setnicknameLoading(true);
    let body = {
      displayName: Nickname,
    };

    await axios.post("/api/user/checkNickname", body).then((response) => {
      if (response.data.success) {
        if (response.data.checkFlag) {
          setNicknameCheck(true);
          setModalType("available");
          setModalFlag(true);
        } else {
          setModalType("duplicate");
          setModalFlag(true);
        }
        setnicknameLoading(false);
      }
    });
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
    if (!EmailCheckVerification) {
      return alert("이메일 인증을 완료해 주세요.");
    }

    if (!NicknameCheck) {
      return alert("닉네임 중복 확인을 완료해 주세요.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Nickname,
    };

    try {
      setsubmitLoading(true);
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(body.email, body.password);

      await createdUser.user.updateProfile({
        displayName: body.name,
        photoURL: `https://kr.object.ncloudstorage.com/makeit/user/profile.png`,
      });

      let user = {
        uid: createdUser.user.uid,
        displayName: createdUser.user.displayName,
        email: body.email,
        photoURL: createdUser.user.photoURL,
      };

      await axios.post("/api/user/register", user).then((response) => {
        if (response.data.success) {
          console.log("success");
        } else {
          console.log("false");
        }
      });

      //Firebase 데이터베이스에 저장해주기
      await firebase.database().ref("users").child(createdUser.user.uid).set({
        name: createdUser.user.displayName,
        image: createdUser.user.photoURL,
      });

      setsubmitLoading(false);
      //회원가입 완료 페이지 만들고 push
      history.push({
        pathname: "/register/complete",
        state: { flag: true },
      });
    } catch (error) {
      console.log(error);
      setErrorFormSubmit(error.message);

      setTimeout(() => {
        setErrorFormSubmit("");
        setsubmitLoading(false);
      }, 5000);
    }
  };

  return (
    <>
      {(emailLoading || nicknameLoading || submitLoading) && <Loading />}
      <div css={DivCSS}>
        <div css={BoxDivCSS}>
          <div css={Logo}>
            <p>회원가입</p>
          </div>
          <form css={RegisterFormDiv} onSubmit={onSubmitHandler}>
            <label className="name">이름</label>
            <input
              type="text"
              value={Name}
              className="nameInput"
              onChange={(e) => setName(e.currentTarget.value)}
              required
            />

            <label className="email">이메일</label>
            <input
              type="email"
              value={Email}
              placeholder="example@makeit.com"
              className="emailInput"
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
              disabled={EmailCheckVerification ? true : false}
            />
            {!EmailCheckVerification && (
              <button
                type="button"
                className="emailBtn"
                onClick={() => StartTimer()}
                disabled={Key ? true : false}
              >
                이메일 인증
              </button>
            )}

            {Key && !EmailCheckVerification ? (
              <>
                <div
                  className="checkEmail"
                  style={{ textAlign: "left", width: "100%" }}
                >
                  <div className="checkEmailInput">
                    <input
                      type="verification"
                      value={InputKey}
                      onChange={(e) => setInputKey(e.currentTarget.value)}
                    />
                    <span style={{ color: "red", marginLeft: "1rem" }}>
                      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="checkEmailBtn"
                    onClick={() => {
                      if (Key === InputKey) {
                        setEmailCheckVerification(true);
                        setModalType("checkVerification");
                        setModalFlag(true);
                      }
                    }}
                  >
                    인증 완료
                  </button>
                </div>
              </>
            ) : null}
            <label className="nickname">닉네임</label>
            <input
              type="text"
              value={Nickname}
              className="nicknameInput"
              onChange={(e) => {
                setNickname(e.currentTarget.value);
                if (NicknameCheck) setNicknameCheck(false);
              }}
              required
            />
            <button
              type="button"
              className="nicknameBtn"
              onClick={() => CheckNickName()}
            >
              중복 확인
            </button>
            <label className="pw">비밀번호</label>
            <input
              type="password"
              className="pwInput"
              placeholder="비밀번호를 입력해주세요"
              value={Password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />

            <label className="checkPW">비밀번호 확인</label>
            <input
              type="password"
              className="checkPWInput"
              value={ConfirmPassword}
              placeholder="비밀번호를 한번 더 입력해주세요"
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              required
            />
            <div className="footer">
              <label>이용약관</label>
              <div className="service"><span onClick={setToS}>전체 동의 합니다.</span></div>
              <div className="service"><span onClick={() => setService(!Service)}>서비스 이용약관 동의 (필수)</span></div>
              <p className="more" onClick={() => {setTOSType("서비스 이용약관"); setTOSModalFlag(true)}}>약관 보기 &gt;</p>
              <div className="service"><span onClick={() => setAge(!Age)}>만 14세 이상입니다. (필수)</span></div>
              <div className="service"><span onClick={() => setPersonalInfo(!PersonalInfo)}>개인정보 수집 및 이용 동의 (필수)</span></div>
              <p className="more" onClick={() => {setTOSType("개인정보"); setTOSModalFlag(true)}}>약관 보기 &gt;</p>
              <div className="service"><span onClick={() => setAD(!AD)}>광고성 정보 수신 동의 (선택)</span></div>
              <p className="more" onClick={() => {setTOSType("광고"); setTOSModalFlag(true)}}>약관 보기 &gt;</p>
            </div>
            {ErrorFormSubmit && <p>{ErrorFormSubmit}</p>}
            <button
              className="submitBtn"
              type="submit"
              disabled={submitLoading}
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
      {ModalFlag && (
        <ModalDiv modalType={ModalType} setModalFlag={setModalFlag} />
      )}
      {TOSModalFlag && (
        <ToSDiv modalType={TOSType} setTOSModalFlag={setTOSModalFlag} />
      )}
      <MobileFooter />
    </>
  );
}

export default withRouter(RegisterPage);
