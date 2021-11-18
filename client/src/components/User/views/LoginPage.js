import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import MobileFooter from "../../HeaderAndFooter/Footer/MobileFooter.js";
import { DivCSS, BoxDivCSS, Logo, FormDivCSS, passwordFind } from "../css/UserPageElement.js";
import firebase from "../../../config/firebase.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function LoginPage(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorLogin, setErrorLogin] = useState("");
  const [Loading, setLoading] = useState(false);
  let history = useHistory();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };
    try {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(body.email, body.password);

      /*
      var user = firebase.auth().currentUser;

      if(user.emailVerified == false) {
        alert("이메일 인증을 완료해야합니다.");
        firebase.auth().signOut().then(() => {
          setLoading(false);
          history.push("/");
        }).catch((error) => {
          console.log("logout error");
        })
      }*/
      setLoading(false);
      history.push("/");
    } catch (error) {
      setErrorLogin(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorLogin("");
      }, 5000);
    }
  };

  const GoRegister = css`
    width: 40%;
    text-align: center;
    button {
      width: 100%;
      border: 1px solid #5A278B;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 15px 10px;
      background: #fff;
      color: #5A278B;
      font-weight: bold;
    }
  `;

  return (
    <>
      <div css={DivCSS}>
        <div css={BoxDivCSS}>
          <div css={Logo}>
            <p>로그인</p>
          </div>

          <form css={FormDivCSS} onSubmit={onSubmitHandler}>
            <input
              type="email"
              placeholder="이메일을 입력해 주세요"
              value={Email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              value={Password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <p css={passwordFind}>
              <span>이메일 찾기</span>
              <span>비밀번호 찾기</span>
            </p>
            {ErrorLogin && <p>{ErrorLogin}</p>}
            <button type="submit" disabled={Loading}>
              로그인
            </button>
          </form>

          <div id="naverIdLogin"></div>
          <Link to="/register" css={GoRegister}>
            <button>간편가입하기</button>
          </Link>
        </div>
      </div>
      <MobileFooter />
    </>
  );
}

export default withRouter(LoginPage);
