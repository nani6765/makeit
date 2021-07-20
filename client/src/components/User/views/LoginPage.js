import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import MobileFooter from "../../HeaderAndFooter/Footer/MobileFooter.js";
import { DivCSS, BoxDivCSS, Logo, FormDivCSS } from "../css/UserPageElement.js";
import { firebase } from "../../../firebase.js";

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

      var user = firebase.auth().currentUser;

      if(user.emailVerified == false) {
        alert("이메일 인증을 완료해야합니다.");
        firebase.auth().signOut().then(() => {
          setLoading(false);
          history.push("/");
        }).catch((error) => {
          console.log("logout error");
        })
      }
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

  const passwordFind = css`
    width: 100%;
    text-align: right;
    color: #454345;
    font-size: 10px;
  `;

  const GoRegister = css`
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    color: #454345;
    a {
      font-weight: bold;
      text-decoration: none;
      pointer: cursor;
      color: #454345;
      cursor: pointer;
    }
  `;

  return (
    <>
      <div css={DivCSS}>
        <div css={BoxDivCSS}>
          <div css={Logo}>
            <img src={process.env.PUBLIC_URL + "/Img/logo.png"} alt="" />
            <p>
              영상의 시작,
              <br />
              영상이 쉬워지는 곳
            </p>
          </div>

          <form css={FormDivCSS} onSubmit={onSubmitHandler}>
            <label>이메일</label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <label>비밀번호</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <p css={passwordFind}>비밀번호찾기</p>
            {ErrorLogin && <p>{ErrorLogin}</p>}
            <button type="submit" disabled={Loading}>
              로그인
            </button>
          </form>

          <div id="naverIdLogin"></div>
          <p css={GoRegister}>
            아직 계정이 없으신가요? <Link to="/register">간편가입하기</Link>
          </p>
        </div>
      </div>
      <MobileFooter />
    </>
  );
}

export default withRouter(LoginPage);
