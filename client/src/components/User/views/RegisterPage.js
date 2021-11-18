import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import firebase from "../../../config/firebase.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { DivCSS, BoxDivCSS, Logo, RegisterFormDiv } from "../css/UserPageElement.js";
import MobileFooter from "../../HeaderAndFooter/Footer/MobileFooter.js";
import axios from "axios";
import shortId from "shortid";
import { Spinner } from 'react-bootstrap';

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
  const [emailLoading, setemailLoading] = useState(false);
  const [nicknameLoading, setnicknameLoading] = useState(false);
  const [submitLoading, setsubmitLoading] = useState(false);

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
      if (response.data.success) alert("이메일이 전송되었습니다.");
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
      return alert("이메일과 이름을 모두 입력해주십시오.");
    }
    if (!verifyEmail(Email)) {
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
      displayName:Nickname,
    };

    await axios.post("/api/user/checkNickname", body).then((response) => {
      if(response.data.success) {
        if(response.data.checkFlag) {
          setNicknameCheck(true);
          alert("사용가능한 닉네임입니다.");
        }
        else {
          alert("이미 존재하는 닉네임입니다.");
        }
        setnicknameLoading(false);
      }
    })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }
    if (!EmailCheckVerification) {
      return alert("이메일 인증을 완료해 주세요.");
    }

    if(!NicknameCheck) {
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
      {(emailLoading || nicknameLoading || submitLoading) && 
        <div style={{backgroundColor: "black", opacity: "0.3", width: "100vw", height: "100vh", zIndex: "10", position: "absolute", top: "0", left: "0", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
          <Spinner animation="border" role="status">
           <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }
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
                <div className="checkEmail" style={{ textAlign: "left", width: "100%" }}>
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
                        alert("이메일 인증이 완료되었습니다.");
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
                if(NicknameCheck)
                  setNicknameCheck(false);
              }}
              required
            />
            <button
              type="button"
              className="nicknameBtn"
              onClick={() => CheckNickName()}
            >
              중복확인
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
            <div className="service">1</div>
            <div className="service">2</div>
            <p className="more">약관 보기 &gt;</p>
            <div className="service">3</div>
            <p className="more">약관 보기 &gt;</p>
            <div className="service">4</div>
            <p className="more">약관 보기 &gt;</p>
            </div>
            {ErrorFormSubmit && <p>{ErrorFormSubmit}</p>}
              <button className="submitBtn" type="submit" disabled={submitLoading}>
                가입하기
              </button>
          </form>
        </div>
      </div>
      <MobileFooter />
    </>
  );
}

export default withRouter(RegisterPage);
